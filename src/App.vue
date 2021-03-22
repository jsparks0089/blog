<template>
  <div id="app">
    <Nav />
  </div>
</template>

<script>
import Nav from './components/Nav'

export default {
  name: 'App',
  components: {
    Nav
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
