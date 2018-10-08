import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'

import IndexPage from '../components/Index'

import NotFound from '../components/NotFound.vue'

Vue.use(Router)
export default new Router({
  mode: "history",
  routes: [
    { path: '*', component: NotFound },
    { path: '/', component: IndexPage },
  ]
})