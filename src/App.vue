<template>
  <div id="app">
    <Header></Header>
    <Gifs></Gifs>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Gifs from "./components/Gifs.vue";

import { mapState } from "vuex";

export default {
  name: "App",
  computed: {
    ...mapState(["keyword", "isTrending", "buttonVisible"]),
  },

  components: {
    Header,
    Gifs,
  },

  methods: {
    loadMore() {
      let bottomOfWindow =
        document.documentElement.scrollTop + window.innerHeight ===
        document.documentElement.offsetHeight;

      // if the user scrolled to bottom and if button is invisible
      if (bottomOfWindow && !this.buttonVisible) {
        if (this.isTrending) {
          this.$store.dispatch("getTrendingGifs");
        } else {
          this.$store.dispatch("getGifsByKeyword", this.keyword);
        }

        this.$store.commit("setButtonVisible");
      }
    },
  },

  created() {
    this.$store.dispatch("getTrendingGifs");
    window.addEventListener("scroll", this.loadMore);
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%; // 1rem = 10px
}

body {
  background: #282c34;
}

#app {
  max-width: 104rem;
  width: 100%;
  margin: 3rem auto;
  margin-bottom: 0;
  padding: 0 2rem;
}
</style>
