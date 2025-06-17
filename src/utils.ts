/**
 * Constructs an authorization URL for an upstream service.
 *
 * @param {Object} options
 * @param {string} options.upstream_url - The base URL of the upstream service.
 * @param {string} options.client_id - The client ID of the application.
 * @param {string} options.redirect_uri - The redirect URI of the application.
 * @param {string} [options.state] - The state parameter.
 *
 * @returns {string} The authorization URL.
 */
export function getUpstreamAuthorizeUrl({
	upstream_url,
	client_id,
	scope,
	redirect_uri,
	state,
}: {
	upstream_url: string;
	client_id: string;
	scope: string;
	redirect_uri: string;
	state?: string;
}) {
	const upstream = new URL(upstream_url);
	upstream.searchParams.set("client_id", client_id);
	upstream.searchParams.set("redirect_uri", redirect_uri);
	upstream.searchParams.set("scope", scope);
	if (state) {upstream.searchParams.set("state", state);}
	upstream.searchParams.set("response_type", "code");
	return upstream.href;
}

/**
 * Fetches an authorization token from an upstream service.
 *
 * @param {Object} options
 * @param {string} options.client_id - The client ID of the application.
 * @param {string} options.client_secret - The client secret of the application.
 * @param {string} options.code - The authorization code.
 * @param {string} options.redirect_uri - The redirect URI of the application.
 * @param {string} options.upstream_url - The token endpoint URL of the upstream service.
 *
 * @returns {Promise<[string, null] | [null, Response]>} A promise that resolves to an array containing the access token or an error response.
 */
export async function fetchUpstreamAuthToken({
	client_id,
	client_secret,
	code,
	redirect_uri,
	upstream_url,
}: {
	code: string | undefined;
	upstream_url: string;
	client_secret: string;
	redirect_uri: string;
	client_id: string;
}): Promise<[string, string, null] | [null, Response]> {
	if (!code) {
		return [null, new Response("Missing code", { status: 400 })];
	}

	// Feishu requires a different format for token requests
	if (upstream_url.includes('feishu.cn') || upstream_url.includes('larksuite.com')) {
		const resp = await fetch(upstream_url, {
			method: "POST",
			headers: {
				"Content-Type": "application/json; charset=utf-8",
			},
			body: JSON.stringify({
				grant_type: "authorization_code",
				code,
				client_id,
				client_secret,
				redirect_uri
			}),
		});

		if (!resp.ok) {
			return [null, new Response("Failed to fetch access token", { status: 500 })];
		}
		const data = await resp.json() as {
			access_token: string;
			refresh_token: string;
		};
		const accessToken = data.access_token;
		const refreshToken = data.refresh_token;
		if (!accessToken) {
			return [null, new Response("Missing access token", { status: 400 })];
		}

		return [accessToken, refreshToken, null];
	} else {
		// Original GitHub implementation
		const resp = await fetch(upstream_url, {
			method: "POST",
			headers: {
				"Content-Type": "application/x-www-form-urlencoded",
			},
			body: new URLSearchParams({ client_id, client_secret, code, redirect_uri }).toString(),
		});
		if (!resp.ok) {
			return [null, new Response("Failed to fetch access token", { status: 500 })];
		}
		const body = await resp.formData();
		const accessToken = body.get("access_token") as string;
		const refreshToken = body.get("refresh_token") as string;
		if (!accessToken) {
			return [null, new Response("Missing access token", { status: 400 })];
		}
		return [accessToken, refreshToken, null];
	}
}

/**
 * Refreshes an access token from an upstream service.
 *
 * @param {Object} options
 * @param {string} options.refreshToken - The refresh token of the application.
 * @param {string} options.upstream_url - The token endpoint URL of the upstream service.
 * @param {string} options.client_id - The client ID of the application.
 * @param {string} options.client_secret - The client secret of the application.
 *
 * @returns {Promise<[string, null] | [null, Response]>} A promise that resolves to an array containing the access token or an error response.
 */
export async function refreshUpstreamAuthToken({
	refreshToken,
	upstream_url,
	client_id,
	client_secret,
}: {
	refreshToken: string;
	upstream_url: string;
	client_secret: string;
	client_id: string;
}): Promise<[string, string, number, null] | [null, Response]> {
	// Feishu requires a different format for token requests
	if (upstream_url.includes('feishu.cn') || upstream_url.includes('larksuite.com')) {
		const resp = await fetch(upstream_url, {
			method: "POST",
			headers: {
				"Content-Type": "application/json; charset=utf-8",
			},
			body: JSON.stringify({
				grant_type: "refresh_token",
				refresh_token: refreshToken,
				client_id,
				client_secret,
			}),
		});

		if (!resp.ok) {
			return [null, new Response("Failed to refresh access token", { status: 500 })];
		}
		const data = await resp.json() as {
			access_token: string;
			refresh_token: string;
			expires_in: number;
		};
		const accessToken = data.access_token;
		const newRefreshToken = data.refresh_token;
		const expiresIn = data.expires_in;
		if (!accessToken) {
			return [null, new Response("Missing access token", { status: 400 })];
		}

		return [accessToken, newRefreshToken, expiresIn, null];
	} else {
		// Original GitHub implementation
		const resp = await fetch(upstream_url, {
			method: "POST",
			headers: {
				"Content-Type": "application/x-www-form-urlencoded",
			},
			body: new URLSearchParams({
				client_id,
				client_secret,
				refresh_token: refreshToken,
				grant_type: "refresh_token",
			}).toString(),
		});

		if (!resp.ok) {	
			return [null, new Response("Failed to refresh access token", { status: 500 })];
		}
		const body = await resp.formData();
		const accessToken = body.get("access_token") as string;
		const newRefreshToken = body.get("refresh_token") as string;
		const expiresIn = parseInt(body.get("expires_in") as string);
		if (!accessToken) {
			return [null, new Response("Missing access token", { status: 400 })];
		}
		return [accessToken, newRefreshToken, expiresIn, null];
	}
}

// Context from the auth process, encrypted & stored in the auth token
// and provided to the DurableMCP as this.props
export type Props = {
	userId?: string
	login?: string
	name: string
	email?: string
	accessToken: string
	refreshToken: string
}
