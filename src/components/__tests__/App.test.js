import React from 'react';
import { mount } from 'enzyme';
import { store } from '../../store';
import { App } from '../App';

describe('App', () => {
  it('should be rendered without crashing', () => {
    mount(<App store={store} />);
  });
});
