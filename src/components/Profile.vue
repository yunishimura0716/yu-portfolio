<template>
  <div
      id="yunishimura"
      class="wrapper"
  >
    <div
        class="page-header header-filter"
        :style="headerStyle"
    >
      <div class="profile md-layout">
        <div class="md-layout-item ml-auto" id="profile-layout">
          <a href="#">
            <img alt="Raised Image" class="img-raised rounded" :src="faceImage">
          </a>
          <div id="profile-text">
            <div id="scroll-item">
              <transition mode="out-in">
                <div id="profile-text-name" v-if="visible" @click="changeProfile" key="name">
                  <h1>Yu Nishimura</h1>
                  <h2>Who I am ...</h2>
                  <div class="cp_arrows">
                    <div class="cp_arrow cp_arrowfirst"></div>
                    <div class="cp_arrow cp_arrowsecond"></div>
                  </div>
                </div>
                <div id="profile-text-intro" v-if="!visible" @click="changeProfile" key="intro">
                  <div class="cp_arrows_back">
                    <div class="cp_arrow_back cp_arrowfirst"></div>
                    <div class="cp_arrow_back cp_arrowsecond"></div>
                  </div>
                  <p>A Third-year Computer Science student at UBC.</p>
                  <p>Interested in Software Engineering and Cloud Operation.</p>
                </div>
              </transition>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import profileHeader from "../assets/img/profile-header.jpg";
import faceImage from "../assets/img/profile-face.jpg";

export default {
  data() {
    return {
      backImage: profileHeader,
      faceImage: faceImage,
      visible: true,
    }
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.backImage})`,
      };
    },
  },
  methods: {
    changeProfile() {
      this.visible = !this.visible;
    }
  }
}
</script>

<style lang="css" scoped>
.page-header {
  background-attachment: fixed;
}
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
  overflow-y: hidden;
  width: 100%;
  z-index: 1;
}
#scroll-item {
  color: white;
}
#profile-text-name {
  margin-top: 50px;
  margin-right: 200px;
  position: relative;
  cursor: pointer;
  cursor: hand;
}
#profile-text-name h1 {
  text-align: center;
}
#profile-text-name h2 {
  text-align: center;
}
#profile-text-intro {
  position: relative;
  /*margin-top: 80px;*/
  top: -150px;
  cursor: pointer;
  cursor: hand;
}
#profile-text-intro p {
  font-size: 24px;
}

.cp_arrows *, .cp_arrows *:before, .cp_arrows *:after {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.cp_arrows {
  display: flex;
  height: 200px;/*画面いっぱいにする場合100vh*/
  margin: 2em auto;
  justify-content: center;
  align-items: center;
}
.cp_arrows .cp_arrow {
  position: absolute;
  top: 50%;/*着地点（サンプルは[class:cp_arrows]height300pxの50%）*/
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  -webkit-transform-origin: 50% 50%;
  transform-origin: 50% 50%;
  opacity: 0;
}
.cp_arrows .cp_arrowfirst {
  -webkit-animation: arrow-move08 2s ease-in-out infinite;
  animation: arrow-move08 2s ease-in-out infinite;
}
.cp_arrows .cp_arrowsecond {
  -webkit-animation: arrow-move08 2s 1s ease-in-out infinite;
  animation: arrow-move08 2s 1s ease-in-out infinite;
}
.cp_arrows .cp_arrow:before, .cp_arrows .cp_arrow:after {
  position: absolute;
  top: -10px;
  left: 0;
  display: block;
  width: 35px;
  height: 6px;
  content: '';
  background: white;
}
.cp_arrows .cp_arrow:before {
  -webkit-transform: rotate(30deg) translateX(-34%);
  transform: rotate(30deg) translateX(-34%);
  -webkit-transform-origin: top left;
  transform-origin: top left;
}
.cp_arrows .cp_arrow:after {
  -webkit-transform: rotate(-30deg) translateX(34%);
  transform: rotate(-30deg) translateX(34%);
  -webkit-transform-origin: top right;
  transform-origin: top right;
}
@-webkit-keyframes arrow-move08 {
  0% {
    top: 40%;/*スタート地点（サンプルは[class:cp_arrows]height300pxの35%）*/
    opacity: 0;
  }
  70% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@keyframes arrow-move08 {
  0% {
    top: 40%;/*スタート地点（サンプルは[class:cp_arrows]height300pxの35%）*/
    opacity: 0;
  }
  70% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
.cp_arrows_back *, .cp_arrows_back *:before, .cp_arrows_back *:after {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.cp_arrows_back {
  display: flex;
  height: 200px;/*画面いっぱいにする場合100vh*/
  margin: 2em auto;
  justify-content: center;
  align-items: center;
}
.cp_arrows_back .cp_arrow_back {
  position: absolute;
  top: 50%;/*着地点（サンプルは[class:cp_arrows]height300pxの50%）*/
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  -webkit-transform-origin: 50% 50%;
  transform-origin: 50% 50%;
  opacity: 0;
}
.cp_arrows_back .cp_arrowfirst {
  -webkit-animation: arrow-back-move08 2s ease-in-out infinite;
  animation: arrow-back-move08 2s ease-in-out infinite;
}
.cp_arrows_back .cp_arrowsecond {
  -webkit-animation: arrow-back-move08 2s 1s ease-in-out infinite;
  animation: arrow-back-move08 2s 1s ease-in-out infinite;
}
.cp_arrows_back .cp_arrow_back:before, .cp_arrows_back .cp_arrow_back:after {
  position: absolute;
  top: 60px;
  left: -60px;
  display: block;
  width: 35px;
  height: 6px;
  content: '';
  background: white;
}
.cp_arrows_back .cp_arrow_back:before {
  -webkit-transform: rotate(-30deg) translateX(-42%);
  transform: rotate(-30deg) translateX(-42%);
  -webkit-transform-origin: top left;
  transform-origin: top left;
}
.cp_arrows_back .cp_arrow_back:after {
  -webkit-transform: rotate(30deg) translateX(42%);
  transform: rotate(30deg) translateX(42%);
  -webkit-transform-origin: top right;
  transform-origin: top right;
}
@-webkit-keyframes arrow-back-move08 {
  0% {
    opacity: 0;
  }
  70% {
    opacity: 1;
  }
  100% {
    top: 40%;/*スタート地点（サンプルは[class:cp_arrows]height300pxの35%）*/
    opacity: 0;
  }
}
@keyframes arrow-back-move08 {
  0% {
    opacity: 0;
  }
  70% {
    opacity: 1;
  }
  100% {
    top: 40%; /*スタート地点（サンプルは[class:cp_arrows]height300pxの35%）*/
    opacity: 0;
  }
}
/* ヘッダーロゴ フェード処理ここから */
.v-enter {
  opacity: 0;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s;
}

.v-enter-to {
  opacity: 1;
}

.v-leave-to {
  opacity: 0;
  transition: opacity 0.5s;
}
/* ヘッダーロゴ フェード処理ここまで */
</style>