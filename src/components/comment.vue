<template>
<div class="comment">
    <div class="comment-body">

    <p>{{comment.body}}</p>
    <span class="time">{{comment.createdAt}}</span>
    <div class="actions">
        <button @click="replyshow = !replyshow">Reply</button>
        <button @click="remove()">Delete</button>
    </div>
    </div>
    <commentBox v-if="replyshow" v-on:hideShowreply="hidereply()" :parentID="comment.ID"></commentBox>
    <div class="replies">

    <comment v-for="comment in comment.children" :key="comment.ID" :comment="comment" ></comment>
        
    </div>
    
</div>
</template>
<script>
import commentBox from "../components/commentBox.vue"
export default {
    
   components:{
       commentBox,
       
   }, 
   name: 'comment',
  props:['comment'],
  data(){
      return{
        replyshow:false
      }
  },computed:{
    // sortedCommentchildren(){
        
    // }
  },
  methods:{
      reply(){
          this.replyshow = true
      },
      remove(){ 
           return  this.$store.dispatch('removeComment',this.comment.ID)
      },
      hidereply(){
          this.replyshow = false
      }
      
  }
}
</script>
<style>
    .comment{
        width: 600px;
        min-height:70px ;
        height: fit-content;
        box-sizing: border-box;
        
        margin: 10px;
        display: flex;
        flex-direction: column;
    }
   
    .time{
        float: right;
        color: black;
        font-size: 12px;

    }
    .actions{
        width:110px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .actions button{
        background-color: white;
        border: none;
        height: 30px;
    }
    .replies{
       margin-left: 50px;;
    }
    .comment-body{
        background-color: pink;
        box-sizing: border-box;
        padding: 10px;
    }
</style>
