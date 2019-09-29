<template>
    <div>
        <div class="header">
            <mt-header :title="tit" class="head">
                <router-link to="/wdsz" slot="left">
                    <mt-button icon="back">返回</mt-button>
                    <!-- <mt-button @click="handleClose">关闭</mt-button> -->
                    
                </router-link>
                <!-- <mt-button icon="more" slot="right"></mt-button> -->

                <mt-button slot="right" @click="submit">完成</mt-button>
            </mt-header>
        </div>
        <div class="upwdchan">
            <mt-field label="当前密码" placeholder="当前密码" type="text" v-model="upwd"></mt-field>
            <mt-field label="新密码" placeholder="请输入新密码" type="text" v-model="nupwd"></mt-field>
            <mt-field label="确认密码" placeholder="确认密码" type="text" v-model="cupwd"></mt-field>

        </div>

       

        
    </div>
</template>
<script>
export default {
        data(){
        return{
            tit:"修改密码" ,
            selected:"tab4",
           
            upwd:"",
            nupwd:"",
            cupwd:""
        }
    },
    methods:{
        submit(){
            let userInfo =window.sessionStorage.userinfo;
            let uid=JSON.parse(userInfo).uid;
            let phone=JSON.parse(userInfo).phone;
        
            let upwd = this.upwd;
            let nupwd = this.nupwd;
            let cupwd = this.cupwd;

            if(!upwd){
                this.$toast("请输入旧密码");
                return;
            } 
            if(!nupwd){
                this.$toast("请输入新密码");
                return;
            } 
            if(!cupwd){
                this.$toast("请重复输入新密码");
                return;
            } 
            if(nupwd!==cupwd){
                this.$toast("两次输入的新密码不同，请重新输入");
                return;
            }    
            let param1={upwd:this.upwd,phone:`${phone}`};
            let params1=JSON.stringify(param1);
            
            let param2={upwd:this.cupwd,uid:`${uid}`};
            let params2=JSON.stringify(param2);
             this.axios.post('/user/login',params1,{headers:{'Content-Type': 'application/json'}}).then((res)=>{
                if(res.data==-1){
                    this.$toast("旧密码错误,无法修改");
                }else{
                    this.axios.put('/user/upwdc',params2,{headers:{'Content-Type': 'application/json'}}).then((res)=>{
                        console.log(res.data);
                        if(res.data=="1"){
                            this.$toast("修改成功");
                            setTimeout(()=>{
                                this.$router.push('/wdsz');
                            },1000)
                            

                        }else{
                            this.$toast("修改失败");
                        }
                        
                    
                })}

             })
            
        }

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
        margin-bottom: 10px;
        font-size: 16px;
    }
}


    
</style>