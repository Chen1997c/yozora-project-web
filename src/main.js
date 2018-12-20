// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'iview/dist/styles/iview.css';
import iview from 'iview'
import axios from 'axios';
import VueAxios from 'vue-axios';

import vButton from './components/common/button'

Vue.prototype.request_url = require('./common/request')
Vue.prototype.message = require('./common/message')
Vue.prototype.msg_modal = require('./common/modal')
Vue.prototype.http_request = require('./common/http')

Vue.component('v-button', vButton);

Vue.use(iview)
Vue.use(VueAxios, axios)

router.beforeEach((to, from, next) => {
  //判断是否有标题
  if (to.meta.title) {
    document.title = to.meta.title
  }
  iview.LoadingBar.start();
  next();
});

router.afterEach(route => {
  iview.LoadingBar.finish();
});


Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
