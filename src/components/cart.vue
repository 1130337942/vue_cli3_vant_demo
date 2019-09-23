<template>
    <div class="cart">
        <div>购物车</div>
        <afooter></afooter>
    </div>
</template>
<script>
import afooter from './footer'
export default {
    name: 'cart',
    data(){
    return{
      // sad:'dsadsadsa',
      // isArray:['a','b']
    }

  },
  components: {
    afooter,
    
  }
}
</script>