import { createStore, compose } from 'redux';
// react-router-redux lets us hook up react router with redux
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

// import the root reducer
import rootReducer from './reducers/index';

// we need something to be populated when loaded initially
// data/posts.js
// data/comments.js
// these files has all the data needed for this application
import comments from './data/comments';
import posts from './data/posts';

// create an object for the default data
const defaultState = {
  posts,
  comments
}
// same thing as doing posts: posts, comments: comments
// but in ES6, it's not needed if the property key and value is the same

// store enhancer - used for suite of tools like redux dev tools
const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
);
// if the dev tools is there run it, or return the store itself

const store = createStore(rootReducer, defaultState, enhancers);
// rootReducer - needed to interface with it
// defaultState
// also pass in the enhancers (for redux dev tools)

// hot loading reducers
// accept the hot reload
// re-require the reducer and swap the module
if (module.hot) {
  module.hot.accept('./reducers/', () => {
    const nextRootReducer = require('./reducers/index').default;
    store.replaceReducer(nextRootReducer);
  })
}

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
