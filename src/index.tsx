/**
 * @description   ¯\(ツ)/¯
 * @since         Saturday, 6 26th 2021, 22:06:58 pm
 * @author        Nguyễn Đạt <nguyendinhdat@getflycrm.com>
 * @copyright     Copyright (c) 2021, GETFLY VN TECH.,JSC
 * -----
 * Change Log: <press Ctrl + alt + c write changelog>
 */

import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

// component
import App from './App';

// store
import { store } from './Store/index';

import 'font-awesome/css/font-awesome.min.css';

const Main = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

const rootElement = document.getElementById('root') as HTMLElement;
const root = createRoot(rootElement);

root.render(<Main />);
