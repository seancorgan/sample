import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';


class Login extends Component {
  static muiName = 'FlatButton';

  render() {
    return (
      <FlatButton {...this.props} label="Login" />
    );
  }
}

const Logged = (props) => (
  <IconMenu
    {...props}

    iconButtonElement={
      <IconButton><MoreVertIcon /></IconButton>
    }
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
  >
    <MenuItem primaryText="Delete Account" />
    <MenuItem onClick={() => {
      props.history.push('/login');
      props.logOut();
    }} primaryText="Sign out" />
  </IconMenu>
);

export default class Header extends Component {
  render() {
    return (
              <AppBar
                title="Sales Force Test"
                iconElementLeft={<IconButton/>}
                iconElementRight={this.props.user.id ? <Logged {...this.props} /> : <Login />}
              />
    );
  }
}
