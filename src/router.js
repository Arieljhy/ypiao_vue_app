import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/index.vue'
import Recommond from './views/recommond.vue'
import Shopcart from './views/shopcart.vue'
import Message from './views/message_list.vue'
import Messagedetail from './components/message_detail.vue'
import Order from './views/order.vue'

import Personal from './views/personal.vue'
import Wdsz from './views/wd-sz.vue'
import Upwdupdata from './views/upwd_updata.vue'
import Address from './views/address.vue'
import Add_address from './views/add_address.vue'


import City from './components/city_selector.vue'

import Map from './components/mapview.vue'

import Login from './views/login.vue'
import Register from './views/register.vue'

import Ticket from './components/ticket.vue'
import Ticket_detial from './views/ticket_detial.vue'
import Yc_detial from './views/yc_detial.vue'
import Order_identify from './views/order_identify.vue'
import Search from './views/search.vue'
import Share from './components/bshare.vue'


import FilterBarTest from './views/FilterBarTest'
import A from './components/vuex/A.vue'
import B from './components/vuex/B.vue'
import Exam06 from './components/exam06'

Vue.use(Router)

export default new Router({
  routes: [
    // list是我们的搜索结果页面
    // {      
    //   path: '/list',  
    //   name: 'List',      
    //   component: resolve => require(['@/pages/list'], resolve),    
    //   meta: {        
    //       isUseCache: false,  // 这个字段的意思稍后再说      
    //       keepAlive: true  // 通过此字段判断是否需要缓存当前组件  
    //   }    
    // },
    {
      path: '/',
      name: 'index',
      component: Index,
      meta:{
        keepAlive:true
      }
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
      path: '/upwdupdata',
      name: 'upwdupdata',
      component: Upwdupdata
    },
    {
      path: '/address',
      name: 'address',
      component: Address
    },
    {
      path: '/add_address',
      name: 'add_address',
      component: Add_address
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
    {
      path: '/ticket',
      name: 'ticket',
      component: Ticket
    },
    {//详情页  主页点击商品进来
      path: '/ticket_detial',
      name: 'ticket_detial',
      component: Ticket_detial,
      meta:{       
        keepAlive:true  // 需要缓存  
      }

    },
    {//从详情页 点击购买 进入订单确认页面
      path: '/order_identify',
      name: 'order_identify',
      component: Order_identify,
      meta:{       
        keepAlive:true  //  需要缓存  
      }
    },
    {
      path: '/more_yc',
      name: 'more_yc',
      component: Yc_detial
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/share',
      name: 'share',
      component: Share
    },
   
    {
      path: '/flbt',
      name: 'flbt',
      component: FilterBarTest
    },
    
    
    {path:'/A',component:A},
    
    {path:'/B',component:B},
    {path:'/exam06',component:Exam06}
  ]
  //,
  // mode: 'history',
  // scrollBehavior (to, from, savedPosition) {
  //   if (savedPosition) {
  //     return savedPosition
  //   } else {
  //     return { x: 0, y: 0 }
  //   }
  // }
})
