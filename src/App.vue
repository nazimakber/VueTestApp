<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
    <Client />

  </div>
</template>

<script>
/* eslint-disable */
import Client from "../src/components/client/Client";
import Provider from "../src/components/provider/Provider";

const components = {
  Client,
  Provider
};

export default {
  name: 'App',
  components
}

/*
  export default {
  name: "AnnualInspection",
  components,
  props,
  data,
  computed,
  mounted,
  methods
};*/

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
