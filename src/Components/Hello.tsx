/**
 * @description   ¯\(ツ)/¯
 * @since         Saturday, 6 26th 2021, 22:36:04 pm
 * @author        Nguyễn Đạt <nguyendinhdat@getflycrm.com>
 * @copyright     Copyright (c) 2021, GETFLY VN TECH.,JSC
 * -----
 * Change Log: <press Ctrl + alt + c write changelog>
 */


import React, { FC } from 'react';

interface HelloProps {
	name?: string,
	age: number,
};

const Hello: FC<HelloProps> = ({ name, age }) => (
	<div>
		Name: {name} <br />
		Age: {age}
	</div>
);

export default Hello;
