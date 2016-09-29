import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from './loginActions';

import LoginForm from './LoginForm';

class LoginContainer extends Component {
  static propTypes = {
    auth: PropTypes.object,
    actions: PropTypes.object,
  }
  render() {
    const { auth, actions } = this.props;
    return (
      <LoginForm auth={auth} actions={actions} />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actionCreators, dispatch),
});

const mapStateToProps = state => ({ auth: state.auth });

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
