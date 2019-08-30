<template>
    <div>
        <div class="header">
            <mt-header :title="tit" class="head">
                <router-link to="/message" slot="left">
                    <mt-button icon="back">返回</mt-button>
                    <!-- <mt-button @click="handleClose">关闭</mt-button> -->
                </router-link>
                <!-- <mt-button icon="more" slot="right"></mt-button> -->
            </mt-header>
        </div>

        <div class="mess-content">
            <div class="ite " v-for="(item,index) in mess" :key="index">
                <div>
                    <img src="" alt="">
                    <i class="iconfont">
                        <span>

                        </span>
                    </i>
                </div>

            </div>
            


        </div>
        
    </div>
    
</template>
<script>
export default {
    data(){
        return{
            mess:this.$route.query,
            tit:this.$route.query.tit_top

        }
    }
    
}
</script>
<style lang="scss" scoped>
.l{
    float: left;
    margin-left: 20px;
}
.r{
    float: right;
    margin-right: 20px;
}
.to{
    text-decoration: none;
    font-style: normal;
    color: #111222;
}
.header{
    width: 100%;
    .head{
   width: 100%;
    height: 50px;
    line-height: 45px;
    background-color: #fe5929;
    border-radius: 3px;
    margin-bottom: 20px;
    font-size: 16px;


}
}

    
</style>