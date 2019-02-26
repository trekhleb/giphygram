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
    const onSearchSubmit = jest.fn();

    // Create test component instance.
    const testComponentInstance = renderer.create((
      <SearchForm query={searchQuery} onSearchSubmit={onSearchSubmit} />
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

    expect(onSearchSubmit).toHaveBeenCalledTimes(1);
    expect(onSearchSubmit).toHaveBeenCalledWith(searchQuery);
  });

  it('should not fire onSearchSubmit form callback when request is empty', () => {
    // Mock search form parameters.
    const searchQuery = '';
    const onSearchSubmit = jest.fn();

    // Create test component instance.
    const testComponentInstance = renderer.create((
      <SearchForm query={searchQuery} onSearchSubmit={onSearchSubmit} />
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

    expect(onSearchSubmit).not.toHaveBeenCalled();
  });

  it('should fire onSearchReset form callback', () => {
    // Mock search form parameters.
    const searchQuery = 'kittens';
    const onSearchReset = jest.fn();

    // Create test component instance.
    const testComponentInstance = renderer.create((
      <SearchForm query={searchQuery} onSearchReset={onSearchReset} />
    )).root;

    // Try to find reset button inside the form.
    const resetButtonInstance = testComponentInstance.findByProps({
      type: 'button',
    });
    expect(resetButtonInstance).toBeDefined();

    const eventMock = { preventDefault: jest.fn() };
    resetButtonInstance.props.onClick(eventMock);

    expect(onSearchReset).toHaveBeenCalledTimes(1);
  });

  it('should fire onChange form callback', () => {
    // Mock search form parameters.
    const initialSearchQuery = 'kittens';
    const updatedSearchQuery = 'dogs';
    const onSearchUpdate = jest.fn();

    // Create test component instance.
    const testComponentInstance = renderer.create((
      <SearchForm query={initialSearchQuery} onSearchUpdate={onSearchUpdate} />
    )).root;

    // Try to find search input inside the form.
    const searchInputInstance = testComponentInstance.findByProps({
      type: 'search',
    });
    expect(searchInputInstance).toBeDefined();

    const eventMock = {
      preventDefault: jest.fn(),
      target: {
        value: updatedSearchQuery,
      },
    };
    searchInputInstance.props.onChange(eventMock);

    expect(onSearchUpdate).toHaveBeenCalledTimes(1);
    expect(onSearchUpdate).toHaveBeenLastCalledWith(updatedSearchQuery);
  });
});
