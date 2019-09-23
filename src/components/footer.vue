<template>
  <div class="afooter">
    <ul>
        <li>
            <div @click="open1()">首页</div>
        </li>
        <li>
            <div @click="open2()">分类</div>
        </li>
        <li>
            <div @click="open3()">购物车</div>
        </li>
        <li>
            <div>客户服务</div>
        </li>
        <li>
            <div>我的</div>
        </li>
    </ul>
  </div>
</template>
<script>
export default {
    name:'afooter',
    data(){
        return{

        }
    },
    // created:{

    // },
    // mounted:{

    // },
    methods:{
        open1(){
            this.$router.push({ path: '/' })
            // this.$router.replace({ path: '/fenlei' })
        },
        open2(){
            this.$router.push({ path: '/fenlei' })
            // this.$router.replace({ path: '/fenlei' })
        },
        open3(){
            this.$router.push({ path: '/cart' })
        }
    }
};
</script>
<style >
    .afooter{
        position: fixed;
        bottom: 0px;
        width: 100%;
        background: #FFF;
        height: 8vh;
        line-height: 8vh
    }
     .afooter ul{
         overflow: hidden;
     }
    .afooter li{
        float: left;
        width: 20%;
        text-align: center;
    }
    
</style>