 // save new comment
const saveComment = (state, payload) => {
    state.comments.push(payload)
  } ;
  // delete comment
  const removeComment = (state, payload) => {
   var togo = state.comments.find(comment => comment.ID === payload)
   let i = state.comments.map(comment => comment.ID).indexOf(payload);
   state.comments.splice(i, 1);
   state.trash.push(togo)
  };
//  remove single comment from trash
 const removepermanently = (state , payload) => {
    let i = state.trash.map(comment => comment.ID).indexOf(payload);
    state.trash.splice(i, 1);
  };
   // empty trash
 const removeAll = state => {
    state.trash = [];
};
export default {
    saveComment,
    removeComment,
    removepermanently,
    removeAll
  };
  