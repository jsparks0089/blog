<template>
  <div class="post-container">
      <p class="body">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem qui, voluptatum consectetur perspiciatis officiis ut quisquam amet maiores perferendis molestiae sint fugit, eligendi tenetur tempora? Aspernatur ea fuga laborum deserunt!</p>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: 'Post',
  computed: mapGetters(['allPosts'])
}
</script>

<style>
.body {
  font-size: 1.5rem;
  color: #505050;
}
</style>