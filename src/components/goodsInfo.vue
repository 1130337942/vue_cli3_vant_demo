<template >
  <div>
    <div>商品详情</div>
    <!-- <van-skeleton
        title
        avatar
        :row="3"
        :loading="loading"
        >
        <div>实际内容</div>
    </van-skeleton> -->
    <hr />
    <!-- 拍卖会列表   -->
    <van-list
        class="boutique-ul"
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="getList"
    >
      <div class="adiv" v-for="item in auctionList" :key="item.id" >
        <!-- <van-card
          :price="item.price"
          :title="item.name"
          :thumb="$api.common.getImgUrl(item.thumbnail)"
        /> -->
        <div>{{item.name}}</div>
        <div>机构名字{{}}</div>
        <img src="" alt="">

      </div>
    </van-list>
    <footer>
      <div>加入购物车</div>
      <div>立即购买</div>
    </footer>
  </div>
</template>
<script>
import axios from 'axios'
import { constants } from 'crypto';
export default {
    data(){
        return{
            loading: false,
            // loading: true,
            finished: false,
            auctionList:[],
            orgIdArr:[],
            orgDataObj:{}
        }
    },
    created() {
        this.setDataFn()
        console.log(this.$store.state.goodsInfoId);
       
    },
    methods: {
        getList(){
            // var parmas = {
            //     page: 1,
            //     fettle: 0
            // }
            // this.$api.matches.getAuctionList(parmas).then(res=>{
            //     console.log(res)
            //     this.loading = false
            //     this.auctionList = res.data.items;
            //     this.setDataFn()
            //      if(this.auctionList.length >= 5){
              
            //         this.finished = true;
            //         this.loading = false;
            //     }
            // }).catch(error=>{

            // })
        },
        //机构数据存储
        setDataFn(){
             const that = this
            // // console.log(this.auctionList)
            // var isObj = {}
            // for (var i = 0; i < this.auctionList.length; i++) {
            //     var oId = this.auctionList[i].organization_id;
            //     if (!isObj[oId]) {
            //         this.orgIdArr.push(oId)
            //         isObj[oId] = 1
            //     }
            //     var gId = this.auctionList[i].id;
            //     // this.goodsListFn(gId, i)
            // };
            // for (var a = 0; a < this.orgIdArr.length; a++) {
            //     var thisObj = this.orgIdArr[a]
            //     this.getOrgFn(thisObj)
            // };
            // // console.log(this.auctionList)

            // --------------同步请求
            console.log(constants)
            var parmas1 ={
                organization_id:1
            }
            function getOrg(){
                return that.$api.matches.organizationInfo(parmas1)
            //   return axios.get('/api/interface/v1/auction/organization/info/',{params:parmas1})
            }
            var parmas2 = {
                auctions_id: 9,
            }
            function getGoodList(){
                return that.$api.matches.AuctionsGoodsList(parmas2)
            //   return axios.get('/api/interface/v1/auction/auctions/goods/list/',{params:parmas2})
            }
            axios.all([getOrg(), getGoodList()])
            .then(axios.spread(function (getOrg, perms) {
                console.log(getOrg)
                console.log(perms)
                // 两个请求现在都执行完成
            }));
        },
        //机构
        getOrgFn(thisObj) {

            // $.ajax({
            //     type: "GET",
            //     url: $config.getOrganizationInfo,
            //     data: {
            //         organization_id: thisObj
            //     },
            //     dataType: "json",
            //     success: function(res) {
            //         this.orgDataObj[thisObj] = res.data
            //         for (var i = 0; i < this.auctionList.length; i++) {
            //             var thisList = this.auctionList[i]
            //             Vue.set(app.auctionList[i], 'organizationData', this.orgDataObj[thisList.organization_id])
            //                 // thisList.organizationData = this.orgDataObj[thisList.organization_id]
            //         }
            //     }
            // });
            var parmas = {
               organization_id: thisObj
            }
            // this.$api.matches.organizationInfo(parmas).then(res=>{
            //     console.log(res)
            // //    this.loading = false
            //     // this.orgDataObj[thisObj] = res.data
            //     // for (var i = 0; i < this.auctionList.length; i++) {
            //     //     var thisList = this.auctionList[i]
            //     //     // Vue.set(app.auctionList[i], 'organizationData', this.orgDataObj[thisList.organization_id])
            //     //         // thisList.organizationData = this.orgDataObj[thisList.organization_id]
            //     // }
            // //    this.finished = true;
            // // if(this.auctionList.length >= 5){
              
            // //         this.finished = true;
            // //         this.loading = false;
            // //     }
            // }).catch(error=>{

            // })

            
        },
    }
};
</script>
<style  scoped>
footer {
  position: fixed;
  bottom: 0px;
  width: 100%;
  background: #fff;
  height: 8vh;
  line-height: 8vh;
  display: flex;
}
.adiv{
    height: 200px;
}
</style>
