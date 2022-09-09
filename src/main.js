import { createApp } from 'vue'
import App from './App.vue'

import ElementPlus from "element-plus"
import "element-plus/dist/index.css"
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import { ElNotification } from "element-plus";

import axios from 'axios'

import { createStore } from "vuex"

const app = createApp(App);
const store = createStore({

  state: {
    counter: 100,

    IQ_Histories: [],
    IQ_Search_Targets_Indexes: []
  },

  mutations: {
    IQAdd(state, increasementObj) {
      state.IQ_Search_Targets_Indexes = [];
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

      store.commit("SaveIQToHistories", state.counter)
    },

    SaveIQToHistories(state, IQ) {
      state.IQ_Histories.unshift(IQ);
      state.IQ_Histories.splice(20, 1);
    }
  },

  actions: {
    async GetRandomNumber() {
      let randomNumber = 0;
      await axios.get("http://www.randomnumberapi.com/api/v1.0/random?min=-1000&max=1000&count=1")
        .then(res => {
          randomNumber = res.data[0];
        })
        .catch(err => {
          console.error(err);
        })

      const increasementObj = {
        iq_increasement: randomNumber,
        operation_type: "plus"
      }

      console.log(randomNumber);

      store.commit("IQAdd", increasementObj);
    }
  },

  getters: {
    SearchValue: (state) => (target) => {
      state.IQ_Search_Targets_Indexes = [];
      if (target.length === 0) return

      state.IQ_Histories.forEach((iq, index) => {
        if (String(iq).includes(target)) {
          state.IQ_Search_Targets_Indexes.push(index)
        }
      });
    }
  }

});

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(ElementPlus).use(store);
app.mount("#app");