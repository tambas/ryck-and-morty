import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import player from './player'

import './assets/styles/app.styl';

Vue.config.productionTip = false

player.setup();

store.subscribe((mutation, state) => {
  localStorage.setItem('store', JSON.stringify(state));
});

new Vue({
  router,
  store,
  render: function (h) {
    return h(App)
  },
  beforeCreate() {
    this.$store.commit('initialiseStore');
  }
}).$mount('#app')
