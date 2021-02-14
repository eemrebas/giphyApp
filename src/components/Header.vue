<template>
  <div id="header">
    <div class="header-search">
      <h1 class="header-search__title">Giphy App</h1>
      <div class="header-search__input">
        <input type="text" class="input" v-model="keyword" @input="onInput" />
      </div>
    </div>
    <div class="header-info">
      <h4 class="header-info__subtitle" v-if="isTrending">Trending Gifs</h4>
      <h4 class="header-info__subtitle" v-else>{{ keyword }} Gifs</h4>
      <p class="header-info__detail">Showing Gifs 1-{{ offset }}</p>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["offset", "isTrending"]),
  },

  data() {
    return {
      keyword: "",
      timeout: null,
    };
  },

  methods: {
    onInput() {
      if (this.keyword === "") {
        this.$store.dispatch("getTrendingGifs");
      } else {
        // Wait for the user to press a key again in 0.75seconds before get request
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          this.$store.dispatch("getGifsByKeyword", this.keyword);
        }, 750);
      }

      this.$store.commit("setButtonInvisible");
    },
  },
};
</script>

<style lang="scss" scoped>
#header {
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
}

.header-search {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 3rem;

  @media only screen and (max-width: 950px) {
    flex-direction: column;
  }

  &__title {
    font-size: 2.5rem;
    font-weight: 700;
    text-transform: uppercase;
    cursor: pointer;
  }
  &__input {
    width: 50%;

    @media only screen and (max-width: 800px) {
      width: 80%;
    }

    .input {
      width: 100%;
      border: none;
      background-color: #ebebee;
      border-radius: 100px;
      padding: 0.7rem 2rem;
      transition: all 0.2s;

      &:focus {
        outline: none;
        background-color: #e1e1e4;
      }
    }
  }
}

.header-info {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 2rem;

  // responsive
  @media only screen and (max-width: 420px) {
    flex-direction: column;
  }

  &__subtitle {
    text-transform: uppercase;
  }
}
</style>
