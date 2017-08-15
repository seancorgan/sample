import React, { Component } from 'react';
import { connect } from 'react-redux';
import SignupForm from '../components/SignupForm';
import * as saveProfile from '../actions/saveProfile';
import wrapActionCreators from '../utils/wrapActionCreators';

@connect(state => ({
  user: state.user
}), wrapActionCreators(saveProfile))
export default class signup extends Component {
  render() {
    return (
      <SignupForm {...this.props} />
    );
  }
}
