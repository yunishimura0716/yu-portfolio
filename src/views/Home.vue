<template>
  <div id="home">
    <ToolBar />
    <Profile />
    <div id="works">
      <h2 class="subtitle">Works</h2>
      <div class="works-list">
        <md-card v-for="(work) in worksList" :key="work.img">
          <div @click="openModal(work)">
            <md-card-media-cover md-solid>
              <md-card-media md-ratio="4:3">
                <img :src='work.img' alt="Skyscraper">
              </md-card-media>

              <md-card-area>
                <md-card-header>
                  <span class="md-title">{{ work.title }} @ {{ work.company }}</span>
                  <span class="md-subhead">{{ work.type }}, {{ work.period }}</span>
                </md-card-header>
              </md-card-area>
            </md-card-media-cover>
          </div>
        </md-card>
        <!--          component WorkModal-->
        <WorkModal
          @close="closeModal"
          v-if="modal"
          :work="workData"
        />
      </div>
    </div>
    <div id="backimg2"></div>
    <Education />
  </div>
</template>

<script>
import ToolBar from '../components/ToolBar.vue';
import Profile from '../components/Profile.vue';
import Education from '../components/Education.vue';
import WorkModal from "../components/WorkModal.vue";
import n2i from '../assets/img/n2i_logo.png';
import next from '../assets/img/next_logo.png';
import plaid from '../assets/img/plaid_logo.jpeg';

export default {
  components: {
    ToolBar,
    Profile,
    Education,
    WorkModal,
  },
  data() {
    return {
      worksList: [
        {
          title: 'Machine Learning Engineer',
          company: 'N2i, Inc.',
          img: n2i,
          type: 'Part-time',
          period: '2018/04 - 2018/10',
          place: '',
          description: '',
        },
        {
          title: 'Software Engineer',
          company: 'NEXT, Inc.',
          img: next,
          type: 'Part-time',
          period: '2020/07 - 2020/12',
          place: '',
          description: '',
        },
        {
          title: 'Software Engineer',
          company: 'PLAID, Inc.',
          img: plaid,
          type: 'Internship',
          period: '2021/05 - 2021/08',
          place: '',
          description: '',
        }
      ],
      modal: false,
      workData: null,
    }
  },
  methods: {
    openModal(work) {
      console.log('hello')
      this.modal = true;
      this.workData = work;
    },
    closeModal() {
      this.modal = false
    },
  }
}
</script>

<style lang="scss" scoped>
.subtitle {
  text-align: center;
}
.works-list {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 40px;
  margin-left: 3%;
  margin-right: 3%;
}
.md-card {
  width: 400px;
  margin: 25px;
  display: inline-block;
  vertical-align: top;
  cursor: pointer;
}
.md-card .md-card-header {
  background-color: transparent;
  margin: 0px 0px 0px 15px;
  box-shadow: 0 0 0 0;
}
.md-card-area {
  background: rgba(0, 0, 0, 0.8) !important;
}
.md-card .md-title {
  font-size: 22px;
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
