import React from 'react';
import renderer from 'react-test-renderer';
import { Layout } from '../Layout';

it('should render one child component inside the layout', () => {
  const tree = renderer
    .create((
      <Layout>
        <div>One and only child</div>
      </Layout>
    ))
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it('should render more than one child component inside the layout', () => {
  const tree = renderer
    .create((
      <Layout>
        <div>First child</div>
        <div>Second child</div>
      </Layout>
    ))
    .toJSON();

  expect(tree).toMatchSnapshot();
});
