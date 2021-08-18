/**
 * @description   ¯\(ツ)/¯
 * @since         Tuesday, 8 3rd 2021, 20:25:52 pm
 * @author        Nguyễn Đạt <nguyendinhdat@getflycrm.com>
 * @copyright     Copyright (c) 2021, GETFLY VN TECH.,JSC
 * -----
 * Change Log: <press Ctrl + alt + c write changelog>
 */

import { createSlice } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../index';

export interface CounterState {
  value: number;
  status: 'idle' | 'loading' | 'failed';
  showImg: boolean,
}

const initialState: CounterState = {
  value: 0,
  status: 'idle',
  showImg: true,
};

export const counterSlice = createSlice({
  name: 'counter',

  // init state
  initialState,

  // init reducer
  reducers: {
    increment: state => {
      state.value += 1;
      state.showImg = Math.abs(state.value) % 2 === 0;
    },
    decrement: state => {
      state.value -= 1;
      state.showImg = Math.abs(state.value) % 2 === 1;
    }
  }
});

// action type
export const { increment, decrement } = counterSlice.actions;

// selector
export const selectCount = (state: RootState): number => state.counter.value;
export const selectShowImg = (state: RootState): boolean => state.counter.showImg;

export const incrementIfOdd = (amount: number): AppThunk => (
  dispatch,
  getState
) => {
  const currentValue = selectCount(getState());
  if (currentValue % 2 === 1) {
    // dispatch(incrementByAmount(amount));
  }
};

// export reducer
export default counterSlice.reducer;
