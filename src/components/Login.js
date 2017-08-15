import React, { Component } from 'react';
import cssModules from 'react-css-modules';
import styles from '../style/login.scss';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import PropTypes from 'prop-types';
import {Row, Col } from 'react-flexbox-grid';
import _ from 'lodash';

@cssModules(styles)
export default class Login extends Component {
  static propTypes = {
    login: PropTypes.func.isRequired,
    user: PropTypes.object
  };

  constructor(props) {
    super(props);
    this.state = {
        usernameError: false,
        passwordError: false
      }
  }

  checkfield(input, field, text) {
    if (_.isEmpty(input)) {
      this.setState({
        [field]: text
      });
      return true;
    }
    this.setState({
      [field]: false
    });
    return false;
  }
  checkLogin() {
    this.checkfield(this.refs.username.input.value, 'usernameError', 'Please enter a valid username');
    this.checkfield(this.refs.password.input.value, 'passwordError', 'Please enter a valid password');
  }
  render() {
    const { login } = this.props;
    return (
      <div>
      <Row>
        <Col lg={12}>
          <TextField
            ref="username"
            hintText="username"
            onBlur={() => { this.checkfield(this.refs.username.input.value, 'usernameError', 'Please enter a valid username') }}
            errorText={this.state.usernameError}
            floatingLabelText="username"
          />
          <TextField
            ref="password"
            onBlur={() => this.checkfield(this.refs.password.input.value, 'passwordError', 'Please enter a valid password')}
            hintText="Enter your Password"
            floatingLabelText="Password"
            errorText={this.state.passwordError}
            type="password"
          />
        </Col>
      </Row>

      <Row>
        <RaisedButton label="Login" onClick={() => { this.checkLogin() }} primary />
      </Row>
    </div>
    );
  }
}
