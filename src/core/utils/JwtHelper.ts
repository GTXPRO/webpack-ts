/**
 * @description   ¯\(ツ)/¯
 * @since         Friday, 12 17th 2021, 20:27:40 pm
 * @author        Nguyễn Đạt <nguyendinhdat@getflycrm.com>
 * @copyright     Copyright (c) 2021, GETFLY VN TECH.,JSC
 * -----
 * Change Log: <press Ctrl + alt + c write changelog>
 */

const getItem = (itemName: string) => localStorage.getItem(itemName);
const setItem = (itemName: string, value: string) => localStorage.setItem(itemName, value);
const removeItem = (itemName: string) => localStorage.removeItem(itemName);

const clearAll = () => localStorage.clear();

class JwtHelper {
  tokenKey = 'tsJwt_token';

  constructor(tokenJwt?: string) {
    if (tokenJwt) {
      this.tokenKey = tokenJwt;
    }
  }

  getToken = () => getItem(this.tokenKey);

  setToken = (value: string) => setItem(this.tokenKey, value);

  removeToken = () => removeItem(this.tokenKey);

  clearAll = () => clearAll();
};

export { JwtHelper as JWTClass };

export default new JwtHelper;
