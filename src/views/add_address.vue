<template>
    <div>
        <div class="header">
            <mt-header :title="tit" class="head">
                <router-link to="/address" slot="left">
                    <mt-button icon="back">返回</mt-button>
                    <!-- <mt-button @click="handleClose">关闭</mt-button> -->
                    
                </router-link>
                <!-- <mt-button icon="more" slot="right"></mt-button> -->
            </mt-header>
        </div>
        <div class="address">
            <div class="adr_people">
                <div class="tit">收件人</div>
                <mt-field placeholder="请输入姓名（最长10个字哦)" label="姓名" v-model="adr_name"></mt-field>
                <mt-field placeholder="请输入手机号" label="联系方式" v-model="adr_phone"></mt-field>

            </div>
            <div class="adr_location">
                <div class="tit">收件地址</div>
                <addr-selector></addr-selector>
                <mt-field placeholder="请输入详细地址" style="text" label="详细地址" v-model="adr_phone"></mt-field>

            </div>
        </div>
        <div class="button">
            <mt-button class="btn" size="large">保存</mt-button>
        </div>
        
        <div class="selector_tc">
            

        </div>
        
        
    </div>
</template>
<script>
import addrSelector from '../components/address_sele.vue'
export default {
    data(){
        return{
            tit:"添加地址",
            adr_name:"",
            adr_phone:"",
            adr_local:"",
            adr_detail:""
        }
    },
    methods:{
        select(){
            this.$toast("123")
        }
    },
    components:{
        addrSelector
    }
}
</script>
<style lang="scss" scoped>
.header{
    width: 100%;
    .head{
   width: 100%;
    height: 50px;
    line-height: 45px;
    background-color: #fe5929;
    border-radius: 3px;

    font-size: 16px;
    }
}
.address{
    width:96%;
    padding: 2%;
    .adr_people{
        margin-top: 10px;
        text-align:justify;
        div.tit{
            width:19%;
            height:0;
            padding-bottom:10%;
            text-align:justify;
            line-height:40px;
            border-bottom: 1px solid #ff9966;
        }
    }
    .adr_location{
        margin-top: 30px;
        text-align:justify;
        div.tit{
            width:19%;
            height:0;
            padding-bottom:10%;
            text-align:justify;
            line-height:40px;
            border-bottom: 1px solid #ff9966;
        }
        i{
            font-size:16px;
        }

    }
}
.button{
    width:100%;
    position: fixed;
    bottom:60px;
    
    .btn{
        margin:0 3%;
        width:94%;
        background:linear-gradient(to right,#f8814a,#ff5533);
        color:#fff;

    }
   
}
    
</style>