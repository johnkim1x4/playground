// create a reducer for each state in the store (store.js)
// in this case, posts and comments
// then put them into one big reducer - root reducer

// a reducer takes in two things:
// 1. the action (info about what happened)
// 2. copy of current state
// will return the new updated state

// reducer does the editing of state

function posts(state = [], action) {
  switch(action.type) {
    case 'INCREMENT_LIKES':
      const i = action.index;
      // return the updated state
      return [
        // ... using the spread operator to duplicate
        ...state.slice(0,i), // before the one we are updating
        {...state[i], likes: state[i].likes + 1}, // update the one post we want
        ...state.slice(i+1), // after the one we are updating
      ]
    default:
      return state;
  }
  return state;
}
// state = [], the first time it runs, state will not be equal to anything
// so we set it to an empty array

export default posts;
