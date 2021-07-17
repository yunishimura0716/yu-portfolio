<template>
  <div id="home">
    <ToolBar />
    <Profile />
    <div id="works">
      <h2 class="subtitle">Works</h2>
      <div class="works-list">
        <md-card v-for="work in worksList" :key="work.img">
          <md-card-media-cover md-solid>
            <md-card-media md-ratio="4:3">
              <img :src='work.img' alt="Skyscraper">
            </md-card-media>

            <md-card-area>
              <md-card-header>
                <span class="md-title">{{ work.title }}</span>
                <span class="md-subhead">4/3 image</span>
              </md-card-header>
            </md-card-area>
          </md-card-media-cover>
        </md-card>
      </div>
    </div>
    <Education />
  </div>
</template>

<script>
import ToolBar from '../components/ToolBar.vue';
import Profile from '../components/Profile.vue';
import Education from '../components/Education.vue';
import n2i from '../assets/img/n2i_logo.png';
import next from '../assets/img/next_logo.png';
import plaid from '../assets/img/plaid_logo.jpeg';

export default {
  components: {
    ToolBar,
    Profile,
    Education,
  },
  data() {
    return {
      worksList: [
        {
          title: 'Machine Learning Engineer',
          img: n2i,
          type: '',
          period: '',
          place: '',
          description: '',
        },
        {
          title: 'Software Engineer',
          img: next,
          type: '',
          period: '',
          place: '',
          description: '',
        },
        {
          title: 'Software Engineer',
          img: plaid,
          type: '',
          period: '',
          place: '',
          description: '',
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.works-list {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: -40px;
}
.md-card {
  width: 320px;
  margin: 4px;
  display: inline-block;
  vertical-align: top;
}
.md-card .md-card-header {
  background-color: transparent;
  margin: 0px 0px 0px 15px;
  box-shadow: 0 0 0 0;
}
.md-card-area {
  background: rgba(0, 0, 0, 0.8) !important;
}
</style>
