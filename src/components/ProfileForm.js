import React, { Component } from 'react';
import cssModules from 'react-css-modules';
import styles from '../style/index.scss';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import PropTypes from 'prop-types';
import _ from 'lodash';

@cssModules(styles)
export default class ProfileForm extends Component {
  static propTypes = {
    user: PropTypes.object
  };

  constructor(props) {
    super(props);
    this.state = {
      nameError: false,
      usernameError: false
    };
  }
  /**
   * Returns true if field is valid, false if not.
   * Mutates the false fields state.
   */
  checkfield(input, field, text) {
    if (_.isEmpty(input)) {
      this.setState({ [field]: text });
      return false;
    }
    this.setState({ [field]: false });
    return true;
  }
  checkForm() {
    const username = this.refs.username.input.value;
    const name = this.refs.name.input.value;

    if (this.checkfield(username, 'usernameError', 'Please enter a valid username') && this.checkfield(name, 'nameError', 'Please enter a name')) {
      this.props.saveProfileAsync({ name, username });
    }
  }
  render() {
    const { user, styles } = this.props;
    return (
      <div>
        <h2>Edit Profile</h2>

        <div className="row center-xs">
          <div className="col-xs-12">
            <TextField ref="name" hintText="name" fullWidth defaultValue={user.name} onBlur={() => {
              this.checkfield(this.refs.name.input.value, 'nameError', 'Please enter a valid name');
            }} errorText={this.state.nameError} floatingLabelText="name"/>
          </div>
          <div className="col-xs-12">
            <TextField ref="username" hintText="username" fullWidth defaultValue={user.username} onBlur={() => {
              this.checkfield(this.refs.username.input.value, 'usernameError', 'Please enter a valid username');
            }} errorText={this.state.usernameError} floatingLabelText="username"/>
          </div>
        </div>

        <div className="row end-xs">
          <div className="col-xs-6">
            <div className="box">
              <RaisedButton className={styles.actionBtn} label="Save" onClick={() => {
                this.checkForm();
              }} primary/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
