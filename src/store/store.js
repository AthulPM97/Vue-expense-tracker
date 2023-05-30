import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

import expense from "./expense";

export const store = new Vuex.Store({
  state: {
    // expenses: [{id: 1, amount: 100, description: 'Milk shake'}],
  },
  mutations: {},
  actions: {},
  modules: {
    expense,
  },
});