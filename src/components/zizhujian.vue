<template>
    <div class="zizujian">
      我是子组件  （相当于弹框）
      <div style="background:rgb(191, 121, 247)">{{Fmsg}}</div>
      <button @click="change()">确定按钮(向父组件发布事件)</button><br>
      <button @click="change2()">确定按钮(向父组件传值) 和 组件之间的双向绑定 改变父组件的值</button>
    </div>
</template>
<script>
export default {
    data(){
        return{
            chuanzhi:"我是子组件传来的值"
        }
    },
    props:{
        Fmsg:{
            type:String,
            default:"父组件不传值，default是默认值"
        },
        Fshuangxiang:{
            type:Boolean,
            default:false
        },
        value:{  // v-model 组件之前双向绑定 要用value
            type:Boolean,
            default:false
        }
    },
    methods: {
        change(){
            //通知父组件 点击了按钮
            //发布事件
            this.$emit("is-click")
        },
        change2(){
             this.$emit("is-chuanzhi",this.chuanzhi);
             this.$emit('update:Fshuangxiang',false) //组件之间的双向绑定 update触发更新父组件的值 sync 可以多次使用
             this.$emit('input',false) //v-model 组件之前双向绑定。要用inpu触发 但是只能用一次
        }
    },
}
</script>
<style  scoped>
    .zizujian{
        background: #dddddd;
        margin: 1vw;
    }
    button{
        background: rgb(171, 171, 247)
    }
</style>