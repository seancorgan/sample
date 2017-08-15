import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProfileForm from '../components/ProfileForm';
import * as saveProfile from '../actions/saveProfile';
import wrapActionCreators from '../utils/wrapActionCreators';

@connect(state => ({
  user: state.user
}), wrapActionCreators(saveProfile))
export default class LoginPage extends Component {
  render() {
    return (
      <ProfileForm {...this.props} />
    );
  }
}
