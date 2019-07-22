<template>
  <div id="app">
    <commentbox></commentbox>
    <commentslist></commentslist>
    <commentsTrash></commentsTrash>
  </div>
</template>

<script>
import commentbox from './components/commentBox.vue'
import commentslist from './components/commentslist.vue'
import commentsTrash from './components/commentTrash.vue'

export default {
  name: 'app',
  components: {
   commentslist,
   commentbox,
   commentsTrash,
  }
}
</script>

<style>
#app {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
