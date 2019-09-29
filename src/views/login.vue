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
        <div>
            <mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="phone"></mt-field>
            <mt-field label="密码" placeholder="请输入密码" type="password" v-model="upwd"></mt-field>
           
        </div>
        <mt-button  size="large" id="login_btn" @click="login">登录</mt-button>      
    </div>
</template>
<script>
export default {
    data(){
        return{
            tit:"登录",
            phone:"",
            upwd:""
        }
    },
    methods:{
        login(){ 
            let userinfo ={};
            let phone_reg= /^1[34578]\d{9}$/;
            var upwd_reg= /^([A-Z]|[a-z]|[0-9]){6,15}$/;
                if(!phone_reg.test(this.phone)){
                    this.$toast("用户名不能为空");  
                    return;
                }
                if(!upwd_reg.test(this.upwd)){
                    this.$toast("密码不能为空");       
                    return ;
                }
            //发送ajax请求 使用post方式发送json字符串给后台login
            let param = {phone:this.phone,upwd:this.upwd}
            let params=JSON.stringify(param);
           
             console.log(this.user_info);
            this.axios.post('/user/login',params,{headers:{'Content-Type': 'application/json'}}).then((response)=>{
                //console.log(typeof response.data);

                 if(response.data==-1){
                    this.$toast("登录失败");
                }else{
                    
                    this.$toast("登录成功")
                    sessionStorage.setItem("userinfo",JSON.stringify(response.data));
                    setTimeout(()=>{
                        this.$router.push('/personal');

                    },1000);
                } 

            })                
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
#login_btn{
    width:100%;
    height:50px;
    background-color:rgba(224, 222, 222,.2);
    border: none;
    font-size:18px;
}
    
</style>