<template>
  <div class="feed-container">
<div class="posts">
    <p v-for="post in allPosts" :key="post.id">{{post.title}}</p>
</div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
    name: "Feed",
    computed: mapGetters(['allPosts'])
}
</script>

<style>

</style>