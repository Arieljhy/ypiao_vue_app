<template>
    <div>
        <div class="header">
            <mt-header :title="tit" class="head">
                <router-link to="/wdsz" slot="left">
                    <mt-button icon="back">返回</mt-button>
                    <!-- <mt-button @click="handleClose">关闭</mt-button> -->
                    
                </router-link>
                <!-- <mt-button icon="more" slot="right"></mt-button> -->
            </mt-header>
        </div>

        <div class="address-list">
            <address-list></address-list>  
        </div>
         <div class="add-btn">
            <mt-button size="large" class="add" @click="toadd()">+添加地址</mt-button>
        </div>
        
        
    </div>
</template>
<script>
import addressList from '../components/address_list.vue'
export default {
    data(){
        return{
            tit:"我的地址"
           
        }
    },
    methods:{
        toadd(){
            this.$router.push('/add_address');
        }
    },
    components:{
        addressList
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
.address-list::before{
    content: "";
    display: table;
}
.address-list{
    width:100%;
    min-height:1000px;
   
    
    

    background-color: #eee;
}
.add-btn{
    width:100%;
    position: fixed;
    bottom:60px;
    
    .add{
        margin:0 3%;
        width:94%;
        background:linear-gradient(to right,#f8814a,#ff5533);
        color:#fff;

    }
   
}
    
</style>