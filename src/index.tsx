/**
 * @description   ¯\(ツ)/¯
 * @since         Saturday, 6 26th 2021, 22:06:58 pm
 * @author        Nguyễn Đạt <nguyendinhdat@getflycrm.com>
 * @copyright     Copyright (c) 2021, GETFLY VN TECH.,JSC
 * -----
 * Change Log: <press Ctrl + alt + c write changelog>
 */


import React, { } from 'react';
import { render } from 'react-dom';
import Hello from './Components/Hello';
import Color from './Components/Color';

import 'font-awesome/css/font-awesome.min.css';
// import 'font-awesome/scss/font-awesome.scss';

import ImgStructure from './Public/cau_truc_du-an.PNG';

interface Lengthwise {
	length: number;
}

function App() {
	const isBool = (): Lengthwise => {
		return 'aaaa';
	}

	return (
		<div>
			TypeScript <br />
			<Hello name="FC" age={100} /> <br />
			<Color
				style={{ color: 'red', fontSize: 20 }}
				onClick={() => console.log('Click', isBool().length)}
			/>
			<i className="fa fa-camera-retro fa-lg"></i> fa-lg<br/>
			<i className="fa fa-camera-retro fa-2x"></i> fa-2x<br/>
			<i className="fa fa-camera-retro fa-3x"></i> fa-3x<br/>
			<i className="fa fa-camera-retro fa-4x"></i> fa-4x<br/>
			<i className="fa fa-camera-retro fa-5x"></i> fa-5x<br/>

			Image <br/>
			<img src={ImgStructure} />
		</div>
	);
}

render(<App />, document.getElementById('root'));
