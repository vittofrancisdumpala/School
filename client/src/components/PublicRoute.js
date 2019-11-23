import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PublicRoute = ({component: Component, isLoggedIn, restricted, ...rest}) => {
    return (
        // restricted = false meaning public route
        // restricted = true meaning restricted route
        <Route {...rest} render={props => (
           isLoggedIn && restricted ?
                <Redirect to="/dashboard" />
                : <Component {...props} {...rest} />
        )} />
    );
};

export default PublicRoute;