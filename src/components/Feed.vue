<template>
  <div class="feed-container">
      
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