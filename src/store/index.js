import Vue from "vue";
import Vuex from "vuex";

import * as mutations from "./mutations";
import * as actions from "./actions";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    keyword: "",
    gifs: [],
    offset: 0,
    isTrending: true,
    buttonVisible: false,
  },
  mutations,
  actions,
});
