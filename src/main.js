import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import Axios from "axios";

Vue.config.productionTip = false;

Axios.defaults.baseURL = "https://api.giphy.com/v1/gifs/";

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
