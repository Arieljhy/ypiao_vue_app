<template>
    <div>
         <h1>面板显示</h1>
        <!-- 先写父元素 在写子面板 -->
        <div class="choose">
            <mt-button  @click="active='tab1'">美食</mt-button>
            <mt-button @click="active='tab2'">购物</mt-button>
            <mt-button @click="active='tab3'">休闲</mt-button>
        </div>
        <mt-tab-container v-model="active"> 
            <mt-tab-container-item id="tab1">美食</mt-tab-container-item>
            <mt-tab-container-item id="tab2">购物</mt-tab-container-item>
            <mt-tab-container-item id="tab3">休闲</mt-tab-container-item>
        </mt-tab-container>

        <mt-tabbar fixed v-model="activebar" class="footer">
            <mt-tab-item id="tabar1" class="tab"><i class="iconfont">&#xe642;</i></mt-tab-item>
            <mt-tab-item id="tabar2" class="tab"><i class="iconfont">&#xe67b;</i></mt-tab-item>
            <mt-tab-item id="tabar3" class="tab"><i class="iconfont">&#xe677;</i></mt-tab-item>
            <mt-tab-item id="tabar4" class="tab"><i class="iconfont">&#xe611;</i></mt-tab-item>

        </mt-tabbar>
        
    </div>
</template>
<script>
export default {
    data(){
        return{
            active:"tab1",
            activebar:"tabar1"
        }
    },
    methods:{
       
    }
}
</script>
<style scoped>
.choose{
    margin-bottom:30px;
} 
.footer{
    height:50px;
    border-radius: 5px;
    text-align: center;
    line-height: 50px;
}
.footer .tab{
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
}
.footer i{
    font-size:30px;
}
@font-face {
  font-family: 'iconfont';  /* project id 1371704 */
  src: url('//at.alicdn.com/t/font_1371704_mb8ei02n73d.eot');
  src: url('//at.alicdn.com/t/font_1371704_mb8ei02n73d.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_1371704_mb8ei02n73d.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_1371704_mb8ei02n73d.woff') format('woff'),
  url('//at.alicdn.com/t/font_1371704_mb8ei02n73d.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_1371704_mb8ei02n73d.svg#iconfont') format('svg');
} 
.iconfont{
    font-family:"iconfont" !important;
    font-size:20px;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;} 
</style>