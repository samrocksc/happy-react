import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from './commonActions';

import SplashPage from './SplashPage';

class SplashContainer extends Component {
  static propTypes = {
    common: PropTypes.object,
    actions: PropTypes.object,
  }
  render() {
    const { common, actions } = this.props;
    return (
      <SplashPage common={common} actions={actions} />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actionCreators, dispatch),
});

const mapStateToProps = state => ({ common: state.common });

export default connect(mapStateToProps, mapDispatchToProps)(SplashContainer);
