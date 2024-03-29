import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Snackbar from 'material-ui/Snackbar';
export default class SystemNotifications extends Component {
  static propTypes = {
    styles: PropTypes.object
  };
  onRequestClose() {
    this.props.closeNotify();
  }
  render() {
    const { notifications } = this.props;
    var notificationColor;
    switch (notifications.type) {
      case 'error':
        notificationColor = {
          backgroundColor: '#d9534f'
        };
        break;

      case 'success':
        notificationColor = {
          backgroundColor: '#449d44'
        };
        break;

      case 'info':
        notificationColor = {
          backgroundColor: '#31b0d5'
        };
        break;

      default:
        notificationColor = {
          backgroundColor: '#d9534f'
        };
    }

    return (<Snackbar open={notifications.open}
      message={notifications.message}
      autoHideDuration={2000}
      bodyStyle={notificationColor}
      contentStyle={notificationColor}
      onRequestClose={() => {
        this.onRequestClose();
      }}/>
    );
  }
}
