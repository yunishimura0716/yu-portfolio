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
        <div class="profile-layout">
          <div class="image-wrapper"></div>
        </div>
      </parallax>
    </div>
  </div>
</template>

<script>
import ToolBar from '../components/ToolBar.vue';
import profileHeader from '../assets/img/profile-header.jpg';

export default {
  components: {
    ToolBar,
  },
  data() {
    return {
      image: profileHeader
    }
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.image})`
      };
    },
  }
}
</script>
