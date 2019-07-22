import getters from "../../src/store/getters.js"


const comments = [ {  
    ID:1256,
    body:'another reply comment',
    
    parentID:0,
    createdAt:'Monday, June 14th, 5:48 pm',
    timestamp: 1563718112884
  },
  {  
    ID:1279,
    body:'another reply of reply comment',

    parentID:1256,
    createdAt:'Monday, September 14th, 5:48 pm',
    timestamp: 1563718115884
  },
  {  
    ID:1278,
    body:'another reply of reply comment',

    parentID:0,
    createdAt:'Monday, September 14th, 5:48 pm',
    timestamp: 1563718115884
  }]
 const state = {comments}

 describe("commentsThread", () => {
    it("sorts commets to thread", () => {
   
    const actual = getters.commentThread(state)
      expect(actual).toEqual([{
        ID:1256,
    body:'another reply comment',
    children:[
     {ID:1279,
        body:'another reply of reply comment',
        children:[],
        parentID:1256,
        createdAt:'Monday, September 14th, 5:48 pm',
        timestamp: 1563718115884}
    ],
    parentID:0,

    createdAt:'Monday, June 14th, 5:48 pm',
    timestamp: 1563718112884   
      },{ID:1278,body:'another reply of reply comment',children:[],parentID:0,createdAt:'Monday, September 14th, 5:48 pm',timestamp: 1563718115884}  ])
    })
  })

  describe("nextID", () => {
    it("next id", () => {
      const actual = getters.nextID(state)
  
      expect(actual).toEqual(1280)
    })
  })

       
  