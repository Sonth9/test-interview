import Vue from 'vue'
import App from './App.vue'
import router from "@/router";
import store from "@/store";
import "bootstrap";
import './utils/init-validation';
import "./utils/init-toast";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
