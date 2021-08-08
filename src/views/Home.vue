<template>
  <div id="home">
    <ToolBar />
    <Profile />
    <Work />
    <v-divider class="mx-4"></v-divider>
    <div id="project">
      <h2 class="subtitle">Projects</h2>
      <div
        class="project-cards"
        v-for="(project) in projectList"
        :key="project.title"
      >
        <a :href="project.src" target="_blank">
          <v-card
              elevation="5"
              outlined
              shaped
              max-width="800"
              max-height="330"
              class="project-card mx-auto my-12"
              :class="{selected:activeProject === project.title}"
              @mouseover="activeProject=project.title"
              @mouseout="activeProject=''"
          >
            <v-img
                height="327"
                :src="project.img"
                class="project-card-img"
            ></v-img>

            <div class="project-card-body">
              <v-card-title class="project-card-title">{{ project.title }}</v-card-title>
              <v-card-text class="project-card-text">
                <div>{{ project.text }}</div>
              </v-card-text>

              <v-divider class="mx-4"></v-divider>

              <v-card-title>Used Stack:</v-card-title>
              <div class="project-card-stack">
                <div class="project-card-tech" v-for="stack in project.stacks" :key="stack.name">
                  <i :class="stack.class"></i>
                  <p>{{ stack.name }}</p>
                </div>
              </div>
            </div>
          </v-card>
        </a>
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
import promopal from "../assets/img/promopal.gif";
import shooting from "../assets/img/ShootingSphere.png";

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
          title: 'PromoPal',
          text: 'Finding the best restaurant promotions and deals while supporting local 🍔',
          img: promopal,
          src: "https://github.com/ubclaunchpad/PromoPal-backend",
          stacks: [
            { name: 'PostgreSQL', class: 'fas fa-database fa-lg'},
            { name: 'TypeORM', class: 'fas fa-tools fa-lg'},
            { name: 'Redis', class: 'fas fa-database fa-lg'},
            { name: 'Node.js', class: 'fab fa-node fa-lg'},
            { name: 'Firebase', class: 'fas fa-server fa-lg'},
            { name: 'Docker', class: 'fab fa-docker fa-lg'}
          ],
        },
        {
          title: 'ShootingSphere',
          text: 'This is AR app made of Unity. User shoots sphere and break it in our world! 🔫',
          img: shooting,
          src: "https://github.com/yunishimura0716/ShootingSphereAR",
          stacks: [
            { name: 'Unity', class: 'fab fa-unity fa-lg'},
            { name: 'C#', class: 'fab fa-cuttlefish fa-lg'},
            { name: 'Vuforia', class: 'fas fa-tools fa-lg'},
            { name: 'Multi-Platform', class: 'fas fa-mobile fa-lg'},
            { name: 'FPS', class: 'fas fa-pen-fancy fa-lg'},
          ],
        }
      ],
      activeProject: "",
    }
  }
}
</script>

<style lang="css" scoped>
.subtitle {
  text-align: center;
  color: black;
  margin-bottom: 40px;
}

.project-card {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  margin-bottom: 40px;
}

.selected {
  border-color: #66FF33 !important;
  border-width: 2px !important;
}

.project-card-img {
  grid-column: 1 / span 6;
}

.project-card-body {
  grid-column: 7 / span 7;
  display: grid;
  grid-template-rows: repeat(6, 1fr);
  max-height: 330px;
}

.project-card-title {}

.project-card-text {}

.project-card-stack {
  margin-left: 10px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

.project-card-tech {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}


#backimg2 {
  background-image: url("../assets/img/backimg2.jpg");
  width: 100%;
  height: 50vh;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}
</style>
