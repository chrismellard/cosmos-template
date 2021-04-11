import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Title } from '../src';

describe('it', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Title>Hello</Title>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
