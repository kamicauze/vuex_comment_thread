<template>
  <div class="commentlist">
      <h1>COMMENTS LIST</h1>
      <select v-model="commentFilter">
  <option disabled value="commentFilter"></option>
  <option>oldest first</option>
  <option>newest first</option>
  <option>longest first</option>
  <option>shortest first</option>
  
  
</select>
    <comment v-for="comment in orderedComments" :key="comment.ID" :comment="comment" >
      
    </comment>
  
  </div>
</template>
<script>
import comment from "../components/comment.vue"


export default {
  components:{
  comment
  },computed:{
    commentThread(){
      return this.$store.getters.commentThread;
    },
    // order comments
    orderedComments(){
      var comms = []
    if (this.commentFilter ===  'newest first' ){
    comms = this.commentThread.slice().reverse((a,b) => a.timestamp - b.timestamp);
    }
   else if (this.commentFilter ===  'oldest first' ){
    comms =  this.commentThread.slice().sort((a,b) => a.timestamp - b.timestamp);
    }
    else if (this.commentFilter ===  'longest first' ){
    comms =  this.commentThread.slice().sort((a,b) => a.body - b.body);
    }
    else if (this.commentFilter ===  'shortest first' ){
    comms =  this.commentThread.slice().reverse((a,b) => a.body - b.body);
    }
    return comms
    },
    
  },
  data(){
    return {
     commentFilter: 'newest first'
    }
  },

}
</script>
<style scoped>
.commentlist{
    width: 100%;
}

</style>
