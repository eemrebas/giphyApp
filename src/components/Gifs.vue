<template>
  <div class="gifs-container">
    <div class="gifs-container__gif" v-for="gif in gifs" :key="gif.id">
      <img v-bind:src="gif.images.original.url" alt="" />
    </div>
    <div class="gifs-container__btn">
      <button class="btn" @click="loadMoreGifs" v-if="buttonVisible">
        Load More
      </button>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["keyword", "gifs", "isTrending", "buttonVisible"]),
  },

  methods: {
    loadMoreGifs() {
      // load more gifs when button clicked
      if (this.isTrending) {
        this.$store.dispatch("getTrendingGifs");
      } else {
        this.$store.dispatch("getGifsByKeyword", this.keyword);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.gifs-container {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;

  &__gif {
    width: 24%;
    height: 25rem;
    margin-bottom: 0.8rem;

    // responsive
    @media only screen and (max-width: 950px) {
      width: 32%;
      margin-bottom: 1rem;
    }
    @media only screen and (max-width: 800px) {
      width: 48%;
    }
    @media only screen and (max-width: 420px) {
      width: 100%;
    }

    img {
      width: 100%;
      height: 100%;
      background-repeat: no-repeat;
      background-size: cover;
    }
  }

  .gifs-container__btn {
    width: 100%;
    padding-top: 4rem;
    padding-bottom: 16rem;
  }
  .btn {
    color: #fff;
    background: #1583ff;
    height: 40px;
    width: 100%;
    padding: 0 1rem;
    font-size: 1.8rem;
    font-weight: 500;
    border: none;
    border-radius: 100px;
    outline: none;
    cursor: pointer;

    &:hover {
      background: #1076eb;
    }
  }
}
</style>
