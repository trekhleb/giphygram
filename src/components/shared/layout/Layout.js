import React from 'react';
import PropTypes from 'prop-types';
import { SCREEN_SIZES } from '../../../services/LayoutService';

// Closure callback that fires when media has been changed.
const onMediaQueryChangeCallback = (screenSize, callback) => (e) => {
  if (e.matches) {
    callback(screenSize.id);
  }
};

export class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]).isRequired,
    onMediaQueryChange: PropTypes.func,
    onMediaQueryInit: PropTypes.func,
  };

  static defaultProps = {
    onMediaQueryChange: () => {},
    onMediaQueryInit: () => {},
  };

  constructor(props) {
    super(props);

    // List of all listeners to media query changes.
    this.mediaQueries = {};
  }

  componentDidMount() {
    const { onMediaQueryChange, onMediaQueryInit } = this.props;
    let initialScreenSize = null;

    Object
      .values(SCREEN_SIZES)
      .forEach((screenSize) => {
        // Try to match current media query.
        this.mediaQueries[screenSize.id] = window.matchMedia(screenSize.mediaQuery);
        if (this.mediaQueries[screenSize.id].matches) {
          initialScreenSize = screenSize;
        }

        // Subscribe to media query changes.
        this.mediaQueries[screenSize.id].addListener(
          onMediaQueryChangeCallback(screenSize, onMediaQueryChange),
        );
      });

    // Setup initial media query match.
    onMediaQueryInit(initialScreenSize.id);
  }

  // @TODO: Remove media query listeners on component unmount.
  // componentWillUnmount() {
  //   Object.values(this.mediaQueries).forEach(mediaQuery => mediaQuery.removeListener());
  // }

  render() {
    const { children } = this.props;

    return (
      <div className="container">
        <div className="row">
          <div className="col">
            {children}
          </div>
        </div>
      </div>
    );
  }
}
