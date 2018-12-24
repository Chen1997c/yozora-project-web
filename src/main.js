// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from './axios';
import VueAxios from 'vue-axios';
import 'iview/dist/styles/iview.css';
import store from './store'

Vue.prototype.request_url = require('@/common/request')
Vue.prototype.msg_modal = require('@/common/modal')
Vue.prototype.http_request = require('@/common/http')

Vue.use(VueAxios, axios)
Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
