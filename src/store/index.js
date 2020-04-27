import Vue from "vue";
import Vuex from "vuex";
import AdminStore from "./Admin";
import CategoryStore from "./Category";
import ProductStore from "./Product";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
  	AdminStore,
  	CategoryStore,
  	ProductStore,
  }
});
