import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
import Tasks from "./modules/tasks";

export default new Vuex.Store({
  modules: {
    tasks: Tasks,
  },
  state: {},
  getters: {},
  mutations: {},
});
