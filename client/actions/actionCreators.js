//increment
export function increment(index){
  return {
    type: 'INCREMENT_LIKES',
    index
  }
}


//add comment
export function addComment(postId, author, comment) {
  console.log('dispatching add comment function ====>');
  return {
    type: 'ADD_COMMENT',
    postId,
    author,
    comment
  }
}


//remove commment
export function removeComment(postId, i){
  return {
    type: 'REMOVE_COMMENT',
    postId,
    i
  }
}
