// Dependances
import React, {Fragment} from 'react';
import {Route, Switch, Redirect} from 'react-router';
import {useSelector} from 'react-redux';

// Pages
import Dashboard from '../Dashboard';
import Miss from '../Miss';
import Login from '../Login';
// Selectors
import {AppState} from '../../selectors';

enum Page {
  Root = '/',
  Dashboard = '/dashboard',
  Login = '/login',
  Miss = '/Miss',
}

export default () => {
  // const isAuthenticated = useSelector(AppState);
  const isAuthenticated = true;

  return (
    <Fragment>
      <Route
        exact
        path={Page.Root}
        render={() =>
          isAuthenticated ? (
            <Redirect to={Page.Dashboard} />
          ) : (
            <Redirect to={Page.Login} />
          )
        }
      />
      <Switch>
        <Route
          path={Page.Dashboard}
          render={() =>
            isAuthenticated ? <Dashboard /> : <Redirect to={Page.Login} />
          }
        />
        <Route
          path={Page.Login}
          render={() =>
            isAuthenticated ? <Redirect to={Page.Dashboard} /> : <Login />
          }
        />
        <Route component={Miss} />
      </Switch>
    </Fragment>
  );
};
