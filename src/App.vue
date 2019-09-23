<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld :msg="sad" /> -->
    <router-view/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
 

export default {
  name: 'app',
  data(){
    return{
      sad:'dsadsadsa',
      // isArray:['a','b']
    }

  },
  components: {
    HelloWorld,
    
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
font-size: 16px;
  
}
html, body{
  width: 100%;
  
}
html, body, div, ul, li, h1, h2, h3, h4, h5, h6, p, dl, dt, dd, ol, form, input, textarea, th, td, select{
  margin: 0;
  padding: 0;
  
}
ul,ol{list-style:none;}
a{text-decoration:none;}
input{
    border:none;  
    outline:none; 
}
h1,h2,h3,h4,h5,h6{
   font-weight:normal;
} 
em,strong{
   font-style:normal;
   font-weight:normal;

}
button{
   border:0;
   background-color:none;
   outline:none;
}
</style>
