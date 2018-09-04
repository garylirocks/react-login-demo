import React from 'react';
import {
  Route,
  Redirect,
} from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        loggedIn: state.user.authed,
    };
};

const mapDispatchToProps = dispatch => ({
});

const PrivateRoute = ({ component: Component, loggedIn, authed, ...rest }) => {
    return (
    <Route
        {...rest}
        render = {props =>
        loggedIn ? (
            <Component {...props} />
        ) : (
            <Redirect
            to={{
                pathname: "/login",
                state: { from: props.location }
            }}
            />
        )
        }
    />);
};

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute);
