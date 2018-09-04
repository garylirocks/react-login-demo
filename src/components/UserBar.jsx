import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Redirect,
} from 'react-router-dom';

import Button from '@material-ui/core/Button';

import { logout } from '../actions';

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = dispatch => ({
  logout() {
    dispatch(logout());
  }
});

class UserBar extends React.Component {
  logout = () => {
    this.props.logout();
  };

  render() {
    const { authed, user } = this.props;

    return (
      authed ? (
        <div>
          Welcome {user.username}!
          <Button onClick={this.logout} variant="contained" color="primary">Log Out</Button>
        </div>
      ) : null
    );
  }
}

UserBar.defaultProps = {
};

UserBar.propTypes = {
};

export default connect(mapStateToProps, mapDispatchToProps)(UserBar);
