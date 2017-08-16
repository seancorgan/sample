import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProfileForm from '../components/ProfileForm';
import * as saveProfile from '../actions/saveProfile';
import wrapActionCreators from '../utils/wrapActionCreators';
import Card from '../components/Card';


@connect(state => ({
  user: state.user
}), wrapActionCreators(saveProfile))
export default class ProfilePage extends Component {
  render() {
    return (
      <Card>
        <ProfileForm {...this.props} />
      </Card>
    );
  }
}
