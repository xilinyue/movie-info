<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import userServices from './services/UserServices';

export default {
  name: 'app',
  methods: {
    test() {
      userServices.test();
    }
  },
}
</script>

<style>
#app {
  height: 100%;
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50; */
}
</style>
