<template>
  <div id="app">
    <Nav />
    <Feed />
  </div>
</template>

<script>
import Nav from './components/Nav'
import Feed from './components/Feed'

export default {
  name: 'App',
  components: {
    Nav,
    Feed
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
