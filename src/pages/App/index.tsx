// Dependances
import React, {Fragment} from 'react';
import {Route, Switch, Redirect} from 'react-router';
import {useSelector} from 'react-redux';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
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
  const {isAuthenticated, location} = useSelector(AppState);
  // const isAuthenticated = true;
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
      <TransitionGroup>
        <CSSTransition key={location.key} classNames="fade" timeout={500}>
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
        </CSSTransition>
      </TransitionGroup>
    </Fragment>
  );
};
