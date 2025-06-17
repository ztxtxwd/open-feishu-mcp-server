import type { AuthRequest, OAuthHelpers } from '@cloudflare/workers-oauth-provider';
import { Hono } from 'hono';
import { env } from 'cloudflare:workers';

import { fetchUpstreamAuthToken, getUpstreamAuthorizeUrl, Props } from './utils';
import { clientIdAlreadyApproved, parseRedirectApproval, renderApprovalDialog } from './workers-oauth-utils';

const app = new Hono<{ Bindings: Env & { OAUTH_PROVIDER: OAuthHelpers } }>();

app.get('/authorize', async (c) => {
	const oauthReqInfo = await c.env.OAUTH_PROVIDER.parseAuthRequest(c.req.raw);
	const { clientId } = oauthReqInfo;
	if (!clientId) {
		return c.text('Invalid request', 400);
	}

	if (await clientIdAlreadyApproved(c.req.raw, oauthReqInfo.clientId, env.COOKIE_ENCRYPTION_KEY)) {
		return redirectToFeishu(c.req.raw, oauthReqInfo);
	}

	return renderApprovalDialog(c.req.raw, {
		client: await c.env.OAUTH_PROVIDER.lookupClient(clientId),
		server: {
			name: "飞书 MCP 服务",
			logo: "https://fms-r2.tapeless.eu.org/Frame%203.svg",
			description: '这是一个远程服务，使用飞书进行认证。', // optional
		},
		state: { oauthReqInfo }, // arbitrary data that flows through the form submission below
	});
});

app.post('/authorize', async (c) => {
	// Validates form submission, extracts state, and generates Set-Cookie headers to skip approval dialog next time
	const { state, headers } = await parseRedirectApproval(c.req.raw, env.COOKIE_ENCRYPTION_KEY);
	if (!state.oauthReqInfo) {
		return c.text('Invalid request', 400);
	}

	return redirectToFeishu(c.req.raw, state.oauthReqInfo, headers);
});

async function redirectToFeishu(request: Request, oauthReqInfo: AuthRequest, headers: Record<string, string> = {}) {
	return new Response(null, {
		status: 302,
		headers: {
			...headers,
			location: getUpstreamAuthorizeUrl({
				upstream_url: 'https://open.feishu.cn/open-apis/authen/v1/authorize',
				scope: 'drive:drive drive:file drive:file:upload auth:user.id:read offline_access task:task:read docs:document:import docs:document.media:upload docx:document docx:document:readonly',
				client_id: env.FEISHU_APP_ID,
				redirect_uri: new URL('/callback', request.url).href,
				state: btoa(JSON.stringify(oauthReqInfo)),
			}),
		},
	});
}

/**
 * OAuth Callback Endpoint
 *
 * This route handles the callback from Feishu after user authentication.
 * It exchanges the temporary code for an access token, then stores some
 * user metadata & the auth token as part of the 'props' on the token passed
 * down to the client. It ends by redirecting the client back to _its_ callback URL
 */
app.get("/callback", async (c) => {
	// Get the oathReqInfo out of KV
	const oauthReqInfo = JSON.parse(atob(c.req.query("state") as string)) as AuthRequest;
	if (!oauthReqInfo.clientId) {
		return c.text("Invalid state", 400);
	}

	// Exchange the code for an access token
	const [accessToken, refreshToken, errResponse] = await fetchUpstreamAuthToken({
		upstream_url: "https://open.feishu.cn/open-apis/authen/v2/oauth/token",
		client_id: c.env.FEISHU_APP_ID,
		client_secret: c.env.FEISHU_APP_SECRET,
		code: c.req.query("code"),
		redirect_uri: new URL("/callback", c.req.url).href,
	});
	if (errResponse) {return errResponse;}

	// Fetch the user info from Feishu
	const userInfoResponse = await fetch("https://open.feishu.cn/open-apis/authen/v1/user_info", {
		headers: {
			"Authorization": `Bearer ${accessToken}`,
			"Content-Type": "application/json; charset=utf-8"
		}
	});

	if (!userInfoResponse.ok) {
		return c.text("Failed to fetch user info", 500);
	}

	const userInfo = await userInfoResponse.json() as {
		data: {
			name: string;
			en_name: string;
			email: string;
			user_id: string;
		}
	};
	const { name, en_name, email, user_id } = userInfo.data;
	// console.log('accessToken', accessToken);

	// Return back to the MCP client a new token
	const { redirectTo } = await c.env.OAUTH_PROVIDER.completeAuthorization({
		request: oauthReqInfo,
		userId: user_id,
		metadata: {
			label: name || en_name,
		},
		scope: oauthReqInfo.scope,
		// This will be available on this.props inside MyMCP
		props: {
			userId: user_id,
			name: name || en_name,
			email,
			accessToken,
			refreshToken
		} as Props,
	});
	return Response.redirect(redirectTo);
});

export { app as FeishuHandler };
