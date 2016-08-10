import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// import reducers
import posts from './posts';
import comments from './comments';

const rootReducer = combineReducers({posts, comments, routing: routerReducer });
// combine the reducers
// need to pass the routing as well to account for the changes in the router

export default rootReducer;
