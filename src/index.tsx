/**
 * @description   ¯\(ツ)/¯
 * @since         Saturday, 6 26th 2021, 22:06:58 pm
 * @author        Nguyễn Đạt <nguyendinhdat@getflycrm.com>
 * @copyright     Copyright (c) 2021, GETFLY VN TECH.,JSC
 * -----
 * Change Log: <press Ctrl + alt + c write changelog>
 */


import React, {} from 'react';
import { render } from 'react-dom';
import Hello from './Components/Hello';
import Color from './Components/Color';

interface Lengthwise {
	length: number;
}

function App() {
	const isBool = () : Lengthwise => {
		return 'aaaa';
	}

	return (
		<div>
			TypeScript <br/>
			<Hello name="FC" age={100} /> <br/>
			<Color
				style={{ color: 'red', fontSize: 20 }}
				onClick={() => console.log('Click', isBool().length)}
			/>
		</div>
	);
}

render(<App />, document.getElementById('root'));
