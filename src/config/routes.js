import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CounterPage from '../containers/CounterPage';
import Login from '../containers/Login';
import AnotherPage from '../containers/AnotherPage';
import NotFoundPage from '../containers/NotFoundPage';
import ProfilePage from '../containers/ProfilePage';

export default (
  <Switch>
    <Route exact path="/" component={CounterPage} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/profile" component={ProfilePage} />
    <Route exact path="/another" component={AnotherPage} />
    <Route component={NotFoundPage} />
  </Switch>
);
