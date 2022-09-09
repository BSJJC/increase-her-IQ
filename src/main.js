import { createApp } from 'vue'
import App from './App.vue'

import ElementPlus from "element-plus"
import "element-plus/dist/index.css"
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import { ElNotification } from "element-plus";

import { createStore } from "vuex"

const app = createApp(App);
const store = createStore({

 state: {
  counter: 100,

  IQ_Histories: []
 },

 mutations: {
  IQ_Add(state, increasementObj) {
   let title;

   if (increasementObj.operation_type === "minus") {
    state.counter -= parseInt(increasementObj.iq_increasement);
    title = `Her IQ subtracted ${increasementObj.iq_increasement}!`
   }
   else {
    state.counter += parseInt(increasementObj.iq_increasement);
    title = `Her IQ increased ${increasementObj.iq_increasement}!`
   }

   ElNotification({
    title: title,
    message: `It's ${state.counter} now!`,
    type: "success",
   });
  }
 }

});

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
 app.component(key, component)
}


app.use(ElementPlus).use(store);
app.mount("#app");