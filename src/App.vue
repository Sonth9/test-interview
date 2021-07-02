<template>
  <div id="app">
    <BaseHeader />
    <router-view />
  </div>
</template>

<script>
import BaseHeader from "@/components/common/BaseHeader";

export default {
  name: 'App',
  components: {
    BaseHeader
  }
}
</script>

<style>
html,
body {
  font-family: "Roboto", sans-serif;
}

#app {
  font-family: "Roboto", sans-serif;
}
#app {
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  margin-top: 60px;
}
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap");
@import'~bootstrap/dist/css/bootstrap.css';
@import "./assets/css/base/_index.scss";
@import "./assets/css/base/_form.scss";
@import "./assets/css/base/_color.scss";
@import "./assets/css/base/_header.scss";
@import "./assets/css/common/gird.scss";
@import "./assets/css/common/index.scss";
</style>
