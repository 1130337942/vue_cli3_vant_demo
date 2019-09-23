<template>
  <div class="home">
    <div>首页</div>
    <div>最新精品</div>
    <button @click="isZizujianShowFn()">显示子组件(通过组件之间的双向绑定-让子组件改变父组件的值)</button>
    <!-- 子组件 -->
    <!-- 在行间里 使用了烤串命名法。要在方法使用的时候转成驼峰命名 -->
    <!-- :Fshuangxiang.sync="isZizhujianShow" 还可以用v-model="isZizhujianShow 组件之间的双向绑定" -->
    <Zizhujian
      v-model="isZizhujianShow"
      v-show="isZizhujianShow"
      Fmsg="我是父组件传的值"
      @is-click="emitFn"
      @is-chuanzhi="emitFn2"
    />

    <!-- <Zizhujian 
    :Fshuangxiang.sync="isZizhujianShow" 
    v-show="isZizhujianShow" 
    Fmsg="我是父组件传的值" 
    @is-click="emitFn"  
    @is-chuanzhi="emitFn2"/>-->

    <div :style="{background:isred?'red':''}">通过子组件改变我的bg颜色</div>
    <!-- <div v-show="isMagShow">{{msg}}</div> -->
    <div>{{msg}}</div>
    <hr />
    <!-- <ul class="boutique-ul">
      <li v-for="(item) in boutiqueList" :key="item.id" @click="openGoodsInfo(item.id)">
        <img class="list-img" :src="$api.common.getImgUrl(item.thumbnail)" alt />
        <div>
          <p class>{{item.name}}</p>
          <p class>￥{{item.price}}</p>
        </div>
      </li>
    </ul>-->
    <van-list
      class="boutique-ul"
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="getList"
    >
      <van-cell v-for="item in boutiqueList" :key="item.id" @click="openGoodsInfo(item.id)">
        <van-card
          :price="item.price"
          :title="item.name"
          :thumb="$api.common.getImgUrl(item.thumbnail)"
        />
      </van-cell>
    </van-list>
    <afooter></afooter>
  </div>
</template>
<script>
import afooter from "./footer.vue";
import Zizhujian from "./zizhujian.vue";
import { setTimeout } from "timers";
import axios from "axios";
import { constants } from "crypto";
export default {
  name: "home",
  data() {
    return {
      // sad:'dsadsadsa',
      // isArray:['a','b']
      boutiqueList: [],
      isred: false,
      msg: "",
      isMagShow: false,
      isZizhujianShow: false,

      loading: false,
      finished: false,
      page: 0,
      max_page: 1,
      isgo: true
    };
  },
  components: {
    afooter,
    Zizhujian
  },
  created() {
    // this.$axios.get("/api/?json=true/").then(res=>{
    //             console.log(res)
    //             // var token = res.data.data.token
    //             // console.log(token)
    //             // localStorage.setItem('token',token);
    //             // console.log(localStorage.token)
    //         }).catch(error=>{
    //             console.log(error)
    //         })
    // this.getList();
  },
  methods: {
    getList() {
      // console.log(res);
      console.log(123);
      if (this.page >= this.max_page) {
        return;
      } else {
        this.page++;
        // 加载状态
        this.loading = true;
      }
      var params = {
        page: this.page,
        limit: 10
      };
      // let res =  this.$api.matches.homeBoutique(params);
      // console.log(res);
      // this.$api.matches.homeBoutique(params).then(ress =>{
      //   console.log(ress)
      // })

      this.$api.matches.homeBoutique(params).then(ress => {
        this.loading = false;
        console.log(ress);
        this.boutiqueList = this.boutiqueList.concat(ress.data.items);
        this.page = ress.data.page;
        this.max_page = ress.data.max_page;
        console.log(this.page);
        console.log(this.max_page);
        // 数据全部加载完成
        if (this.page >= this.max_page) {
          this.finished = true;
          this.loading = false;
        }
      });

      // ------------------------------
      // axios
      //   .get(
      //     "/api/interface/v1/commodity/home/boutique/list/",
      //     {params:{
      //       page: this.page,
      //       limit: 10
      //     }}
      //   )
      //   .then(res => {
      //     console.log(res);
      //     this.loading = false;
      //     this.boutiqueList = this.boutiqueList.concat(res.data.data.items);

      //     this.page = res.data.data.page;
      //     this.max_page = res.data.data.max_page;
      //     // 数据全部加载完成
      //     if (this.page >= this.max_page) {
      //       this.finished = true;
      //       this.loading = false;
      //     }
      //   })
      //   .catch(error => {
      //     console.log(error);
      //   });
    },
    openGoodsInfo(id) {
      this.$store.commit("getInfoId", id);
      this.$router.push({ path: "/goodsInfo" });
    },
    emitFn() {
      this.isred = !this.isred;
    },
    emitFn2(data) {
      this.msg = data;
      // this.isMagShow = !this.isMagShow
    },
    isZizujianShowFn() {
      this.isZizhujianShow = true;
    }
  }
};
</script>
<style  scoped>
.boutique-ul {
  padding-bottom: 55px;
}
.boutique-ul li {
  overflow: hidden;
  width: 100%;
  margin-bottom: 1vh;
}
.boutique-ul li .list-img,
.boutique-ul li div {
  float: left;
}

.list-img {
  width: 20vw;
  height: 20vw;
}
</style>