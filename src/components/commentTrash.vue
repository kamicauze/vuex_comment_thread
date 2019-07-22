<template>
    <div class="comment-trash">
        <h1>COMMENTS TRASH</h1>
        <button @click="removeAll">Remove all</button>
        
        <div class="deleted-comment"  v-for="comment in comments" :key="comment.ID">
            <p>{{comment.body}}</p>
            <p>{{comment.createdAt}}</p> 
            <button @click="removepermanently(comment.ID)">Remove</button>
        </div>
    </div>
</template>
<script>
export default {
  computed:{
      comments(){
          return this.$store.state.trash
      }
  } ,
  methods:{
      removeAll(){
           this.$store.commit('removeAll')
      },
      removepermanently(id){
           this.$store.commit('removepermanently',id)
      }
  } 
}
</script>
<style>
.deleted-comment{
    width: 500px;
    height: 50px;
    background-color: aquamarine;
    box-sizing: border-box;
    padding: 10px;
    display:flex; 
    align-items: center;
    justify-content:space-between;
    margin-bottom: 5px;
}
.button {
    margin-bottom: 5px;
}

</style>
