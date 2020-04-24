import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "@/firebase/index";
import globalComponents from "@/components/Shared/globalComponents.js";

Vue.config.productionTip = false;

// to call firebase direct from anywhere in the application
//Vue.prototype.firebase = firebase;

globalComponents.forEach(component => {

	Vue.component(component.name, component);
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
