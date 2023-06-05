/**
 * @description   ¯\(ツ)/¯
 * @since         Wednesday, 8 25th 2021, 8:36:45 am
 * @author        Nguyễn Đạt <nguyendinhdat@getflycrm.com>
 * @copyright     Copyright (c) 2021, GETFLY VN TECH.,JSC
 * -----
 * Change Log: <press Ctrl + alt + c write changelog>
 */


import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';

import Hello from './../src/Components/Hello';
// import TestRenderer from 'react-test-renderer';

describe('Test Component Hello By Text', () => {
  it('String: "Trần Văn Tú" contains correct text', () => {
    render(<Hello age={11} name="Trần Văn Tú" />);
    expect(screen.getByText(/Trần Văn Tú/i)).toBeInTheDocument();
  });

  it('String: "TranChemStore.com" contains correct text', () => {
    render(<Hello age={11} name="TranChemStore.com" />);
    expect(screen.getByText(/TranChemStore\.com/i)).toBeInTheDocument();
  });

  it('Snapshot: "Hello" contains correct text', () => {
    const { asFragment } = render(<Hello age={11} name="Hello" />);
    expect(asFragment()).toMatchSnapshot();
  });

  afterEach(cleanup);
});
