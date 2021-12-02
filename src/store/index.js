/* eslint-disable */
import Vue from "vue";
import Vuex from "vuex";

import client from "./modules/client";
import provider from "./modules/provider";
import * as getters from "./getters";

Vue.use(Vuex);


export default new Vuex.Store({
  strict: process.env.NODE_ENV !== "production",
  state: { isLoading: true },
  mutations: {
      //Use of mutation id because of performing synchrounous action
      setLoading(state, isLoading) {
            state.isLoading = isLoading;
      }
},
  actions: {},
  getters,
  modules: {
    client,
    provider
  }
});