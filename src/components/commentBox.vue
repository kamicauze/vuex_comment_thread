<template>
    <div class="comment-box">
        <textarea  v-model="comment.body"  maxlength="20"  @input="LengthCheck($event.target.value)"></textarea>
        <span v-if="show" style="color: red">{{remainingCharacters}}</span>
        <button @click="prepareComment()">Save</button>
    </div>
</template>
<script>

export default {
    props:["parentID"],
     data(){
      return{
        comment:{
                ID:'',
                body:'',
        
                createdAt:'',
                timestamp:'',
                parentID:this.parentID,
            },
        maxCharacters:20,
        show:false
               }
      },
      computed: {
        // get new id
        nextID(){
        return this.$store.getters.nextID
        },
        // display remaining characters
        remainingCharacters: function () {
            if( this.comment.body.length == this.maxCharacters){
                return "sorry you're all out of characters"
            } else{
                return this.maxCharacters - this.comment.body.length  +" characters remaining";
            }
        },
    },
      methods:{
        //   prepare comment before saving
          prepareComment(){
            if (this.comment.parentID == null){
                  this.comment.parentID = 0
                }
            this.comment.ID = this.nextID
            this.comment.timestamp = Date.now()
            var weekday  = new Date().toLocaleString('en-US',{ weekday: 'long',})
            var time =  new Date().toLocaleString('en-US',{ hour: '2-digit', minute: '2-digit'})
            var day =  new Date().toLocaleString('en-US',{day: 'numeric' })
            var month = new Date().toLocaleString('en-US',{month: 'long' })
            
            function nth(d) {
                if(d>3 && d<21) return 'th'; 
                switch (d % 10) {
                        case 1:  return "st";
                        case 2:  return "nd";
                        case 3:  return "rd";
                        default: return "th";
                    }
            } 
            nth(day)
            var formattedDate = weekday + " ,"+ month + " " + day + nth(day) + " ,"  +time
            this.comment.createdAt = formattedDate
            this.saveComment()
          },
        //   save comment to store
          saveComment(){
              this.$store.dispatch('saveCommenttostore',this.comment)
              this.$emit('hideShowreply')
          },
        // check if user is typing  
          LengthCheck(value){
             if(value.length >= 1){
                 this.show = true 
             } else{
                 this.show = false
             }
          },
      }
}
</script>
<style>
.comment-box{
    height: 200px;
    width: 400px;
    box-sizing: border-box;
    padding: 15px;
    text-align: center;
}
.comment-box textarea{
    height:50px ;
    width: 100%;
    margin: 10px;
}
.comment-box button{
    height: 40px;
    width: 100%;
    border: none;
    background-color: #848EFF;
    margin: 10px;
}
</style>
