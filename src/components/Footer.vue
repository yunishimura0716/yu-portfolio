<template>
  <v-footer
      dark
      padless
  >
    <v-card
        flat
        tile
        class="indigo lighten-1 white--text text-center"
    >
      <v-card-text>

        <v-btn
            v-for="icon in icons"
            :key="icon.name"
            class="mx-4 white--text"
            icon
            :href="icon.link"
        >
          <v-icon size="24px">
            {{ icon.name }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text id="footer-body" class="white--text pt-0">
        If you are Interested in my profile, please contact me.
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>Yu Nishimura</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    icons: [
      { name: 'mdi-email', link: 'mailto:ynjpprof@gmail.com' },
      { name: 'mdi-facebook', link: 'https://www.facebook.com/profile.php?id=100025156084045' },
      { name: 'mdi-twitter', link: 'https://twitter.com/yunishi_jp' },
      { name: 'mdi-linkedin', link: 'https://www.linkedin.com/in/yu-nishimura-489b351b2/' },
      { name: 'mdi-github', link: 'https://github.com/yunishimura0716' },
    ],
  }),
}
</script>

<style scoped>
.indigo {
  width: 100%;
}

#footer-body {
  font-size: 28px;
  padding-bottom: 50px;
}

.v-btn--icon {
  width: 70px !important;
  height: 70px !important;
}

.v-icon {
  font-size: 35px !important;
}
</style>