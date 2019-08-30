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
     <!-- -->
    <div class="wd-list">
        
            <router-link to="" class="to">
                <div class="list-item">
                    <span class="list-tit l">尊称</span>
                    <span class=" r">冀女士</span>
                </div>
            </router-link>
        
         
             <router-link to="" class="to">
                 <div class="list-item">
                    <span class="list-tit l">绑定手机号</span>
                    <span class=" r">18266647973</span>
                </div>
            </router-link>
        
         
             <router-link to="" class="to">
                 <div class="list-item">
                    <span class="list-tit l"> 登录密码</span>
                    <span class=" r">修改<i class="iconfont">&#xe728;</i></span>
                </div>
            </router-link>
        
         
             <router-link to="" class="to">
                 <div class="list-item">
            <span class="list-tit l">支付密码</span>
            <span class=" r">未设置<i class="iconfont">&#xe728;</i></span>
            </div>
            </router-link>
        
         
             <router-link to="" class="to">
                 <div class="list-item">
                    <span class="list-tit l">我的地址</span>
                    <span class="r">管理<i class="iconfont">&#xe728;</i></span>
                </div>
            </router-link>
            <router-link to="" class="to">
                 <div class="list-item">
                    <span class="list-tit l">常用购票人</span>
                    <span class=" r">编辑<i class="iconfont">&#xe728;</i></span>
                </div>
            </router-link>  
    </div>
    <button class="loginout"> 退出登录</button>
</div>
    
</template>
<script>
export default {
    data(){
        return{
            tit:"账户管理"      
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

.wd-list{
    .list-item{
        width:100%;
        height:50px;
        line-height: 50px;
        border-bottom:1px solid #eee;
        font-size: 15px;
        i{
            font-size: 12px;
        }
    }

}
.loginout{
        width:100%;
        height:60px;
        font-size: 20px;
        color:#fe5929;
        margin-top:10px;
        background-color:rgba(144,144,144,0.1);
        border:none;
        border-radius: 3px;
 }

    
</style>