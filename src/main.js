import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import router from "./router";
import Toastify from "vue3-toastify";
import "vue3-toastify/dist/index.css";


const app = createApp(App);
app.use(createPinia());
app.use(router);
app.use(Toastify);
app.mount("#app");
