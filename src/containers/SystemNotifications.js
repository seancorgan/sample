import React, { Component } from 'react';
import { connect } from 'react-redux';
import SystemNotifications from '../components/SystemNotifications';
import * as systemNotifications from '../actions/systemNotifications';
import wrapActionCreators from '../utils/wrapActionCreators';

@connect(state => ({
  notifications: state.notifications
}), wrapActionCreators(systemNotifications))
export default class LoginPage extends Component {
  render() {
    return (
    <SystemNotifications {...this.props} />
    );
  }
}
