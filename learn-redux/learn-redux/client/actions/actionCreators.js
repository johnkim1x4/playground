// may put each action creators in different files if needed

// action creators return action objects

// actions are objects with two things:
// action type - what happened
// payload - what needs to change

// increment like
export function increment(index) {
  return {
    type: 'INCREMENT_LIKES',
    index
  }
}
// passing the identifier, index
// actions should take as few parameters as possible

// add comment
export function addComment(postId, author, comment) {
  return {
    type: 'ADD_COMMENT',
    postId,
    author,
    comment
  }
}

// remove comment
export function removeComment(postId, index) {
  return {
    type: 'REMOVE_COMMENT',
    postId,
    index
  }
}
// postId: what post should the comment be removed from
// index: what comment should be removed
