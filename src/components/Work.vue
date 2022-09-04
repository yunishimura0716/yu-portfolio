<template>
  <div id="works">
    <div class="subtitle">
      <h2 class="subtitle-text">Works</h2>
      <i class="fas fa-business-time fa-lg"></i>
    </div>
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
</template>

<script>
import n2i from "../assets/img/n2i_logo.png";
import next from "../assets/img/next_logo.png";
import plaid from "../assets/img/plaid_logo.jpeg";
import ubcLFS from "../assets/img/ubc_lfs.jpeg";
import amplitude from "../assets/img/amplitude_logo.png";
import WorkModal from "./WorkModal.vue";

export default {
  components: {
    WorkModal,
  },
  data() {
    return {
      worksList: [
        {
          title: 'Software Engineer Intern',
          company: 'Amplitude',
          img: amplitude,
          type: 'Internship',
          period: '2022/05 - 2022/08',
          place: 'Vancouver, BC',
          description: "  - Worked as a software engineer intern at Amplitude, the company developing #1 Product Analytics.\n" +
              " - Joined Integration team to help events ingestion and cohort export between Amplitude and third parties.\n" +
              " - Worked on full-stack web development with Python, Typescript, React, GraphQL, PostgreSQL.\n" + 
              " - Re-designed and developed testing interface and error classification features of the integration portal and released it as the closed-beta. This service can enable the partners to build, modify and maintain their Amplitude integration by themselves and enable us to scale the number of data connections. 5 more partners started using it in the first two weeks after release.\n" +
              " - Designed and developed the new version of SFMC (Salesforce Marketing Cloud) integration with Salesforce SOAP API and improved to make the integration setup steps much less than the old version and support concurrent and batched cohort export.",
        },
        {
          title: 'Software Developer Assistant',
          company: 'UBC Faculty of Land and Food System',
          img: ubcLFS,
          type: 'Part-time',
          period: '2021/09 - 2022/04',
          place: 'Vancouver, BC',
          url: 'https://www.linkedin.com/company/ubc-lfs/',
          description: "- Worked as a software developer at UBC LFS and worked on the full-stack web development with Django, Javascript, PostgreSQL. This was a part-time position.\n" +
              " - Launched the new version of checkout and inventory system from the scratch. Took the ownership of the most parts of implementationincluding system design and led the team when we discussed about the new features.\n" +
              " - Implemented Authentication & Authorization with LDAP (lightweight directory access protocol) and achieved the secure access for UBC faculty members."
        },
        {
          title: 'Software Engineer Intern',
          company: 'PLAID, Inc.',
          img: plaid,
          type: 'Internship',
          period: '2021/05 - 2021/08',
          place: '',
          url: 'https://plaid.co.jp/',
          description: 'I worked as a Software Engineer at PLAID, which have a SaaS product called KARTE.\n' +
              ' I was hired as Intern, full-time position for three months.\n' +
              'Here is the things what I did at PLAID.\n' +
              '　- Could have a experience of software development for SaaS product.\n' +
              '　- Experienced Full-stack web development using Typescript, Vue.js and Node.js for frontend and backend.\n' +
              '　- Connected Secret Variables and Service Accounts to Kubernetes resources on the project with Terraform (IaC)\n' +
              '　- Created Post-jobs to run End-to-End test program by writing the manifest of Kubernetes and built in the CD pipeline of ArgoCD\n' +
              '　- Got used to work with Cloud Services such as SES and S3 for AWS and GKE, BigQuery, Spanner, PubSub for GCP.',
        },
        {
          title: 'Machine Learning Engineer',
          company: 'N2i, Inc.',
          img: n2i,
          type: 'Part-time',
          period: '2018/04 - 2018/10',
          place: '',
          url: 'https://n2i.jp/',
          description: 'I worked as  Machine Learning Engineer at N2i, Inc. I was employed as part-time position.\n' +
              'Here is the things what I did.\n' +
              '　- Created face recognition system using Tensorflow then deployed as a Web API using Django (Python framework).\n' +
              '　- Created image processing system using OpenCV and applied it into web application as prototype made by Django.\n' +
              '　- Did the work of data analysis and data engineering with variety of data type (image, time series, text), and applied it to Machine Learning model.',
        },
        {
          title: 'Software Engineer Intern',
          company: 'NEXT, Inc.',
          img: next,
          type: 'Part-time',
          period: '2020/07 - 2020/12',
          place: '',
          url: 'https://www.next-g.co.jp/',
          description: 'NEXT is the subsidiary of the solar system company in Japan.\n' +
              'I worked as a Software Engineer and I was employed as an part-time position.\n' +
              'Here is the things what I did at NEXT.\n' +
              '　- Developed and fixed the office admin system. The piece of code was written in Ruby on Rails.\n' +
              '　- Added new functionality of the storage part on the system. For instance, I replaced physical disk to the cloud storage service.\n' +
              '　- Dealt with deployment operation of the website on Heroku server using Docker container.\n' +
              '　- Worked on External Web API (Google API, Salesforce Rest API, etc) to implement the automatic system. The backend was using Node.js.\n',
        },
      ],
      modal: false,
      workData: null,
    }
  },
  methods: {
    openModal(work) {
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
  display: grid;
  grid-template-columns: repeat(13, 1fr);
}

.subtitle-text {
  text-align: center;
  color: black;
  grid-column: 7;
}

.subtitle > i {
  text-align: left;
  margin: 40px 5px 5px 5px;
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
</style>