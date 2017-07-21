import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';
import AuthModalContainer from '../components/user/auth_modal_container';

const Protected = ({ component: Component, path, loggedIn }) => (
  <Route path={path} render={(props) => (
     loggedIn ? (
       <Component {...props} />
    ) : (
      <AuthModalContainer />
    )
  )}
  />
);

const mapStateToProps = state => (
  { loggedIn: Boolean(state.session.currentUser) }
);

export const ProtectedRoute = withRouter(connect(mapStateToProps, null)(Protected));
