<template>
  <div id="home">
    <ToolBar />
    <Profile />
  </div>
</template>

<script>
import ToolBar from '../components/ToolBar.vue';
import Profile from '../components/Profile.vue';

export default {
  components: {
    ToolBar,
    Profile,
  },
}
</script>

<style lang="css" scoped>
</style>
