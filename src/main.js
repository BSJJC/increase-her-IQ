import { createApp } from 'vue'
import App from './App.vue'

import ElementPlus from "element-plus"
import "element-plus/dist/index.css"
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import { ElNotification } from "element-plus";

import axios from 'axios'



const m1 = {
  namespaced: true,
  mutations: {
    IQAdd(state, increasementObj) {
      store.state.IQ_Search_Targets_Indexes = [];
      let title;

      if (increasementObj.operation_type === "minus") {
        store.state.counter.counter -= parseInt(increasementObj.iq_increasement);
        store.title = `Her IQ subtracted ${increasementObj.iq_increasement}!`
      }
      else {
        store.state.counter.counter += parseInt(increasementObj.iq_increasement);
        title = `Her IQ increased ${increasementObj.iq_increasement}!`
      }

      ElNotification({
        title: title,
        message: `It's ${store.state.counter} now!`,
        type: "success",
      });

      store.state.history.IQ_Histories.unshift(store.state.counter.counter);
      store.state.history.IQ_Histories.splice(20, 1);
    },
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

      store.commit("adder/IQAdd", increasementObj);
    }
  },

}


const m2 = {
  namespaced: true,
  state: {
    counter: 100,
  }
}


const m3 = {
  namespaced: true,

  state: {
    IQ_Histories: [],
    IQ_Search_Targets_Indexes: [],
  }
}



import { createStore } from "vuex"

const app = createApp(App);
const store = createStore({

  getters: {
    SearchValue: state => target => {
      state.IQ_Search_Targets_Indexes = [];
      if (target.length === 0) return

      store.history.state.IQ_Histories.forEach((iq, index) => {
        if (String(iq).includes(target)) {
          state.IQ_Search_Targets_Indexes.push(index)
        }
      });
    }
  },


  modules: {
    adder: m1,
    counter: m2,
    history: m3
  }

});

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(ElementPlus).use(store);
app.mount("#app");
