import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProfileForm from '../components/ProfileForm';
import * as user from '../actions/user';
import wrapActionCreators from '../utils/wrapActionCreators';
import Card from '../components/Card';
import Header from '../components/Header';


@connect(state => ({
  user: state.user
}), wrapActionCreators(user))
export default class ProfilePage extends Component {
  componentWillMount() {
    if(!this.props.user.id) {
      this.props.history.push('/login');
    }
  }
  render() {
    return (
      <div>
        <Header {...this.props} />
        <Card>
          <ProfileForm {...this.props} />
        </Card>
      </div>
    );
  }
}
