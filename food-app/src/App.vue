<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <div id="app">
    <Add_food />
  </div>
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Add_food from './components/AddFood.vue'
export default {
  name: 'App',
  components: {
    HelloWorld,
    Add_food
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
