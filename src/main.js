import Vue from 'vue'
import App from './App.vue'
import router from "./router/router.js"
import store from "./store/store.js"

Vue.config.productionTip = false

import "./assets/css/reset.css"
//使用vant-ui插件
import { Swipe, SwipeItem } from 'vant';
Vue.use(Swipe).use(SwipeItem);
import { NavBar } from 'vant';
Vue.use(NavBar);
import { Tabbar, TabbarItem } from 'vant';
Vue.use(Tabbar).use(TabbarItem);
import 'vant/lib/index.css';

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
