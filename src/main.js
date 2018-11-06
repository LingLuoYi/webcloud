// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'font-awesome/css/font-awesome.min.css'
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import axios from 'axios'
import VueResource from 'vue-resource'
import Index from '@/components/Index'
import Login from '@/components/Login'
import Rejester from '@/components/Rejester'
import OPI from '@/components/OPI'
import Contact from '@/components/contact'
import About from '@/components/about'
import Questions from '@/components/questions'
import mycount from '@/components/mycount'
import myorder from '@/components/myorder'
import savecenter from '@/components/savecenter'
Vue.use(VueResource)
Vue.use(VueRouter)
Vue.use(ElementUI)
axios.defaults.withCredentials = true
Vue.prototype.$ajax = axios
Vue.config.productionTip = false
require('es6-promise').polyfill()
/* eslint-disable no-new */
const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/Rejester',
      name: 'Rejester',
      component: Rejester
    },
    {
      path: '/OPI',
      name: 'OPI',
      component: OPI
    },
    {
      path: '/Contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/About',
      name: 'About',
      component: About
    },
    {
      path: '/Questions',
      name: 'Questions',
      component: Questions
    },
    {
      path: '/Reset',
      name: 'Reset',
      meta: {
        requireAuth: true // 判断是否需要登录
      },
      component: resolve => require(['@/components/Reset'], resolve)
    },
    {
      path: '/Personal',
      name: '个人中心',
      children: [
        {path: '/myorder', component: myorder, name: '我的订单'},
        {path: '/mycount', component: mycount, name: '我的账户'},
        {path: '/savecenter', component: savecenter, name: '安全中心'}
      ],
      meta: {
        requireAuth: true // 判断是否需要登录
      },
      component: resolve => require(['@/components/personal-center'], resolve)
    },
    {
      path: '/Detail',
      name: 'Detail',
      meta: {
        requireAuth: true // 判断是否需要登录
      },
      component: resolve => require(['@/components/Detail'], resolve),
      props: true
    },
    {
      path: '/Order',
      name: 'Order',
      component: resolve => require(['@/components/Order'], resolve)
    },
    {
      path: '/heyue',
      name: 'heyue',
      component: resolve => require(['@/components/Heyue'], resolve)
    },
    {
      path: '/Uporder',
      name: 'Uporder',
      component: resolve => require(['@/components/Uporder'], resolve)
    }
  ]
})

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
