<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
    }
  }
}
</script>

<style lang="scss">
  @import "./style/application.scss";
  @import 'bootstrap/dist/css/bootstrap.css';
  @import 'bootstrap-vue/dist/bootstrap-vue.css';
</style>
