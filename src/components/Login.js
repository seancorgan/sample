import React, { Component } from 'react';
import cssModules from 'react-css-modules';
import styles from '../style/login.scss';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

@cssModules(styles)
export default class Counter extends Component {
  static propTypes = {
  };

  render() {
    return (
      <div className="login-form">
        <TextField
          hintText="username"
          floatingLabelText="username"
        />

        <TextField
          hintText="Password Field"
          floatingLabelText="Password"
          type="password"
        />

        <RaisedButton label="Primary" primary />
      </div>
    );
  }
}
