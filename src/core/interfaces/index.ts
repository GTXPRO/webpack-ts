/**
 * @description   ¯\(ツ)/¯
 * @since         Saturday, 12 18th 2021, 16:48:35 pm
 * @author        Nguyễn Đạt <nguyendinhdat@getflycrm.com>
 * @copyright     Copyright (c) 2021, GETFLY VN TECH.,JSC
 * -----
 * Change Log: <press Ctrl + alt + c write changelog>
 */


export interface ResponseInfo { name: string };

export interface RequestAuthorization {
  username: string,
  password: string,
};

export interface ResponseAuthorization {
  token: string,
  refreshToken: string,
};

export interface RequestRefreshToken {
  refreshToken?: string | null
};

export interface ResponseRefreshToken extends ResponseAuthorization {};
