import React from 'react';
import renderer from 'react-test-renderer';
import { SearchViewTabs } from '../SearchViewTabs';

describe('SearchViewTabs', () => {
  it('should be rendered correctly by default', () => {
    const onColumnsNumbChange = jest.fn();

    const tree = renderer
      .create((
        <SearchViewTabs
          columnsNum={3}
          onColumnsNumbChange={onColumnsNumbChange}
        />
      ))
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should fire onColumnsNumbChange callback', () => {
    const onColumnsNumbChange = jest.fn();

    const component = renderer
      .create((
        <SearchViewTabs
          columnsNum={3}
          onColumnsNumbChange={onColumnsNumbChange}
        />
      )).root;

    const buttons = component.findAllByType('button');

    expect(onColumnsNumbChange).not.toHaveBeenCalled();
    expect(buttons).toBeDefined();

    // Imitate button clicks.
    buttons[0].props.onClick();
    buttons[1].props.onClick();
    buttons[2].props.onClick();

    expect(onColumnsNumbChange).toHaveBeenCalledTimes(3);
    expect(onColumnsNumbChange.mock.calls[0][0]).toBe(1);
    expect(onColumnsNumbChange.mock.calls[1][0]).toBe(3);
    expect(onColumnsNumbChange.mock.calls[2][0]).toBe(4);
  });
});
