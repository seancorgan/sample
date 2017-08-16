import React, { Component } from 'react';
import cssModules from 'react-css-modules';
import styles from '../style/login.scss';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import PropTypes from 'prop-types';
import _ from 'lodash';

@cssModules(styles)
export default class Login extends Component {
  static propTypes = {
    loginAsync: PropTypes.func.isRequired,
    user: PropTypes.object
  };

  constructor(props) {
    super(props);
    this.state = {
      usernameError: false,
      passwordError: false
    };
  }
  /**
   * Returns true if valid, false if not.
   */
  checkfield(input, field, text) {
    if (_.isEmpty(input)) {
      this.setState({
        [field]: text
      });
      return false;
    }
    this.setState({
      [field]: false
    });
    return true;
  }
  checkLogin() {
    const username = this.refs.username.input.value;
    const password = this.refs.password.input.value;
    if (this.checkfield(username, 'usernameError', 'Please enter a valid username') && this.checkfield(password, 'passwordError', 'Please enter a valid password')) {
      this.props.loginAsync(username, password, this.props.history);
    }
  }
  render() {
    const { login } = this.props;
    return (
      <div>
        <h2>Login</h2>
        <div className="row center-xs">
          <div className="col-xs-12">
          <TextField
            ref="username"
            hintText="username"
            fullWidth
            onBlur={() => { this.checkfield(this.refs.username.input.value, 'usernameError', 'Please enter a valid username'); }}
            errorText={this.state.usernameError}
            floatingLabelText="username"
          />
        </div>
        </div>

        <div className="row center-xs">
          <div className="col-xs-12">
          <TextField
            ref="password"
            fullWidth
            onBlur={() => this.checkfield(this.refs.password.input.value, 'passwordError', 'Please enter a valid password')}
            hintText="Enter your Password"
            floatingLabelText="Password"
            errorText={this.state.passwordError}
            type="password"
          />
        </div>
        </div>


        <div className="row end-xs">
            <div className="col-xs-6">
                <div className="box">
                  <RaisedButton label="Login" onClick={() => { this.checkLogin(); }} primary />
                </div>
            </div>
        </div>
    </div>
    );
  }
}
