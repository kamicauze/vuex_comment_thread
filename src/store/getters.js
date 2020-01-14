 // create tree from flat json
const commentThread = state =>{
      
    var nest = (items, id = 0, link = 'parentID') =>
    items.filter(item => item[link] === id).map(item => ({ ...item, children: nest(items, item.ID) }));
  
     return  nest(state.comments)
  };

  // auto increment ID's
 const nextID = state => {
    function maxid(list){ 
      var max = Math.max(...list.comments.map(comment => comment.ID))
      return max +1
    }
    
    return maxid(state)
  } ;

export default {
  commentThread,
  nextID  
  };
  