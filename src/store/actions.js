import Axios from "axios";

import { trendingGifsURL, gifsByKeywordURL } from "../endpoints";

export const getTrendingGifs = ({ commit, state }) => {
  if (!state.isTrending) {
    commit("setAllStates");
  }

  Axios.get(trendingGifsURL + state.offset)
    .then((response) => {
      commit("setGifs", response.data.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getGifsByKeyword = ({ commit, state }, keyword) => {
  if (state.isTrending) {
    commit("setAllStates", keyword);
  }

  Axios.get(gifsByKeywordURL + keyword + "&offset=" + state.offset)
    .then((response) => {
      commit("setGifs", response.data.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
