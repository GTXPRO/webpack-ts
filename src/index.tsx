/**
 * @description   ¯\(ツ)/¯
 * @since         Saturday, 6 26th 2021, 22:06:58 pm
 * @author        Nguyễn Đạt <nguyendinhdat@getflycrm.com>
 * @copyright     Copyright (c) 2021, GETFLY VN TECH.,JSC
 * -----
 * Change Log: <press Ctrl + alt + c write changelog>
 */

import 'font-awesome/css/font-awesome.min.css';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

// component
import App from './App';

// store
import { store } from './Store/index';

const Main = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

render(<Main />, document.getElementById('root'));
