<template>
  <md-toolbar
    id="toolbar"
    class="md-medium md-absolute"
    md-elevation="3"
  >
    <h3
      class="md-title"
      v-wave="{
        color: 'currentColor',
        easing: 'ease-out',
        duration: 0.4,
        initialOpacity: 0.2,
        finalOpacity: 0.1,
        cancellationPeriod: 75
      }"
    >
      Yu Portfolio
    </h3>
    <div class="md-collapse">
      <div class="md-collapse-wrapper">
        <md-list-item
          v-for="(content) in buttonContents"
          :key="content"
          v-wave="{
            color: 'currentColor',
            easing: 'ease-out',
            duration: 0.4,
            initialOpacity: 0.2,
            finalOpacity: 0.1,
            cancellationPeriod: 75
          }"
        >{{ content }}
        </md-list-item>
      </div>
    </div>
  </md-toolbar>
</template>

<script>
export default {
  name: "ToolBarVue",
  data() {
    return {
      buttonContents: [
          "About", "My Career", "Education", "Projects"
      ]
    }
  },
  methods: {
    buttonClass(idx) {
      return "toolbar-button" + (idx + 1);
    }
  }
}
</script>

<style lang="css" scoped>
#toolbar {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  background-color: rgba(0,0,255,0.5) !important;
}
#toolbar > h3 {
  text-align: center;
  grid-column: 1 / 3;
  margin-right: auto;
  margin-left: auto;
  cursor: pointer;
  cursor: hand;
}
#toolbar > .md-collapse {
  text-align: center;
  align-items: center;
  grid-column: 3 / span 5;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}
#toolbar > .md-collapse > .md-collapse-wrapper {
  grid-column: 1 / span 4;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}

.md-list-item {
  cursor: pointer;
  cursor: hand;
}
md-list-item {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
}

md-list-item > p {

}

</style>

<style lang="sass">
@import "~vue-material/dist/theme/engine"

@include md-register-theme("default", (primary: md-get-palette-color(black, A200), theme: dark))

@import "~vue-material/dist/theme/all"
</style>