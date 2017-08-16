import React, { Component } from 'react';
import { connect } from 'react-redux';
import Login from '../components/Login';
import Card from '../components/Card';
import * as UserActions from '../actions/user';
import wrapActionCreators from '../utils/wrapActionCreators';

@connect(state => ({
  user: state.user
}), wrapActionCreators(UserActions))
export default class LoginPage extends Component {
  render() {
    return (
    <Card>
      <Login {...this.props} />
    </Card>
    );
  }
}
