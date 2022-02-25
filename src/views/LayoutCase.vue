<template>
  <div>
    <NavCase />
    <router-view></router-view>
  </div>
</template>

<script>
import NavCase from "../components/NavCase.vue";
export default {
  comments: {
    NavCase,
  },
};
</script>

<style></style>
