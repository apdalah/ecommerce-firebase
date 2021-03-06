import Vue from "vue";
import VueRouter from "vue-router";

import AdminRoutes from "./Admin/index.js";
import mainRoutes from "./mainRoutes.js";

Vue.use(VueRouter);

const routes = [...AdminRoutes, ...mainRoutes];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
