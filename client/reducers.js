/**
 * Root Reducer
 */
import { combineReducers } from 'redux';

// Import Reducers
import app from './modules/App/AppReducer';
import posts from './modules/Post/PostReducer';
import intl from './modules/Intl/IntlReducer';
import programs from './modules/Program/reducer';
import auth from './modules/Auth/AuthReducer';
// import documents from './modules/Account/Documents/reducer';
import activities from './modules/Account/Activity/reducer';
import pay from './modules/Account/Billing/reducer'

import { reducer as notifications } from 'react-notification-system-redux';

// Combine all reducers into one root reducer
export default combineReducers({
  app,
  notifications,
  posts,
  intl,
  programs,
  auth,
  // documents,
  activities,
  pay
});
