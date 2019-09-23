import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
    state: { //定义数据的
        goodsInfoId: ""
    },
    mutations: { //修改 更新 state的数据
        getInfoId(state, id) {
            state.goodsInfoId = id
        }
    },
    actions: {

    }
})