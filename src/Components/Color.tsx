/**
 * @description   ¯\(ツ)/¯
 * @since         Sunday, 6 27th 2021, 23:04:09 pm
 * @author        Nguyễn Đạt <nguyendinhdat@getflycrm.com>
 * @copyright     Copyright (c) 2021, GETFLY VN TECH.,JSC
 * -----
 * Change Log: <press Ctrl + alt + c write changelog>
 */


import React, { FC } from 'react';

interface ColorProps {
	style: { color: string, fontSize: number }
	onClick: () => void,
};

const Color: FC<ColorProps> = ({ style: { color, fontSize }, onClick }) => (
	<div style={{ color, fontSize }} onClick={onClick}>
		Color Div Component
	</div>
);

export default Color;
