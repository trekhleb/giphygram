import React from 'react';
import renderer from 'react-test-renderer';
import { SearchForm } from '../SearchForm';

describe('SearchForm', () => {
  it('should be rendered correctly with empty query', () => {
    const tree = renderer
      .create(<SearchForm />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should be rendered correctly with non-empty query', () => {
    const tree = renderer
      .create(<SearchForm query="kittens" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should fire onSearchSubmit form callback', () => {
    // Mock search form parameters.
    const searchQuery = 'kittens';
    const onSubmit = jest.fn();

    // Create test component instance.
    const testComponentInstance = renderer.create((
      <SearchForm query={searchQuery} onSearchSubmit={onSubmit} />
    )).root;

    // Try to find submit button inside the form.
    const submitButtonInstance = testComponentInstance.findByProps({
      type: 'submit',
    });
    expect(submitButtonInstance).toBeDefined();

    // Since we're not going to test the button component itself
    // we may just simulate its onClick event manually.
    const eventMock = { preventDefault: jest.fn() };
    submitButtonInstance.props.onClick(eventMock);

    expect(onSubmit).toHaveBeenCalledTimes(1);
    expect(onSubmit).toHaveBeenCalledWith(searchQuery);
  });

  it('should fire onSearchReset form callback', () => {
    // Mock search form parameters.
    const searchQuery = 'kittens';
    const onReset = jest.fn();

    // Create test component instance.
    const testComponentInstance = renderer.create((
      <SearchForm query={searchQuery} onSearchReset={onReset} />
    )).root;

    // Try to find submit button inside the form.
    const resetButtonInstance = testComponentInstance.findByProps({
      type: 'button',
    });
    expect(resetButtonInstance).toBeDefined();

    const eventMock = { preventDefault: jest.fn() };
    resetButtonInstance.props.onClick(eventMock);

    expect(onReset).toHaveBeenCalledTimes(1);
  });
});
