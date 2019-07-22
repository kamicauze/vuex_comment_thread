const saveCommenttostore = (context, payload) => {
    setTimeout(function(){
    context.commit('saveComment', payload)
  },500)
};
const  removeComment = (context, payload) => {
    setTimeout(function(){
      context.commit('removeComment', payload)
    }, 200);
    
   
   
  }


export default {
   saveCommenttostore,
   removeComment,
  };
  