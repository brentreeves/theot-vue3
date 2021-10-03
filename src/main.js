import { createApp } from "vue";
import Vue from "vue";
import App from "./App.vue";
// import store from "./store";

import router from "./router";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

Vue.config.productionTip = false;

createApp(App).use(router).mount("#app");

// new Vue({
//   store,
//   render: (h) => h(App),
// }).$mount("#app");
