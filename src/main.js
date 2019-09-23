import Vue from 'vue'
import App from './App.vue'
import axios from "axios";
// axios.defaults.baseURL = 'http://app.backstage.api.xunbaowang.net/interface/v1'
// axios.defaults.baseURL = 'http://app.backstage.api.xunbaowang.net'
// axios.defaults.baseURL = '/api'

//axios不支持Vue.use  可以添加原型使用
// Vue.prototype.$axios = axios;
// axios.defaults.headers.post['Content-Type'] = 'application/json';

import api from './api/install'
Vue.use(api)

import router from '@/router'
import store from "@/store";
import 'amfe-flexible';
import { Button, Popup, List, Cell, Card, Skeleton } from 'vant';
Vue.use(Button).use(Popup).use(List).use(Card).use(Cell).use(Skeleton);

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')

//在路由状态里判断 登录 to是到哪个页面 from是从哪个页面来的 next是方法 下一步
router.beforeEach((to, from, next) => {
    console.log(to)
    console.log(to.meta.isLogin)
    console.log(from)
    if (to.meta.isLogin) {
        if (sessionStorage.getItem('isToken')) { //有 登录
            next()
        } else {
            console.log(to.path)
            next({ //改变 路由
                path: "/login",
                query: { path: to.path }
            })
        }
        return
    }
    next()

    // console.log(form)
})