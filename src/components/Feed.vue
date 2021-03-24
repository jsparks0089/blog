<template>
  <div class="feed-container">
      <Post />
  </div>
</template>

<script>
import Post from './Post'

export default {
    name: "Feed",
    components: {
      Post
    }
}
</script>

<style>
.feed-container {
  margin: 20px 40px;
}
</style>