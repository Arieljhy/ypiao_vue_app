<template>
<div>
    <my-header :tit=title></my-header>
    <div class="mess-list">
    <message :message_info=item v-for="(item,key) in messages" :key=key></message>
    </div>
        
    <my-footer :selected=selected></my-footer>
</div>
</template>
<script>
import Message from '../components/message'
export default {

    data(){
        return{
            title:"消息",
            selected:"tab3",
            messages:[{
                    pic:require('../../public/img/login/girl.png'),
                    tit_top:"脱发",
                    tit_li:"123",
                    sendtime:"2019-8-28  下午2:00",
                    number:5
                },{
                    pic:require('../../public/img/login/boy.png'),
                    tit_top:"大傻瓜3",
                    tit_li:"123456",
                    sendtime:"2019-8-28  下午2:00",
                    number:3
                },{
                    pic:require('../../public/img/login/girl.png'),
                    tit_top:"大傻瓜2",
                    tit_li:"123456",
                    sendtime:"2019-8-28  下午2:00",
                    number:2
                },{
                    pic:require('../../public/img/login/boy.png'),
                    tit_top:"大傻瓜1",
                    tit_li:"123456",
                    sendtime:"2019-8-28  下午2:00",
                    number:1
                },{
                    pic:require('../../public/img/login/girl.png'),
                    tit_top:"大傻瓜4",
                    tit_li:"123456",
                    sendtime:"2019-8-28  下午2:00",
                    number:4
                }
                ]
        }
    },
    components:{
        message:Message
    }
    
}
</script>
<style lang="scss" scoped>
    .mess-list{
        margin-bottom:150px;
    }
</style>