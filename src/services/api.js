/* eslint-disable */
import axios from 'axios';
import VueAxios from "vue-axios";
import Vue from "vue";

Vue.use(VueAxios, axios);
Vue.axios.defaults.baseURL = "http://localhost:3000/";
Vue.axios.defaults.headers["Content-type"] = "application/json";
const apiService = {

  query(resource, params) {
    return Vue.axios.get(resource, params);
  },

  get(resource, slug = "") {
    return Vue.axios.get(`${resource}/${slug}`);
  },

  post(resource, params, headers) {
    return Vue.axios.post(`${resource}/`, params, headers);
  },

  update(resource, slug, params) {
    return Vue.axios.put(`${resource}/${slug}`, params);
  },

  put(resource, params) {
    return Vue.axios.put(`${resource}`, params);
  },

  delete(resource) {
    return Vue.axios.delete(resource);
  },

  patch(resource, slug, params) {
    return Vue.axios.patch(`${resource}/${slug}/`, params);
  },

  patches(resource, params, headers) {
    return Vue.axios.patch(`${resource} /`, params, headers);
  }

};

  export { apiService };
