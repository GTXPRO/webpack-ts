/**
 * @description   ¯\(ツ)/¯
 * @since         Tuesday, 8 3rd 2021, 21:02:53 pm
 * @author        Nguyễn Đạt <nguyendinhdat@getflycrm.com>
 * @copyright     Copyright (c) 2021, GETFLY VN TECH.,JSC
 * -----
 * Change Log: <press Ctrl + alt + c write changelog>
 */

import React from 'react';

// component
import MagicBox from 'src/Components/MagicBox';
import logo from 'src/public/logo.svg';
import Counter from './Components/Counter';
import FAVICON from './public/favicon.ico';
import { useAppSelector } from './Store/hooks';
import { selectShowImg } from './Store/reducers/counterSlice';

import './App.scss';

if (!document.querySelector('link[rel*="icon"]')) {
  const link = document.createElement('link');
  link.type = 'image/x-icon';
  link.rel = 'shortcut icon';
  link.href = FAVICON;
  document.getElementsByTagName('head')[0].appendChild(link);
}

interface Lengthwise {
  length: number;
}

function App(): JSX.Element {
  const showImg = useAppSelector(selectShowImg);
  const isBool = (): Lengthwise => {
    return 'React';
  };

  return (
    <div className="App">
      <header className="App-header">
        TypeScript for React <br />
        <img src={logo} className="App-logo" alt="logo" />

        {/* <Hello name="FC" age={100} /> <br />
        <Color
          style={{ color: 'red', fontSize: 20 }}
          onClick={() => console.log('Click', isBool().length)}
        /> */}

        <Counter />
        {
          showImg &&
          <MagicBox />
        }
      </header>
    </div>
  );
}

export default App;
