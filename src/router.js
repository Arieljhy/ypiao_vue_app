import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/index.vue'
import Recommond from './views/recommond.vue'
import Shopcart from './views/shopcart.vue'
import Message from './views/message_list.vue'
import Messagedetail from './components/message_detail.vue'
import Order from './views/order.vue'
import Wdsz from './views/wd-sz.vue'
import Personal from './views/personal.vue'
import City from './components/city_selector.vue'
import Map from './components/mapview.vue'

import Login from './views/login.vue'
import Register from './views/register.vue'




import Exam06 from './components/exam06'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Index
    },{
      path: '/recommond',
      name: 'recommond',
      component: Recommond
    },
    {
      path: '/shopcart',
      name: 'shopcart',
      component: Shopcart
    },{
      path: '/personal',
      name: 'personal',
      component: Personal
    },{
      path: '/city',
      name: 'city',
      component: City
    },{
      path: '/map',
      name: 'map',
      component: Map
    },{
      path: '/message',
      name: 'message',
      component: Message
    },{
      path: '/message_detail',
      name: 'messagedetail',
      component: Messagedetail
    }
    ,{
      path: '/order',
      name: 'order',
      component: Order
    },
    {
      path: '/wdsz',
      name: 'wdsz',
      component: Wdsz
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {path:'/exam06',component:Exam06}
  ]
})
