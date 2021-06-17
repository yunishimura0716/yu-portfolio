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
    }
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.backImage})`
      };
    },
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

#profile-layout {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
}
#profile-layout > a {
  grid-column: 3 / span 3;
}

</style>
