<template>
    <div class="home">
        <input type="text" placeholder="手机号" v-model="phone">
        <input type="password" placeholder="密码" v-model="password">

        <div @click="loginFn()">登录</div>
    </div>
</template>
<script>

export default {
    data(){
        return{
            phone:"15517604756",
            password:"123456"
        }
    },
    created: function() {
      
    },
    methods: {
        async loginFn(){
            try {
                let data ={
                    phone: this.phone,
                    password: this.password
                }
                // let params = {param:"?params"};//请求路径带的参数里
                // let header = {heade:"header"} //请求头 header 里
                let res = await this.$api.matches.login(data)
                console.log(res)
                var token = res.data.token
                // console.log(token)
                sessionStorage.setItem('isToken',token);
                console.log(this.$router)
                console.log(this.$router.history.current.query)
                this.$router.push(this.$router.history.current.query)
              
            } catch (error) {
                console.log(error)
            }
            // console.log('/api/interface/v1/user/sign_in/')
            // this.$axios.post("/api/interface/v1/user/sign_in/",{
            //     phone: this.phone,
            //     password: this.password
            // }).then(res=>{
            //     console.log(res)
            //     // var token = res.data.data.token
            //     // console.log(token)
            //     // localStorage.setItem('token',token);
            //     // console.log(localStorage.token)
            // }).catch(error=>{
            //     console.log(error)
            // })     
        }
    },
}
</script>