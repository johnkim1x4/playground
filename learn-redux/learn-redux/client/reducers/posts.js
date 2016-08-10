// create a reducer for each state in the store (store.js)
// in this case, posts and comments
// then put them into one big reducer - root reducer

// a reducer takes in two things:
// 1. the action (info about what happened)
// 2. copy of current state
// will return the new updated state

function posts(state = [], action) {
  console.log(state, action);
  return state;
}
// state = [], the first time it runs, state will not be equal to anything
// so we set it to an empty array

export default posts;
