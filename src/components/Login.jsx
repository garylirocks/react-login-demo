import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import {
  Field,
  reduxForm,
  SubmissionError,
} from 'redux-form';
import { TextField } from 'redux-form-material-ui';
import {
  Button,
  CircularProgress,
} from '@material-ui/core';

import style from './button.scss';
import { login } from '../actions';

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = dispatch => ({
  login(name) {
    const a = dispatch(login(name));
    return a.catch(
      (error) => {
        throw new SubmissionError({
          _error: 'Login failed!'
        });
      }
    )
  }
});

class Login extends React.Component {
  state = {
    redirectToReferrer: false
  };

  login = (values) => {
    return this.props.login(values.firstName).catch((error) => {throw error}).then(() => {
      console.log('resolved');
      this.setState({ redirectToReferrer: true })
    });
  };

  render() {
    const { from } = this.props.location.state || { from: { pathname: "/" } };
    const { redirectToReferrer } = this.state;
    const { error, handleSubmit, pristine, reset, submitting } = this.props;

    if (redirectToReferrer) {
      return <Redirect to={from} />;
    }

    return (
      <form onSubmit={ handleSubmit(this.login) }>
      <p>You must log in to view the page at {from.pathname}</p>
      <div>
        <label>First Name</label>
        <div>
          <Field
            name="firstName"
            component={TextField}
            placeholder="First Name"
          />
        </div>
      </div>
      <div>
        <label>Last Name</label>
        <div>
          <Field
            name="lastName"
            component={TextField}
            type="password"
            placeholder="Last Name"
          />
        </div>
      </div>
      {error && <strong>{error}</strong>}
      <div>
        <Button type="submit" disabled={pristine || submitting}
          classes={{root: style.button}} >
          {submitting ?
            <CircularProgress />
            : 'Submit'
          }
        </Button>
      </div>
    </form>
    );
  }
}

Login.defaultProps = {
};

Login.propTypes = {
};

Login = connect(mapStateToProps, mapDispatchToProps)(Login);

export default reduxForm({
  form: 'login',
})(Login);
