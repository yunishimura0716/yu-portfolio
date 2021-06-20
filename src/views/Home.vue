<template>
  <div id="home">
    <ToolBar />
    <div
      id="yunishimura"
      class="wrapper"
    >
      <parallax
        class="page-header header-filter"
        :style="headerStyle"
      >
        <div class="profile md-layout">
          <div class="md-layout-item ml-auto" id="profile-layout">
            <a href="#">
              <img alt="Raised Image" class="img-raised rounded" :src="faceImage">
            </a>
            <div id="profile-text" @scroll="scrollProfile">
              <div id="scroll-item">
                <div id="profile-text-name" v-show="visible1">
                  <h1>Yu Nishimura</h1>
                  <h2 v-show="visible1">Who am I ...? ⥥</h2>
                </div>
                <div id="profile-text-intro" v-show="visible2">
                  <p>A Third-year Computer Science student at UBC.</p>
                  <p>Interested in Software Engineering and Cloud Operation.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </parallax>
    </div>
  </div>
</template>

<script>
import ToolBar from '../components/ToolBar.vue';
import profileHeader from '../assets/img/profile-header.jpg';
import faceImage from '../assets/img/profile-face.jpg';

export default {
  components: {
    ToolBar,
  },
  data() {
    return {
      backImage: profileHeader,
      faceImage: faceImage,
      visible1: true,
      visible2: false,
    }
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.backImage})`
      };
    },
  },
  methods: {
    scrollProfile(e) {
      // console.log(e.target.scrollTop);
      this.visible1Scroll(e.target.scrollTop);
      this.visible2Scroll(e.target.scrollTop);
    },
    visible1Scroll(scrollY) {
      if (!this.visible1) {
        this.visible1 = scrollY < 150;
      } else if (scrollY > 250) {
        this.visible1 = !this.visible1;
      }
    },
    visible2Scroll(scrollY) {
      if (!this.visible2) {
        this.visible2 = 650 < scrollY;
      } else if (scrollY < 550) {
        this.visible2 = !this.visible2;
      }
    }
  }
}
</script>

<style lang="css" scoped>
img.img-raised {
  border-radius: 50% !important;
  object-fit: cover;
  height: 350px;
  width: 350px;
  transform: scale(0.5);
}

.profile {
  align-items: center;
}

#profile-layout {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
}
#profile-layout > a {
  grid-column: 2 / span 3;
}
#profile-text {
  grid-column: 5 / span 6;
  margin-top: auto;
  margin-bottom: auto;
  max-height: 250px;
  overflow-y: auto;
  width: 100%;
  z-index: 1;
}
#scroll-item {
  height: 1000px;
}
#profile-text-name {
  margin-top: 80px;
  position: fixed;
}
#profile-text-name h1 {
  text-align: center;
}
#profile-text-name h2 {
  text-align: center;
}
#profile-text-intro {
  position: fixed;
  margin-top: 80px;
}
#profile-text-intro p {
  font-size: 24px;
}
</style>
