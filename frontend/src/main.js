// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import "@babel/polyfill";
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App'
import router from './router'
import 'classlist-polyfill'
import 'polyfill-array-includes';
import 'es6-promise/auto'
import axios from "./plugins/customAxios";
import VueAxios from 'vue-axios';
import store from './store';
import VueAlertify from "vue-alertify"
import VueSession from 'vue-session'
import Toasted from 'vue-toasted';

Vue.use(VueAxios, axios);
Vue.use(BootstrapVue)
Vue.use(VueAlertify)
Vue.use(VueSession)
Vue.use(Toasted, {
  position: 'top-right',
  duration: 5000,
  action : {
    text : '닫기',
    onClick(e, toastObject) {
      toastObject.goAway(0);
    }
  },
});

new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
