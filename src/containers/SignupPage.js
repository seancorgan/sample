import React, { Component } from 'react';
import { connect } from 'react-redux';
import SignupForm from '../components/SignupForm';
import * as user from '../actions/user';
import wrapActionCreators from '../utils/wrapActionCreators';
import Card from '../components/Card';


@connect(state => ({
  user: state.user
}), wrapActionCreators(user))
export default class signup extends Component {
  render() {
    return (
      <Card>
        <SignupForm {...this.props} />
      </Card>
    );
  }
}
