<template>
<div>
    <div class="header">
        <mt-header :title="tit" class="head">
            <router-link to="/personal" slot="left">
                <mt-button icon="back">返回</mt-button>
                <!-- <mt-button @click="handleClose">关闭</mt-button> -->
            </router-link>
            <!-- <mt-button icon="more" slot="right"></mt-button> -->
        </mt-header>
    </div>
    <div class="order-status" >
        
        <mt-navbar v-model="selected" class="slide-box">
            <mt-tab-item id="1" class="slide-item">进行中</mt-tab-item>
            <mt-tab-item id="2" class="slide-item">待付款</mt-tab-item>
            <mt-tab-item id="3" class="slide-item">等待发货</mt-tab-item>
            <mt-tab-item id="4" class="slide-item">等待取票</mt-tab-item>
            <mt-tab-item id="5" class="slide-item">已经发货</mt-tab-item>
            <mt-tab-item id="6" class="slide-item">已经完成</mt-tab-item>
            <mt-tab-item id="7" class="slide-item">已经取消</mt-tab-item>
        </mt-navbar>

        <!-- tab-container -->
    <mt-tab-container v-model="selected">
        <mt-tab-container-item id="1">
                <mt-cell-swipe title="标题文字" :right="[{ content: 'Delete',
                style: { background: 'red', color: '#fff' },
                handler: () => this.$messagebox('delete') }]">
                </mt-cell-swipe>
            <mt-cell v-for="n in 10" :title="'内容 ' + n" :key="n" ></mt-cell >
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
                <mt-cell v-for="n in 4" :title="'测试 ' + n" :key="n" />
        </mt-tab-container-item>
        <mt-tab-container-item id="3">
                <mt-cell v-for="n in 6" :title="'选项 ' + n" :key="n" />
        </mt-tab-container-item>

        <mt-tab-container-item id="4">
            <mt-cell v-for="n in 10" :title="'内容 ' + n" :key="n" ></mt-cell >
        </mt-tab-container-item>
        <mt-tab-container-item id="5">
                <mt-cell v-for="n in 4" :title="'测试 ' + n" :key="n" />
        </mt-tab-container-item>
        <mt-tab-container-item id="6">
                <mt-cell v-for="n in 6" :title="'选项 ' + n" :key="n" />
        </mt-tab-container-item>
                <mt-tab-container-item id="7">
                <mt-cell v-for="n in 6" :title="'选项 ' + n" :key="n" />
        </mt-tab-container-item>
    </mt-tab-container>
    </div>
</div>
</template>
<script>
export default {
    data(){
        return{
            tit:"我的订单",
            selected:"1"      
        }
    }
}
</script>
<style lang="scss" scoped>
.header{
    width: 100%;
}
.head{
   width: 100%;
    height: 50px;
    line-height: 45px;
    background-color: #fe5929;
    border-radius: 3px;
    margin-bottom: 20px;
    font-size: 16px;
}

.order-tatus .mint-navbar.slide-box{
      margin-top: 10px;
      display:-webkit-box;
      
      overflow-x:scroll;
      -webkit-overflow-scrolling:touch;
  }
  .order-tatus .mint-navbar.slide-box::-webkit-scrollbar {
      display: none;
  }


        



    
</style>