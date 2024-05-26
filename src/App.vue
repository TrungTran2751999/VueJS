<template>
  <base-nav></base-nav>
  <RouterView></RouterView>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import Header from './components/Header.vue';
import Nav from './components/Nav.vue'
export default {
  name: 'App',
  components: {
    // HelloWorld,
    // HeaderApp:Header
    BaseNav:Nav
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
