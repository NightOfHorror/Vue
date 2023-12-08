import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store' // Assurez-vous que vous importez le store à partir du fichier approprié
import Vuex from 'vuex';

Vue.config.productionTip = false


export default new Vuex.Store({
  state: {
    darkMode: false,
  },
  mutations: {
    toggleDarkMode(state) {
      state.darkMode = !state.darkMode;
    },
  },
  getters: {
    isDarkMode: state => state.darkMode,
  },
});

new Vue({
  router,
  store,  // Utilisez le store global ici
  render: h => h(App)
}).$mount('#app')
