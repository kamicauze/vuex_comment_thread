import Vue from 'vue'
import Vuex from 'vuex'

import actions from './actions.js';
import getters from './getters.js';
import mutations from './mutations.js';

Vue.use(Vuex)

export const store = new Vuex.Store({
  
  state: {
      status: { loading: true },
    
      comments:[
        {  
          ID:1267,
          body:'this is a comment',
      
          parentID:0,
          createdAt:'Monday, September 14th, 5:48 pm',
          timestamp: 1563718117884
        },

        {  
          ID:1256,
          body:'another reply comment',
          
          parentID:1267,
          createdAt:'Monday, June 14th, 5:48 pm',
          timestamp: 1563718112884
        },
        {  
          ID:1278,
          body:'another reply of reply comment',
      
          parentID:1256,
          createdAt:'Monday, September 14th, 5:48 pm',
          timestamp: 1563718115884
        },

      ],
      trash:[{  
        ID:1275,
        body:'Ngai fafa',
      
        parentID:0,
        createdAt:'Thursday, Octobre 5th, 4:32 pm',
        timestamp: 1563718115884
      },],
 
  },
  
  actions,
  getters,
  mutations,
})