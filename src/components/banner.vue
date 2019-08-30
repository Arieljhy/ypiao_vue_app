<template>
 
  <div>

  </div>
  
  
  </template>
 
  <script>
  import 'swiper/dist/css/swiper.css'
  import Swiper from 'swiper'
  export default {
    name: "Slider",
    data(){      return{
        slides:[{
            id:1,
            img_url:'./static/sliders/t1.svg'
            },{
                id:2,
                img_url:'./static/sliders/t2.svg'
            }]
      }
    },
    mounted(){      new Swiper (this.$refs.slider, {
        loop: true,        // 如果需要分页器        pagination: '.swiper-pagination',        // 如果需要前进后退按钮        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',        // 如果需要滚动条        scrollbar: '.swiper-scrollbar',
      })
    }
    }
    </script>


  

  
<style scoped>
  .swiper-container {
    width: 100%;
    margin: 0;
    padding: 0;
  }

  .swiper-wrapper {
    height: 200px;
  }

  .swiper-slide img {
    max-width: 100%;
  }

  .swiper-slide {
    text-align: center;
    background: #fff;
    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }</style>

