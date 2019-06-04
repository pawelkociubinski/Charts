import {createSelector} from 'reselect';

const userSelector = state => state.user.user;

const locationSelector = state => state.router.location;

export const AppState = createSelector(
  [userSelector, locationSelector],
  (user, location) => ({isAuthenticated: !!user, location: location})
);
