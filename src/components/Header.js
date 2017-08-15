import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <div>
        <h2>salesforce-test</h2>

        <Link to="/">Home Page</Link> -&nbsp;
        <Link to="/login">Login</Link>
      </div>
    );
  }
}
