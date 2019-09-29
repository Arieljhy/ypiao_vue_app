<template>
 
  <div class="banner">
      <mt-swipe :show-indicators="true" :auto="3000" @change="handleChange()" @click="todetail(index)" class="ban">
        <mt-swipe-item class="b-img"><img src="../../public/img/index/lbt1.jpg"></mt-swipe-item>
        <mt-swipe-item class="b-img"><img src="../../public/img/index/lbt2.jpg"></mt-swipe-item>
        <mt-swipe-item class="b-img"><img src="../../public/img/index/lbt3.jpg"></mt-swipe-item>
      </mt-swipe>

  </div>
  
  
  </template>
 
  <script>
  export default {
    data(){
      return{

      }
    },
    methods:{
      handleChange(index){

      }
    }
    
    }
    </script>


  

  
<style lang="scss" scoped>
.banner{
  width:100%;
  height:200px;
  .ban{
    width: 98%;
    padding:1%;
     .b-img img{
       width:100%;
       height:200px;
     }
  }

  

}
</style>

