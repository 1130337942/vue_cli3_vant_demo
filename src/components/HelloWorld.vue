<template>
  <div class="hello">
     <h1>{{ msg }}</h1>
     <!-- {{aa[1]}} -->
    <p>
      For a guide and recipes on how to configure / customize this project,
      <br />check out the
      <a
        href="https://cli.vuejs.org"
        target="_blank"
        rel="noopener"
      >vue-cli documentation</a>.
    </p>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li>
        <a
          href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel"
          target="_blank"
          rel="noopener"
        >babel</a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint"
          target="_blank"
          rel="noopener"
        >eslint</a>
      </li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li>
        <a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a>
      </li>
      <li>
        <a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a>
      </li>
      <li>
        <a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a>
      </li>
      <li>
        <a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a>
      </li>
      <li>
        <a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a>
      </li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li>
        <a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a>
      </li>
      <li>
        <a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/vue-devtools#vue-devtools"
          target="_blank"
          rel="noopener"
        >vue-devtools</a>
      </li>
      <li>
        <a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a>
      </li>
      <li>
        <a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a>
      </li>
    </ul>

    <input type="text" placeholder="手机号" v-model="phone">
        <input type="password" placeholder="密码" v-model="password">

        <div @click="loginFn()">登录</div>
  </div>
</template>

<script>
// import axios from "axios";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
    // aa:Array 
  },
   data(){
        return{
            phone:"15517604756",
            password:"123456"
        }
    },
  created(){   
            // var that = this
        
            // console.log(this)
            // this.getAxiosData()
            this.matches()
            // console.log(this.$route);
            
            // that.$router.push({path: '/axios/'+that.one+'?info=attention'});
           
            
          //  http://app_api.xunbaowang.net/interface/v1/video/column/video/list/
        },
  methods: {
    // getAxiosData() {
    //   axios.get("/api/interface/v1/video/column/video/list/",{params:{
    //       column_id:70
    //     }})
    //     .then(res => {
    //       console.log(res)
         
    //     })
    //     .catch(error => {
    //       console.log(error)
    //       // alert("请刷新网络");
    //     });
    // },
    async matches() {
      // 这里用try catch包裹，请求失败的时候就执行catch里的
      try{
        //定义参数对象
        let params = {
          column_id: 70
        }
        let res = await this.$api.matches.matches(params)

        console.log('​getMatches -> res', res)
      } catch (e) {
        console.log('​catch -> e', e)
      }
    },
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
                // var token = res.data.token
                // // console.log(token)
                // sessionStorage.setItem('isToken',token);
                // console.log(this.$router)
                // console.log(this.$router.history.current.query)
                // this.$router.push(this.$router.history.current.query)
              
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
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
