/**
 * @description   ¯\(ツ)/¯
 * @since         Saturday, 7 31st 2021, 18:30:50 pm
 * @author        Nguyễn Đạt <nguyendinhdat@getflycrm.com>
 * @copyright     Copyright (c) 2021, GETFLY VN TECH.,JSC
 * -----
 * Change Log: <press Ctrl + alt + c write changelog>
 */

import React, { useEffect, useState } from 'react';
import './MagicBox.scss';

const randomColor = () => {
  const COLOR_LIST = ['red', 'blue', 'green', 'deeppink'];
  const colorIndex = Math.trunc(Math.random() * 4);
  return COLOR_LIST[colorIndex];
};

function MagicBox(): JSX.Element {
  const [color, setColor] = useState(() => {
    return 'deeppink';
  });

  useEffect(() => {
    const colorInterval = setInterval(() => {
      setColor(randomColor());
    }, 1000);
    return () => {
      clearInterval(colorInterval);
    };
  }, []);

  return (
    <div className="magic-box" style={{ backgroundColor: color }}>
      <p className="magic-box__text">
        <i className="fa fa-camera-retro fa-5x" /> fa-5x
        <br />
        Magic box
      </p>
    </div>
  );
}

MagicBox.propTypes = {};

export default MagicBox;
