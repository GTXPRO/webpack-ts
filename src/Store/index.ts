/**
 * @description   ¯\(ツ)/¯
 * @since         Tuesday, 8 3rd 2021, 18:58:49 pm
 * @author        Nguyễn Đạt <nguyendinhdat@getflycrm.com>
 * @copyright     Copyright (c) 2021, GETFLY VN TECH.,JSC
 * -----
 * Change Log: <press Ctrl + alt + c write changelog>
 */

import { configureStore, Action, ThunkAction } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

import counterReducer from './reducers/counterSlice';
import rootSage from './sagas';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    counter: counterReducer
  },

  // devtool for browser
  devTools: false,

  // middleware redux
  middleware: getDefaultMiddleware => [ ...getDefaultMiddleware(), sagaMiddleware, logger ]
  
  // getDefaultMiddleware({
  //   thunk: true,
  //   serializableCheck: false,
  //   immutableCheck: false
  // }).concat(sagaMiddleware)
});

// run redux saga
sagaMiddleware.run(rootSage);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
