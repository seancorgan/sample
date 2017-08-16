import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';

@connect(state => ({
  user: state.user
}))
export default class HeaderContainer extends Component {
  render() {
    return (
      <Header {...this.props} />
    );
  }
}
