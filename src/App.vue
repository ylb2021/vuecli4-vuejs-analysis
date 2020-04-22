<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <input type="text" @change="msg=titile" v-model="titile" />
    <HelloWorld :msg="msg" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

// ### There are eight lifecycle methods:

// Before create
// Created
// Before mount
// Mounted
// Before update
// Updated
// Before destroy
// Destroyed

export default {
  name: "App",
  data: function() {
    return {
      msg: "Welcome to Your Vue.js App",
      titile: ""
    };
  },
  components: {
    HelloWorld
  },
  beforeCreate() {
    console.log("beforCreate hook has been called");
  },
  created() {
    console.log("Created hook has been called");
  },
  beforeMount() {
    console.log("beforeMount is called");
  },
  mounted() {
    console.log("mounted has been called");
  },
  beforeUpdate() {
    console.log("beforeUpdate hook has been called");
  },
  updated() {
    console.log("Updated hook has been called");
  },
  beforeDestroy() {
    console.log("beforeDestroy hook has been called");
  },
  destroyed() {
    this.$destroy();
    console.log("destroyed", this);
  }
};
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
