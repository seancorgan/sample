import React, { Component } from 'react';
import { connect } from 'react-redux';
import SignupForm from '../components/SignupForm';
import * as saveProfile from '../actions/saveProfile';
import wrapActionCreators from '../utils/wrapActionCreators';
import Card from '../components/Card';


@connect(state => ({
  user: state.user
}), wrapActionCreators(saveProfile))
export default class signup extends Component {
  render() {
    return (
      <Card>
        <SignupForm {...this.props} />
      </Card>
    );
  }
}
