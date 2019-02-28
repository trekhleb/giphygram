import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Layout } from '../../components/shared/layout/Layout';
import { layoutResize } from '../../actions/layoutActions';

export class LayoutContainer extends React.Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]).isRequired,
    layoutResize: PropTypes.func.isRequired,
  };

  onMediaQueryChange = (screenSize) => {
    const { layoutResize: layoutResizeCallback } = this.props;
    layoutResizeCallback(screenSize);
  };

  render() {
    const { children } = this.props;

    return (
      <Layout onMediaQueryChange={this.onMediaQueryChange}>
        {children}
      </Layout>
    );
  }
}

const mapDispatchToProps = {
  layoutResize,
};

export default connect(
  null,
  mapDispatchToProps,
)(LayoutContainer);
