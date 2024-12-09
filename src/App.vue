<template>
  
  <RouterHeader/>
  <router-view/>

</template>

<script>
import RouterHeader from "@/components/RouterHeader.vue";

export default {
  name: 'App',
  components: {
    RouterHeader
  },
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 7px;
  max-width: 1400px;
  margin: 0 auto;
}

p {
  margin: 0;
  padding: 0;
}

body {
  margin: 0;
}
</style>
