import React from 'react';

import { render } from 'react-dom';

// css
import css from './styles/style.styl';

// components
import App from './components/App';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';

// import react router dependencies
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

// binding that allows us to use react with redux
import { Provider } from 'react-redux';

import store, { history } from './store';

// Provider exposes the store to the application
// gets the store prop

// Router history - in store.js, we synced the browserHistory with the store and exported into a variable history

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={PhotoGrid}></IndexRoute>
        <Route path="/view/:postId" component={Single}></Route>
      </Route>
    </Router>
  </Provider>
);

render(router, document.getElementById('root'));
