<template>
  <div id="home">
    <ToolBar />
    <Profile />
    <Work />
    <v-divider class="mx-4"></v-divider>
    <div id="project">
      <h2 class="subtitle">Projects</h2>
      <div class="project-cards" v-for="(project) in projectList" :key="project.title">
        <v-card
            elevation="5"
            outlined
            shaped
            max-width="800"
            max-height="350"
            class="project-card mx-auto my-12"
        >
          <v-img
              height="250"
              src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
              class="project-card-img"
          ></v-img>

          <div class="project-card-body">
            <v-card-title class="project-card-title">{{ project.title }}</v-card-title>
            <v-card-text class="project-card-text">
              <div>{{ project.text }}</div>
            </v-card-text>

            <v-divider class="mx-4"></v-divider>

            <v-card-title class="project-card-stack">Used Stack: </v-card-title>
          </div>
        </v-card>
      </div>
    </div>
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

export default {
  components: {
    ToolBar,
    Profile,
    Education,
    Footer,
    Work,
  },
  data() {
    return {
      projectList: [
        {
          title: 'Cafe Badilico',
          text: 'Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.',
          stacks: [],
        }
      ],
    }
  }
}
</script>

<style lang="scss" scoped>
.subtitle {
  text-align: center;
  color: black;
}

.project-card {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
}

.project-card-img {
  grid-column: 1 / span 5;
}

.project-card-body {
  grid-column: 6 / span 7;
  display: grid;
  grid-template-rows: repeat(6, 1fr);
  max-height: 350px;
}

.project-card-title {}

.project-card-text {}

.project-card-stack {}

#backimg2 {
  background-image: url("../assets/img/backimg2.jpg");
  width: 100%;
  height: 50vh;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}
</style>
