import { createApp } from 'vue'
import App from './App.vue'

import ElementPlus from "element-plus"
import "element-plus/dist/index.css"

import { createStore } from "vuex"


const app = createApp(App);


const store = createStore({});


app.use(ElementPlus).use(store);

app.mount("#app");