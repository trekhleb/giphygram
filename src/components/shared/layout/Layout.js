import React from 'react';
import PropTypes from 'prop-types';
import { SCREEN_SIZES } from '../../../services/LayoutService';

export class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]).isRequired,
    onMediaQueryChange: PropTypes.func,
  };

  static defaultProps = {
    onMediaQueryChange: () => {},
  };

  constructor(props) {
    super(props);

    // List of all listeners to media query changes.
    this.mediaQueries = {};
  }

  componentDidMount() {
    const { onMediaQueryChange } = this.props;
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
          (screenSizeEntity => (e) => {
            if (e.matches) {
              onMediaQueryChange(screenSizeEntity.id);
            }
          })(screenSize),
        );
      });

    // Setup initial media query match.
    onMediaQueryChange(initialScreenSize.id);
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
