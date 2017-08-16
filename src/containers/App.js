import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cssModules from 'react-css-modules';
import HeaderContainer from '../containers/Header';
import styles from '../style/index.scss';

@cssModules(styles)
export default class App extends Component {
  static propTypes = {
    children: PropTypes.any.isRequired,
    styles: PropTypes.object
  };

  render() {
    const { children, styles } = this.props;
    return (
      <div className={styles.container}>
        <HeaderContainer />
        {children}
      </div>
    );
  }
}
