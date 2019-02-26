import React from 'react';
import renderer from 'react-test-renderer';
import { MasonryGrid } from '../MasonryGrid';

const itemsMock = [
  {
    height: 100,
    content: { id: 1, name: 'Item #1' },
  },
  {
    height: 200,
    content: { id: 2, name: 'Item #2' },
  },
  {
    height: 150,
    content: { id: 3, name: 'Item #3' },
  },
  {
    height: 250,
    content: { id: 4, name: 'Item #4' },
  },
  {
    height: 300,
    content: { id: 5, name: 'Item #5' },
  },
];

const renderItemMock = item => <div key={item.id}>{item.name}</div>;

describe('MasonryGrid', () => {
  it('should be rendered correctly by default', () => {
    const tree = renderer
      .create((
        <MasonryGrid
          items={[...itemsMock]}
          renderItem={renderItemMock}
        />
      ))
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should be rendered correctly with 2 columns', () => {
    const tree = renderer
      .create((
        <MasonryGrid
          items={[...itemsMock]}
          renderItem={renderItemMock}
          columnsNum={2}
        />
      ))
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should be rendered correctly with 1 column', () => {
    const tree = renderer
      .create((
        <MasonryGrid
          items={[...itemsMock]}
          renderItem={renderItemMock}
          columnsNum={1}
        />
      ))
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
