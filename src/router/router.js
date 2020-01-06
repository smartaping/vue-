import Vue from 'vue'
import VueRouter from 'vue-router';

Vue.use(VueRouter)

// 创建路由对象实例

import home from "../components/home.vue"
import profile from "../components/profile.vue"
const router=new VueRouter({
    mode: 'history',
routes:[
    {path:"/home",component:home},
    {path:"/profile",component:profile},
    { path: '/', redirect: '/home' }



]
})

export default router;