<template>
  <div>
    <nav-case />
    <router-view></router-view>
  </div>
</template>

<script>
import NavCase from "../components/NavCase.vue";
export default {
  components: { NavCase },
  comments: {
    NavCase,
  },
};
</script>

<style></style>
