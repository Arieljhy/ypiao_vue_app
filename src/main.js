import Vue from 'vue'
import App from './App.vue'
import router from './router'

import Mint from 'mint-ui'
import BaiduMap from 'vue-baidu-map'
import 'mint-ui/lib/style.css'
import axios from 'axios'
// 自npm install px2rem-loader --save-dev适应

 //import Vuex from 'vuex'
 Vue.use(Mint)
// import './lib/mui/css/mui.css'
import bus from "./bus"
Vue.prototype.bus=bus;





 

//ps: 在子组件中通过this.$root.Bus.$on(),this.$root.Bus.$emit()来调用
// import './lib/mui/css/icons-extra.css'

import Footer from './components/footer.vue'
import Header from './components/header.vue'


 
import store from './vuex/index.js'

//  var store=new Vuex.Store({
//     state:{
//       xk_numb:23,
//       age:50,
//       list:[1,2,3,4],
//       car:"7手的QQ"
//     },  //集中保存数据
//     mutations:{
//       updataCar(state){
//         state.car="3手夏利"
//       },
//       clear(state){
//         state.age=18;
//       }
//     },//修改数据函数{{this.$store.commit(函数)}}
//     getters:{
//       get_xk_numb(state){
//         return state.xk_numb;
//       },
//       getlist(state){
//       return state.list;
//       },
//       get_car(state){
//         return state.car;
//         },
//         get_age(state){
//           return state.age;
//         }
//     },//,获取数据函数{{$store.getter.函数}}
//     actions:{
//       modifyAge:(context)=>{
//         setTimeout(()=>{
//           context.commit("clear");
//         },1500)
        
//       }
//     }//集中保存异步修改数据的函数
//  })


axios.defaults.timeout=15000;//超时响应
axios.defaults.headers.post['Content-Type']='application/x-www-form-urlencoed'
axios.defaults.withCredentials=true;//和session有关系
axios.defaults.baseURL="http://127.0.0.1:8081"
Vue.prototype.axios=axios

Vue.use(BaiduMap,{
  /* Visit http://lbsyun.baidu.com/apiconsole/key for details about app key. */
  ak:'YdyQZaclx7ONz75uGLaCmMjDsZdPhctcu'
  })

Vue.component("my-footer",Footer)
Vue.component("my-header",Header)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
