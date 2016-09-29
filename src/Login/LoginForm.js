import React, { Component, PropTypes } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { Grid, Container } from 'stardust';
import './login.css';

export default class LoginForm extends Component {
  static propTypes = {
    auth: PropTypes.object,
    actions: PropTypes.object,
  }

  handleLogin = (username, password) => {
    this.props.actions.checkUsername(username, password);
  }

  render() {
    const { auth, actions } = this.props;
    return (
      <div>
        <HeaderToolbar username="your username" />
        <Grid
          className="vertical-center"
          verticalAlign="middle"
        >
          <Grid.Column>
            <HeaderContainer headerText="Welcome to Support My Club">
              <Container textAlign="center">
                <div>
                  <TextField
                    value={auth.email}
                    floatingLabelText="Email Address"
                    onChange={event => actions.updateUsername(event.target.value)}
                  />
                </div>
                <div>
                  <TextField
                    value={auth.password}
                    floatingLabelText="Password"
                    type="password"
                    onChange={event => actions.updatePassword(event.target.value)}
                  />
                </div>
                <RaisedButton
                  backgroundColor="#293171"
                  className="form-button"
                  label="Log In"
                  labelColor="white"
                  onClick={() => {
                    actions.beginLogin(auth.username, auth.password);
                  }
                  }
                />
              </Container>
            </HeaderContainer>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

