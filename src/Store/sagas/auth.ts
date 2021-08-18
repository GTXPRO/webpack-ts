/**
 * @description   ¯\(ツ)/¯
 * @since         Tuesday, 8 3rd 2021, 21:53:00 pm
 * @author        Nguyễn Đạt <nguyendinhdat@getflycrm.com>
 * @copyright     Copyright (c) 2021, GETFLY VN TECH.,JSC
 * -----
 * Change Log: <press Ctrl + alt + c write changelog>
 */

import { PayloadAction } from '@reduxjs/toolkit';
import { takeLatest, all, race, call, delay } from 'redux-saga/effects';

function* log(action: PayloadAction) {
  // console.log('Action ', action, increment());
  yield;
}

function* fetchApi() {
  yield delay(1000);
  return [{key: 1, name: 'str'}];
}

function* callDelay() {
  yield delay(2000);
  return 'Oh no';
}

function* demoRace() {
  const { posts, timeout } = yield race({
    posts: call(fetchApi),
    timeout: call(callDelay)
  });

  if (timeout) {
    console.log('timeout: ', timeout);
  }

  if (posts) {
    console.log('posts ', posts);
  }
}

export default [
  function* (): Generator {
    yield all([
      takeLatest('*', demoRace),
      takeLatest('*', log),

      // code here
    ]);
  }
];
