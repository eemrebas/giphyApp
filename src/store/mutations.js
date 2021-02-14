export const setGifs = (state, payload) => {
  state.gifs.push(...payload);
  state.offset += 20;
};

export const setAllStates = (state, payload = null) => {
  state.keyword = payload;
  state.gifs = [];
  state.offset = 0;
  state.isTrending = !state.isTrending;
};

export const setButtonVisible = (state) => {
  state.buttonVisible = true;
};

export const setButtonInvisible = (state) => {
  state.buttonVisible = false;
};
