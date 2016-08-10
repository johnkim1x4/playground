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

const store = createStore(rootReducer, defaultState);
// rootReducer - needed to interface with it
// defaultState

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
