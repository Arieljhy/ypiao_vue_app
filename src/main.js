import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Mint from 'mint-ui'
import BaiduMap from 'vue-baidu-map'
import 'mint-ui/lib/style.css'
import axios from 'axios'
// 自npm install px2rem-loader --save-dev适应


// import './lib/mui/css/mui.css'
// import './lib/mui/css/icons-extra.css'

import Footer from './components/footer.vue'
import Header from './components/header.vue'
 
Vue.use(Mint)

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
