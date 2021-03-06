/* eslint-disable global-require */
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './modules/App/App';

// require.ensure polyfill for node
if (typeof require.ensure !== 'function') {
  require.ensure = function requireModule(deps, callback) {
    callback(require);
  };
}

/* Workaround for async react routes to work with react-hot-reloader till
  https://github.com/reactjs/react-router/issues/2182 and
  https://github.com/gaearon/react-hot-loader/issues/288 is fixed.
 */
if (process.env.NODE_ENV !== 'production') {
  // Require async routes only in development for react-hot-reloader to work.
  require('./modules/Home/Home');
  require('./modules/Program');
  require('./modules/LegalForms/LegalForms');
  require('./modules/LegalTopics/LegalTopics');
  require('./modules/Account');
  require('./modules/Account/Profile');
  require('./modules/Account/Activity');
  require('./modules/Account/Billing');
  require('./modules/Account/Documents');
  require('./modules/Auth/Login');
  require('./modules/Auth/Register');
}

// react-router setup with code-splitting
// More info: http://blog.mxstbr.com/2016/01/react-apps-with-pages/
export default (
  <Route path="/" component={App}>
    <IndexRoute
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./modules/Home/Home').default);
        });
      }}
    />
    <Route
      path="/legaltopics"
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./modules/LegalTopics/LegalTopics').default);
        });
      }}
    />
    <Route
      path="/legalforms"
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./modules/LegalForms/LegalForms').default);
        });
      }}
    />
    <Route
      path="/legaltopics/:name"
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./modules/Program').default);
        });
      }}
    />
    <Route
      path="/legalforms/:name"
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./modules/Program').default);
        });
      }}
    />
    <Route
      path="/signin"
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./modules/Auth/Login').default);
        });
      }}
    />
    <Route
      path="/signup"
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./modules/Auth/Register').default);
        });
      }}
    />
    <Route
      path="account"
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./modules/Account').default);
        });
      }}
    >
      <Route
        path="profile"
        getComponent={(nextState, cb) => {
          require.ensure([], require => {
            cb(null, require('./modules/Account/Profile').default);
          });
        }}
      />
      <Route
        path="documents"
        getComponent={(nextState, cb) => {
          require.ensure([], require => {
            cb(null, require('./modules/Account/Documents').default);
          });
        }}
      />
      <Route
        path="billing"
        getComponent={(nextState, cb) => {
          require.ensure([], require => {
            cb(null, require('./modules/Account/Billing').default);
          });
        }}
      />
      <Route
        path="activity"
        getComponent={(nextState, cb) => {
          require.ensure([], require => {
            cb(null, require('./modules/Account/Activity').default);
          });
        }}
      />
    </Route>
  </Route>
);
