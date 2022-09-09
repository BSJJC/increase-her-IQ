import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from "element-plus"
import { ElMessage } from 'element-plus'
import "element-plus/dist/index.css"
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import { createStore } from "vuex"

const app = createApp(App);
const store = createStore({

 state: {
  counter: 100
 },

 mutations: {
  test(state) {
   console.log(state.counter);
   ElMessage({
    message: 'Congrats, this is a success message.',
    type: 'success',
   })
  }
 }

});

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
 app.component(key, component)
}

app.use(ElementPlus).use(store);
app.mount("#app");