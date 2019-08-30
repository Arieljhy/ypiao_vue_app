<template>
<div>
    <router-link :to="{path:'/message_detail',query:message_info}" class="linkto to">
    <div class="message">
        <div class="l-xm">
            <img  :src="pic">
            <span class="pp" v-text='number' style='color:#fff;'></span>
            <p class="tit">
                <span class="tit-top" v-text="tit_top"></span>
                <span class="tit-li" v-text="tit_li"></span>
            </p> 
        </div> 
        <span class="sendtime" v-text="sendtime"></span>
        </div>
    </router-link>      
</div>
</template>
<script>
export default {
    data(){
        return{
            title:"消息",
            selected:"tab3",
            
            pic:this.message_info.pic,
            tit_top:this.message_info.tit_top,
            tit_li:this.message_info.tit_li,
            sendtime:this.message_info.sendtime,
            number:this.message_info.number
        }
    },
    props:["message_info"]
    
}
</script>
<style lang="scss" scoped>
.linkto{
    display: block;
    width:100%;
}
.message{

    display: flex;
    justify-content: space-between;
    align-items: center;
  
    width:98%;
    margin:5px;
    .l-xm{
        width:200px;
        height:80px;
        padding:10px;
        margin:0;
        display: flex;
        align-items: center;
   
        img{
            display: inline-block;
            width:80px;
            height:80px; 
            border-radius:50%;  
        }
        span.pp{
            display: inline-block;
            width:20px;
            height:20px; 
            border-radius:50%;
            background-color:red; 
            z-index:300;
            margin-top:-40px;
            margin-left:-20px;
            


        }
        .tit{
            display: flex;
            flex-direction:column;
            margin-left: 10px;
                span{
                    text-align: justify;
                    display: block;
                    width:100px; 
                }
                .tit-top{
                    font-weight: bolder;
                    
                }
            
        }
   
}
.sendtime{
    font-size:10px;
    margin-right: 10px;
}

}

    
</style>