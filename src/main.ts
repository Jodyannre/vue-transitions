import { createApp } from 'vue'
import App from './App.vue'
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { BiFileCode } from "oh-vue-icons/icons";

addIcons(BiFileCode);

const app = createApp(App);
app.component("v-icon", OhVueIcon);
app.mount("#app");
