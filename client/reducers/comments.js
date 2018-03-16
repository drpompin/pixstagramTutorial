
function postComments(state=[], action) {
  switch(action.type){
    //we need to return existing state plus the new comment
    case "ADD_COMMENT":
      return[...state, {
        user: action.author,
        text: action.comment,
      }];

    case "REMOVE_COMMENT":
      console.log("remove a comment===>");
      //we need to return new state without deleted comment
      return [
        //from the start to the one we want to deleted
        ...state.slice(0, action.i),

        //after the deleted one to the end
        ...state.slice(action.i + 1)
      ]
    default:
      return state;
  }
    return state;
}


function comments(state=[], action) {
  if (typeof action.postId !== 'undefined') {
    return {
      //take the current state
      ...state,

      //overwrite this post with a new one and pass action responsibilty to postComments
      [action.postId]: postComments(state[action.postId], action)
    }
  }

  return state
}

export default comments;
