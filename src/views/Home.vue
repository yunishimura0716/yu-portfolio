<template>
  <div id="home">
    <ToolBar />
    <Profile />
    <div id="education">
      <div id="title">
        <h2 class="title">Education</h2>
        <md-icon>school</md-icon>
      </div>
      <main id="app">
        <h3>Education History</h3>
        <section class="timeline">
          <ul>
            <li v-for="(info, index) in timeline_data" v-bind:key="index">
              <span></span>
              <div>{{ info.school }}</div>
              <div>{{ info.program }}</div>
              <div>{{ info.grade }}</div>
              <div class="year">
                <span>{{ info.end }}</span>
                <span>{{ info.start }}</span>
              </div>
            </li>
          </ul>
        </section>
      </main>
    </div>
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
  data() {
    return {
      timeline_data: [
        {
          "school":"The University of British Columbia",
          "program":"Bachelor of Science, Computer Science",
          "grade":"Grade: 93%",
          "start":"2020 / 05",
          "end":"current"
        },
        {
          "school":"Simon Fraser University",
          "program":"Bachelor of Science, Data Science",
          "grade":"GPA: 4.33 / 4.33",
          "start":"2020 / 01",
          "end":"2020 / 04"
        },
        {
          "school": "Langara College",
          "program": "Associate of Science, Science General",
          "grade": "GPA: 4.33 / 4.33",
          "start": "2019 / 09",
          "end": "2019 / 12"
        },
        {
          "school":"Nagoya University",
          "program":"Bachelor of Applied Science, Physical Engineering",
          "grade":"GPA: 4.20 / 4.30",
          "start":"2017 / 04",
          "end":"2019 / 03"
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
#title {
  text-align: center;
}
.md-icon {
  color: navy !important;
}

@import url('https://fonts.googleapis.com/css?family=Montserrat');
$font-stack: 'Montserrat', sans-serif;
$font-color: #fff;
$bg-color: #fff;
$dark-blue: #2E4A62;
$light-blue: #4e9bfa;

@mixin clearfix {
  content: '';
  position: absolute;
  top: 0; left: 0;
}
@mixin set-border($thickness, $color, $radius) {
  border: $thickness solid $color;
  border-radius: $radius;
}

body {
  background-color: $bg-color;
}
*, *::before, *::after {
  margin: 0; padding: 0;
  box-sizing: border-box;
  font-family: $font-stack;
  color: $font-color;
}
main {
  width: 60em;
  height: 100%;
  margin: 1em auto;
  padding: 40px;
  background: $dark-blue;
  border-radius: 4px;
  box-shadow: 0 5px 15px rgba(0,0,0,.5);
}
.timeline {
  padding: 5px 100px;
  ul {
    position: relative;
    &::before {
      @include clearfix();
      height: 100%;
    }
  }
  li {
    position: relative;
    margin: 60px 35px;
    width: 100%;
    list-style: none;
    line-height: 25px;
    &>span {
      @include clearfix();
      left: -25px;
      height: 110%;
      @include set-border(2px, $font-color, none);
    }
    &>span::before, &>span::after {
      @include clearfix();
      width: 14px; height: 14px;
      @include set-border(3px, $font-color, 50%);
      left: -7px;
      background: $light-blue;
    }
    &>span::before {
      top: -15px;
    }
    &>span::after {
      top: 100%;
    }
    div {
      &:nth-child(2) {
        font-size: 1.2em;
        margin: 10px 80px;
      }
      &:nth-child(3), &:nth-child(4) {
        font-size: 1em;
        font-style: italic;
        color: darken($font-color, 25%);
        margin: 10px 100px;
      }
    }
    .year span {
      position: absolute;
      font-size: 1em;
      left: -110px;
      width: 40px;
      text-align: right;
      &:first-child {
        top: -20px;
        text-align: left;
        width: 100px;
      }
      &:last-child {
        top: 100%;
        text-align: left;
        width: 100px;
      }
    }
  }
}
</style>
