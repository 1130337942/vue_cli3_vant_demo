import Vue from 'vue'
import Router from 'vue-router'

// import home from '@/components/home'
// import fenlei from '@/components/fenlei'
// import cart from '@/components/cart'
// import login from '@/components/login'
// import goodsInfo from '@/components/goodsInfo'

// const home = () =>
//     import ('@/components/home')

Vue.use(Router)

//防止路由跳转报错
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}



let router = new Router({
    mode: 'history', // 默认路由是hash模式(就是带有/#/符号)，history是 / 符号模式
    routes: [{
        path: '/', //将根路径指向home（下面的home路由就没什么用了）
        // component: home //渲染组件 home.vue
        component: () =>
            import ('@/components/home') //模块加载
    }, {
        path: '/fenlei',
        // component: fenlei
        component: () =>
            import ('@/components/fenlei')
    }, {
        path: '/cart',
        // component: cart,
        component: () =>
            import ('@/components/cart'),
        name: 'cart',
        meta: {
            isLogin: true
        }
    }, {
        path: '/login',
        // component: login,
        component: () =>
            import ('@/components/login'),
    }, {
        path: '/goodsInfo',
        // component: goodsInfo
        component: () =>
            import ('@/components/goodsInfo'),
    }]
})

/* 要把router实例 暴露出去 */
export default router;