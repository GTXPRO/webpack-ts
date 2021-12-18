/**
 * @description   ¯\(ツ)/¯
 * @since         Friday, 12 17th 2021, 20:23:58 pm
 * @author        Nguyễn Đạt <nguyendinhdat@getflycrm.com>
 * @copyright     Copyright (c) 2021, GETFLY VN TECH.,JSC
 * -----
 * Change Log: <press Ctrl + alt + c write changelog>
 */

import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
import qs from 'qs';

import { baseURL } from 'api/index';
import JwtHelper, { JWTClass } from 'core/utils/JwtHelper';

// services
import { postRefreshTokenService } from 'core/services';

const jwtRefresh = new JWTClass('jwt_refresh');

let isRefreshing = false;
let refreshSubscribers: Array<CallableFunction> = [];

const subscribeTokenRefresh = (callback: CallableFunction) => {
  refreshSubscribers.push(callback);
};

const onRefreshed = (token: string): void => {
  refreshSubscribers.map((cb): void => cb(token));
  refreshSubscribers = [];
};

export const axiosClient = () => {
  const client = axios.create({
    withCredentials: true,
    timeout: 10000,
    baseURL
  });

  client.interceptors.request.use((config: AxiosRequestConfig) => {
    config.headers = {
      Authorization: `Bearer ${JwtHelper?.getToken()}`,
      'Content-type': 'application/json',
    };

    if (config?.url) {
      let path = config.url;
      if (path.charAt(0) === '/') {
        path = path.substring(1);
      }

      // config.url = [baseURL, path].join('/');
    }

    config.paramsSerializer = params => qs.stringify(params, { arrayFormat: 'indices' });

    return config;
  });

  client.interceptors.response.use((response: AxiosResponse) => {
    return response.data;
  }, (error: AxiosError): Promise<AxiosError> => {
    const { config, response } = error;

    if (response?.status == 401) {
      console.log('UnAuthorization ', config);

      // console.log('Config ', config);
      const originalRequest = config;

      if (!isRefreshing) {
        isRefreshing = true;
        if (jwtRefresh.getToken()) {
          postRefreshTokenService({ refreshToken: jwtRefresh?.getToken() })
            .then(response => {
              isRefreshing = false;
              onRefreshed(response.token);
              JwtHelper.setToken(response.token);
              jwtRefresh.setToken(response.refreshToken);
            })
            .catch(() => {
              JwtHelper.removeToken();
              jwtRefresh.removeToken();
              isRefreshing = false;
              return Promise.reject(error);
            });
        } else {
          console.log('Alert not refresh token');
        }
      }

      const retryOrigReq = new Promise<AxiosError>(resolve => {
        subscribeTokenRefresh((token: string) => {
          // replace the expired token and retry
          originalRequest.headers = {
            Authorization: `Bearer ${token}`
          };
          resolve(axios(originalRequest).then(res => res.data));
        });
      });

      return retryOrigReq;
    }

    return Promise.reject(error);
  });

  return client;
};

class BaseHttp {
  client: AxiosInstance;

  constructor() {
    this.client = axiosClient();
  }

  get(url: string, conf = {}) {
    return this.client.get(url, conf);
  }

  delete(url: string, conf = {}) {
    return this.client.delete(url, conf);
  }

  head(url: string, conf = {}) {
    return this.client.head(url, conf);
  }

  options(url: string, conf = {}) {
    return this.client.options(url, conf);
  }

  post(url: string, data = {}, conf = {}) {
    return this.client.post(url, data, conf);
  }

  put(url: string, data = {}, conf = {}) {
    return this.client.put(url, data, conf);
  }

  patch(url: string, data = {}, conf = {}) {
    return this.client.patch(url, data, conf);
  }
}

export const Http = new BaseHttp();

export default {
  get<T, Response, Data>(url: string, conf?: AxiosRequestConfig<Data>) {
    return axiosClient().get<T, Response, Data>(url, conf);
  },
  delete<T, Response, Data>(url: string, conf?: AxiosRequestConfig<Data>) {
    return axiosClient().delete<T, Response, Data>(url, conf);
  },

  head<T, Response, Data>(url: string, conf?: AxiosRequestConfig<Data>) {
    return axiosClient().head<T, Response, Data>(url, conf);
  },

  options<T, Response, Data>(url: string, conf?: AxiosRequestConfig<Data>) {
    return axiosClient().options<T, Response, Data>(url, conf);
  },

  post<T, Response, Data>(url: string, data?: Data, conf?: AxiosRequestConfig<Data>) {
    return axiosClient().post<T, Response, Data>(url, data, conf);
  },

  put<T, Response, Data>(url: string, data?: Data, conf?: AxiosRequestConfig) {
    return axiosClient().put<T, Response, Data>(url, data, conf);
  },
  patch<T, Response, Data>(url: string, data?: Data, conf?: AxiosRequestConfig) {
    return axiosClient().patch<T, Response, Data>(url, data, conf);
  },
};
