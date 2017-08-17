import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../containers/Login';
import SignupPage from '../containers/SignupPage';
import NotFoundPage from '../containers/NotFoundPage';
import ProfilePage from '../containers/ProfilePage';

export default (
  <Switch>
    <Route exact path="/" component={Login} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/profile" component={ProfilePage} />
    <Route exact path="/signup" component={SignupPage} />
    <Route component={NotFoundPage} />
  </Switch>
);
