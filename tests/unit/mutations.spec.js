import mutations from "@/store/mutations.js"

describe("saveComment",() =>{

it("adds a comment to the state", () => {
    const comment = { ID:1267, body:'this is a comment', parentID:0,createdAt:'Monday, September 14th, 5:48 pm',timestamp: 1563718117884};
    const state = {
      comments: []
    }

    mutations.saveComment(state, { comment })

    expect(state).toEqual({
     
      comments:[{ comment }]
    })
  })
})

describe("removeComment",() =>{
    const comment_id = 1267
    const state = {
        comments: [{ID:1267, body:'this is a comment', parentID:0,createdAt:'Monday, September 14th, 5:48 pm',timestamp: 1563718117884},{ID:1278, body:'this  comment', parentID:0,createdAt:'Monday, September 18th, 5:48 pm',timestamp: 1563918117884}],
        trash: []
      }
    mutations.removeComment(state, comment_id)  
    expect (state).toEqual({
        comments: [{ID:1278, body:'this  comment', parentID:0,createdAt:'Monday, September 18th, 5:48 pm',timestamp:1563918117884}],
        trash: [{ID:1267, body:'this is a comment', parentID:0,createdAt:'Monday, September 14th, 5:48 pm',timestamp: 1563718117884}]
    })
})
describe ("removeAll", () => {
    const state = {
        trash :[{ID:1278, body:'this  comment', parentID:0,createdAt:'Monday, September 18th, 5:48 pm',timestamp:1563918117884}],
        
    }
    mutations.removeAll(state) 
    expect (state).toEqual({
        trash :[]
    })
})
describe("removepermanently",() =>{
    const comment_id = 1267
    const state = {
        trash: [{ID:1267, body:'this is a comment', parentID:0,createdAt:'Monday, September 14th, 5:48 pm',timestamp: 1563718117884},{ID:1278, body:'this  comment', parentID:0,createdAt:'Monday, September 18th, 5:48 pm',timestamp: 1563918117884}],
    
      }
    mutations.removePermanently(state, comment_id)  
    expect (state).toEqual({
        trash: [{ID:1278, body:'this  comment', parentID:0,createdAt:'Monday, September 18th, 5:48 pm',timestamp:1563918117884}],
    })
})