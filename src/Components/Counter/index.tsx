/**
 * @description   ¯\(ツ)/¯
 * @since         Tuesday, 8 3rd 2021, 20:46:39 pm
 * @author        Nguyễn Đạt <nguyendinhdat@getflycrm.com>
 * @copyright     Copyright (c) 2021, GETFLY VN TECH.,JSC
 * -----
 * Change Log: <press Ctrl + alt + c write changelog>
 */

import React from 'react';
import { useAppDispatch, useAppSelector } from 'src/Store/hooks';
import { decrement, increment, selectCount } from 'src/Store/reducers/counterSlice';
import './Counter.scss';

function Counter(): JSX.Element {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();

  return (
    <div>
      <div className="row">
        <button
          className="button"
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <span className="value">{count}</span>
        <button
          className="button"
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>
    </div>
  );
}

Counter.propTypes = {};

export default Counter;
