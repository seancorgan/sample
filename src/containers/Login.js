import React, { Component } from 'react';
import { connect } from 'react-redux';
import Login from '../components/Login';
import * as LoginActions from '../actions/login';
import wrapActionCreators from '../utils/wrapActionCreators';

@connect(state => ({
  user: state.user
}), wrapActionCreators(LoginActions))
export default class LoginPage extends Component {
  render() {
    return (
      <Login {...this.props} />
    );
  }
}
