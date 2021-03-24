<template>
  <div class="cont-container">
      <ul class="list-container">
          <li class="post-title" v-for="post in allPosts" :key="post.id">{{post.title}}</li>
      </ul>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
    name: "Contents",
    computed: mapGetters(['allPosts'])
}
</script>

<style>
.cont-container {
    width: 30vw;
    height: 100vh;
    margin: 20px 0 0 0;
    border-right: 1px solid #AAABB8;
    
}
.post-title {
    padding: 10px 20px;
    color: #505050;
}
.post-title:hover {
    background-color: #AAABB8;
}
</style>