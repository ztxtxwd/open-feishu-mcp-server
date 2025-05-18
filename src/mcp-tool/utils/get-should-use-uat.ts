import { TokenMode } from '../types';

export function getShouldUseUAT(tokenMode: TokenMode, userAccessToken?: string, useUAT?: boolean) {
  switch (tokenMode) {
    case TokenMode.USER_ACCESS_TOKEN: {
      if (!userAccessToken) {
        throw new Error('Invalid UserAccessToken');
      }
      return true;
    }
    case TokenMode.TENANT_ACCESS_TOKEN: {
      return false;
    }
    case TokenMode.AUTO:
    default: {
      if (userAccessToken && useUAT) {
        return true;
      } else {
        return false;
      }
    }
  }
}
