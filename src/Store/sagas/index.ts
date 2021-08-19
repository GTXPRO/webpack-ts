/**
 * @description   ¯\(ツ)/¯
 * @since         Tuesday, 8 3rd 2021, 21:49:20 pm
 * @author        Nguyễn Đạt <nguyendinhdat@getflycrm.com>
 * @copyright     Copyright (c) 2021, GETFLY VN TECH.,JSC
 * -----
 * Change Log: <press Ctrl + alt + c write changelog>
 */


import { all, fork, spawn } from 'redux-saga/effects';
import auth from './auth';

export default function* (): Generator {
  console.log('Root Saga runner');
  yield all([
    ...auth.map(watcher => spawn(watcher)),
    ...auth.map(watcher => fork(watcher)),
  ]);
}
