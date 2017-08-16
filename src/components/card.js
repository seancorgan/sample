import React, {Component} from 'react';
import PropTypes from 'prop-types';
import cssModules from 'react-css-modules';
import styles from  '../style/card.scss';

@cssModules(styles)

export default class Card extends Component {
  static propTypes = {
    children: PropTypes.any.isRequired,
    styles: PropTypes.object
  };

  render() {
    const {children, styles} = this.props;
    return (
      <div>
        <div className="row center-xs">
          <div className="col-xs-10 col-sm-8 col-lg-2">
            <div className="box">
              <div className={styles.card}>
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
