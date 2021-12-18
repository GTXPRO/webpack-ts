/**
 * @description   ¯\(ツ)/¯
 * @since         Tuesday, 8 3rd 2021, 21:02:53 pm
 * @author        Nguyễn Đạt <nguyendinhdat@getflycrm.com>
 * @copyright     Copyright (c) 2021, GETFLY VN TECH.,JSC
 * -----
 * Change Log: <press Ctrl + alt + c write changelog>
 */

import React, { useEffect, useState } from 'react';

// component
import MagicBox from 'src/Components/MagicBox';
import Counter from './Components/Counter';
import { useAppSelector } from './Store/hooks';
import { selectShowImg } from './Store/reducers/counterSlice';

// image
import logo from 'src/public/logo.svg';
import FAVICON from 'src/public/favicon.ico';

// 
import { getInfoService, getListService, getNewService, postAuthenticateService } from 'core/services/index';

import './App.scss';
import JwtHelper, { JWTClass } from 'core/utils/JwtHelper';

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
  const [name, setName] = useState('Unknown');
  const showImg = useAppSelector(selectShowImg);
  const isBool = (): Lengthwise => {
    return 'ReactJS';
  };

  useEffect(() => {
    getInfoService().then(res => {
      setName(res.name);
    });
  }, []);

  const getNewApi = () => {
    // new one
    getNewService().then(res => {
      console.log('New 1 response ', res);
    });

    // new two
    getListService().then(res => {
      console.log('New2 response ', res);
    });
  };

  const postAuthenticate = () => {
    const jwtRefresh = new JWTClass('jwt_refresh');
    postAuthenticateService({
      username: 'test',
      password: '12345678'
    })
      .then(res => {
        JwtHelper.setToken(res.token);
        jwtRefresh.setToken(res.refreshToken);
      })
      .catch(error => {
        console.log('Error ', error.response.data.message);
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        TypeScript for React {name} <br />
        <img src={logo} className="App-logo" alt="logo" />

        {/* <Hello name="FC" age={100} /> <br />
        <Color
          style={{ color: 'red', fontSize: 20 }}
          onClick={() => console.log('Click', isBool().length)}
        /> */}

        {/* <Counter /> */}
        {/* {
          showImg &&
          <MagicBox />
        } */}
        <button onClick={postAuthenticate}>Authenticate</button>
        <button onClick={getNewApi}>Fetch New</button>
      </header>
    </div>
  );
}

export default App;
