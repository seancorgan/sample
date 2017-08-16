import React, { Component } from 'react';
import cssModules from 'react-css-modules';
import styles from '../style/login.scss';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import PropTypes from 'prop-types';
import _ from 'lodash';

@cssModules(styles)
export default class SignupPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      nameError: false,
      usernameError: false,
      passwordError: false
    };
  }
  /**
   * Returns true if valid, false if not.
   * Mutates the false fields.
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
  checkForm() {
    const username = this.refs.username.input.value;
    const name = this.refs.name.input.value;
    const password = this.refs.password.input.value;

    if (this.checkfield(username, 'usernameError', 'Please enter a valid username') &&
        this.checkfield(name, 'nameError', 'Please enter a name') &&
        this.checkfield(password, 'passwordError', 'Please enter a valid password')) {
        this.props.createProfileAsync({name, username, password, history: this.props.history});
    }
  }
  render() {
    const { user } = this.props;
    return (
      <div>
      <h2>Edit Profile</h2>
      <div>
        <div>
          <TextField
            ref="name"
            hintText="name"
            onBlur={() => { this.checkfield(this.refs.name.input.value, 'nameError', 'Please enter a valid name'); }}
            errorText={this.state.nameError}
            floatingLabelText="name"
          />
          <TextField
            ref="username"
            hintText="username"
            onBlur={() => { this.checkfield(this.refs.username.input.value, 'usernameError', 'Please enter a valid username'); }}
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

        </div>
      </div>

      <div>
        <RaisedButton label="Sign Up" onClick={() => { this.checkForm(); }} primary />
      </div>
    </div>
    );
  }
}
