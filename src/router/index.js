import Vue from 'vue'
import Router from 'vue-router'
import iview from 'iview'
import store from '../store'

import request_url from '@/common/request'

import home from '@/components/home/container'
import admin from '@/components/admin/container'

import adminLogin from '@/components/admin/content/passport/login';

import adminIndex from '@/components/admin/content/index';

import homeMainContent from "@/components/admin/content/home/mainContent";
import homeTagContent from "@/components/admin/content/home/tagContent";
import homeCarousel from "@/components/admin/content/home/carousel";
import Axios from 'axios';

Vue.use(Router)
Vue.use(iview)

if (localStorage.getItem('token')) {
  store.commit('setToken', localStorage.getItem('token'))
}


const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {
        title: '首页',
      },
      component: home
    },
    {
      path: '/admin',
      name: 'admin',
      component: admin,
      children: [
        {
          path: '',
          meta: {
            title: 'admin-首页',
            requireAuth: true
          },
          component: adminIndex
        },
        {
          path: 'login',
          meta: {
            title: '登录',
          },
          component: adminLogin
        },
        {
          path: 'home-main',
          meta: {
            title: '主页内容',
            requireAuth: true
          },
          component: homeMainContent
        },
        {
          path: 'home-tag',
          meta: {
            title: '主页附加内容',
            requireAuth: true
          },
          component: homeTagContent
        },
        {
          path: 'home-carousel',
          meta: {
            title: '主页轮播图',
            requireAuth: true
          },
          component: homeCarousel
        },
      ]
    },
  ]
})


router.beforeEach((to, from, next) => {
  iview.LoadingBar.start();
  if (to.meta.title) {
    document.title = to.meta.title
  }
  //token验证
  if (to.matched.some(r => r.meta.requireAuth)) {
    if (store.state.token) {
      Axios({
        method: 'get',
        url: request_url.token.checkToken(),
        params: {
          token: store.state.token
        },
        headers: {
          Authorization: "Basic d2ViYXBwOndlYmFwcA==",
        }
      }).then(() => {
        next();
      }).catch(() => {
        iview.Message.error("认证信息已经失效！");
        store.commit('delToken')
        if (to.fullPath.indexOf("admin") != -1) {
          next({
            path: '/admin/login',
            query: { redirect: to.fullPath }
          })
        } else {
          next({
            path: '/',
            query: { redirect: to.fullPath }
          })
        }
      })
    }
    else {
      if (to.fullPath.indexOf("admin") != -1) {
        next({
          path: '/admin/login',
          query: { redirect: to.fullPath }
        })
      } else {
        next({
          path: '/',
          query: { redirect: to.fullPath }
        })
      }
    }
  }
  else {
    next();
  }
});

router.afterEach(route => {
  iview.LoadingBar.finish();
});


export default router