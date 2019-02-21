import React from 'react';
import PropTypes from 'prop-types';

const DEFAULT_ACTIVATION_DISTANCE = 50;

export class InfiniteScroll extends React.Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]).isRequired,
    onFetchMore: PropTypes.func,
    activationDistance: PropTypes.number,
  };

  static defaultProps = {
    onFetchMore: () => {},
    activationDistance: DEFAULT_ACTIVATION_DISTANCE,
  };

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll, false);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll, false);
  }

  onScroll = () => {
    const { activationDistance, onFetchMore } = this.props;

    const documentHeight = document.body.offsetHeight;
    const scrollHeight = window.innerHeight + window.scrollY;

    if ((scrollHeight + activationDistance) >= documentHeight) {
      onFetchMore();
    }
  };

  render() {
    const { children } = this.props;

    return (
      <div>
        {children}
      </div>
    );
  }
}
