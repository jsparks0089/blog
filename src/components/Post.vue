<template>
  <div class="post-container">
      <h2 class="title">Title</h2>
      <p class="body">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem qui, voluptatum consectetur perspiciatis officiis ut quisquam amet maiores perferendis molestiae sint fugit, eligendi tenetur tempora? Aspernatur ea fuga laborum deserunt!</p>
      <p class="info">3/25/21</p>
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
.post-container {
  margin: 100px;
  padding: 50px;
  border: 1px solid #AAABB8;
  border-radius: 7px;;
}
.title {
  margin-bottom: 20px;
}
.body {
  font-size: 1.5rem;
  color: #505050;
}
.info {
  margin: 10px 0;
  color: #AAABB8;
  font-size: 0.7rem;
}
</style>//