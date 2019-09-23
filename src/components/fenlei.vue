
<template>
  <div class="home">
    <div>分类</div>
    <div class="tab-box">
      <div :class="{'bgRed':index==1}" @click="changedata(1)">Tab1</div>
      <div :class="{'bgRed':index==2}" @click="changedata(2)">Tab2</div>
    </div>
    <div v-show="index == 1">
      <keep-alive >
      <van-list
        class="boutique-ul"
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="getList"
      >
        <van-cell v-for="item in boutiqueList" :key="item.id">
          <van-card
            :price="item.price"
            :title="item.name"
            :thumb="$api.common.getImgUrl(item.thumbnail)"
          />
        </van-cell>
      </van-list>
    </keep-alive>
    </div>
    <div v-show="index == 2">
      我是tab2的内容
    </div>
    <afooter></afooter>
  </div>
</template>
<script>
import afooter from "./footer";
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
      isgo: true,
      index: 1
    };
  },
  components: {
    afooter
  },
  methods: {
    getList() {
      if (this.page >= this.max_page) {
        return;
      } else {
        this.page++;
        console.log(this.page);
        // 加载状态结束
        this.loading = true;
      }
      var params = {
        page: this.page,
        limit: 10
      };

      this.$api.matches.homeBoutique(params).then(ress => {
        this.loading = false;
        console.log(ress);
        this.boutiqueList = this.boutiqueList.concat(ress.data.items);
        this.page = ress.data.page;
        this.max_page = ress.data.max_page;
        // 数据全部加载完成
        if (this.page >= this.max_page) {
          this.finished = true;
          this.loading = false;
        }
      });
    },
    changedata(pages) {
      this.index = pages;
    }
  }
};
</script>
<style>
.tab-box {
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  background: #ffffff;
  z-index: 1;
}
.bgRed {
  background: red;
}
</style>