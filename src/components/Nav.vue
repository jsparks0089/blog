<template>
  <div class="nav-container">
    <div class="nav1">
      
    </div>
    <div class="nav-title">
       <h1 class="title-link">Blog</h1>
    </div>
    <div class="nav2">
       
    </div>
  </div>
</template>

<script>


export default {
    name: 'Nav',
    components: {

    },
    methods: {
       showAbout() {
           this.$emit('show-about')
       } 
    } 
}
</script>

<style>
.nav-container {
    height: 6%;
    width: 100vw;
    margin: none;
    background-color: #25274D;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;
}
.nav1 {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 100%;
    width: 30%;
}
.nav2 {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 100%;
    width: 30%;
}
.title {
    display: flex;
    justify-content: center;

    width: 30%;
}
.btn {
    height: 100%;
    border: none;
    outline: none;
    text-align: center;
    text-decoration: none;
    background: none;
    color: white;
}
.btn:hover {
    background-color: #AAABB8;
    cursor: pointer;
}
#btn-nav1 {
    font-size: 1rem;
    width: 30%;
}
#link-nav2 {
    color: white;
    text-decoration: none;
    font-size: 1rem;
    width: 30%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
#link-nav2:hover {
    background-color: #AAABB8;
    cursor: pointer;
}
</style>