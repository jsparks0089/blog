<template>
  <div id="app">
    <Nav />
    <div class="container">
      <Contents />
      <Feed />
    </div>
  </div>
</template>

<script>
import Nav from './components/Nav'
import Feed from './components/Feed'
import Contents from './components/Contents.vue'

export default {
  name: 'App',
  components: {
    Nav,
    Feed,
    Contents
  }
}
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
    font-family: calibri, sans-serif;
}
#app {
  height: 100vh;
}
</style>
