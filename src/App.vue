<template>
  <div id="app">
    <Header></Header>
    <Footer v-show="$route.meta.show"></Footer>
  </div>
</template>

<script>
import Header from "./components/Header/index.vue";
import Footer from "./components/Footer/index.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
  mounted() {
    //通知Vuex发请求
    this.$store.dispatch("categoryList");
  },
};
</script>

<style>
</style>
