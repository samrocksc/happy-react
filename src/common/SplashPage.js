import React, { Component, PropTypes } from 'react';
import { Container } from 'stardust';

export default class SplashPage extends Component {
  static propTypes = {
    common: PropTypes.object,
  }
  render() {
    const { common } = this.props;
    return (
      <Container>
        <h1>{ common.greeting }</h1>
      </Container>
    );
  }
}

