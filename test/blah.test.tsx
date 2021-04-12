import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Title } from '../src';
import SvgComponent from '../src/svg';
import StyledChevron from '../src/svg-external-styled';

describe('it', () => {
  it('title renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Title>Hello</Title>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

describe('it', () => {
  it('svg renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SvgComponent />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

describe('it', () => {
  it('external styled svg renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<StyledChevron />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
