import Vue from 'vue'
import Router from 'vue-router'

import home from '@/components/home/container'
import admin from '@/components/admin/container'

import adminLogin from '@/components/admin/content/passport/login';

import homeMainContent from "@/components/admin/content/home/mainContent";
import homeTagContent from "@/components/admin/content/home/tagContent";
import homeCarousel from "@/components/admin/content/home/carousel";

Vue.use(Router)

export default new Router({
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
      meta: {
        title: '后台管理',
      },
      component: admin,
      children: [
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
          },
          component: homeMainContent
        },
        {
          path: 'home-tag',
          meta: {
            title: '主页附加内容',
          },
          component: homeTagContent
        },
        {
          path: 'home-carousel',
          meta: {
            title: '主页轮播图',
          },
          component: homeCarousel
        },
      ]
    },
  ]
})
