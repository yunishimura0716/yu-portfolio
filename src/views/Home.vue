<template>
  <div id="home">
    <ToolBar />
    <Profile />
    <Work />
    <v-divider class="mx-4"></v-divider>
    <Project />
    <div id="backimg2" />
    <Education />
    <Footer />
  </div>
</template>

<script>
import ToolBar from '../components/ToolBar.vue';
import Profile from '../components/Profile.vue';
import Education from '../components/Education.vue';
import Work from "../components/Work.vue";
import Footer from "../components/Footer.vue";
import Project from "../components/Project.vue";

export default {
  components: {
    ToolBar,
    Profile,
    Education,
    Footer,
    Work,
    Project,
  },
}
</script>

<style lang="css" scoped>
#backimg2 {
  background-image: url("../assets/img/backimg2.jpg");
  width: 100%;
  height: 50vh;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}
</style>
