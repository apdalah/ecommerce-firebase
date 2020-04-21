import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import globalComponents from "@/components/Shared/globalComponents.js";

Vue.config.productionTip = false;
globalComponents.forEach(component => {

	Vue.component(component.name, component);
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
