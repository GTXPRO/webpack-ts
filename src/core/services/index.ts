/**
 * @description   ¯\(ツ)/¯
 * @since         Saturday, 12 18th 2021, 15:45:16 pm
 * @author        Nguyễn Đạt <nguyendinhdat@getflycrm.com>
 * @copyright     Copyright (c) 2021, GETFLY VN TECH.,JSC
 * -----
 * Change Log: <press Ctrl + alt + c write changelog>
 */

import Http from 'core/http/axiosClient';

import {
  getNews, getList,
  getProduct, postAuthorization, postRefreshToken
} from 'api/index';
import {
  ResponseInfo,
  RequestAuthorization, ResponseAuthorization,
  RequestRefreshToken, ResponseRefreshToken,
} from 'core/interfaces';

export const getNewService = () => {
  return Http.get(getNews);
};
export const getListService = () => {
  return Http.get(getList);
};

export const getInfoService = (params?: { id?: number }): Promise<ResponseInfo> => {
  return Http.get(getProduct, { params });
};

export const postAuthenticateService = ({ username, password }: RequestAuthorization):
  Promise<ResponseAuthorization> => {
  return Http.post(postAuthorization, { username, password });
};

export const postRefreshTokenService = ({ refreshToken }: RequestRefreshToken):
  Promise<ResponseRefreshToken> => {
  return Http.post(postRefreshToken, { refreshToken });
};
