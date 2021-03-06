import Vue from 'vue';
import Vuex from 'vuex';
import movies from './movies.js';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    movies,
  },
});
