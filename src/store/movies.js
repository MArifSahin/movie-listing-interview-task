const state = {
  movies: {},
};

const getters = {
  movies: (state) => state.movies,
};

const actions = {};

const mutations = {
  SET_STORE(state, movies) {
    state.movies = movies;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
