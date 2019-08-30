<template>
    <div class="header">
        <mt-header :title="tit" class="head">
            <router-link to="/" slot="left">
                <mt-button icon="back">返回</mt-button>
                <!-- <mt-button @click="handleClose">关闭</mt-button> -->
            </router-link>
            <!-- <mt-button icon="more" slot="right"></mt-button> -->
        </mt-header>
        
    </div>
</template>
<script>
export default {
    data(){
        return{
            title:"我的订单"      
        }
    },props:["tit"] 
}
</script>
<style scoped>
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

    
</style>