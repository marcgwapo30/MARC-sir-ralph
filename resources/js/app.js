import "./bootstrap";

import { createApp } from "vue";
import App from "./src/App.vue";
import router from "./src/router/index";
import ToastPlugin from "vue-toast-notification";
import "vue-toast-notification/dist/theme-bootstrap.css";
import { createPinia } from "pinia";
import "bootstrap/dist/css/bootstrap.css";
import HomePage from "./src/pages/HomePage.vue";
import Error from "./src/components/Error.vue";
import BaseBtn from "./src/components/BaseBtn.vue";
import BaseInput from "./src/components/BaseInput.vue";
import { Bootstrap5Pagination } from "laravel-vue-pagination";
import VueApexCharts from "vue3-apexcharts";

import "@css/style.css";
import "@css/app.css";

createApp(App)
    .use(router)
    .use(createPinia())
    .use(ToastPlugin)
    .use(VueApexCharts)
    .component("Error", Error)
    .component("BaseBtn", BaseBtn)
    .component("BaseInput", BaseInput)
    .component("Bootstrap5Pagination", Bootstrap5Pagination)
    .mount("#app");
