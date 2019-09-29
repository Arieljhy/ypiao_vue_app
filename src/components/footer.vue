<template>
    <div>
        <mt-tabbar fixed v-model="selected" class="footer">

            <mt-tab-item id="tab1" class="tab">
                <router-link to="/" class="to">
                    <div class="tab-con" v-if="select=selected=='tab1'?true:false">
                        <i class="iconfont on">&#xe642;</i>          
                        <span class="on">首页</span>
                    </div>
                    <div v-else>
                        <i class="iconfont">&#xe642;</i>
                        <span>首页</span>
                    </div>        
                </router-link>
            </mt-tab-item>

                        <mt-tab-item id="tab2" class="tab">
                <router-link to="/shopcart" class="to">
                    <div class="tab-con" v-if="select=selected=='tab2'?true:false">
                        <i class="iconfont on">&#xe69d;</i>          
                        <span class="on">票夹</span>
                    </div>
                    <div v-else>
                        <i class="iconfont">&#xe69d;</i>
                        <span>票夹</span>
                    </div>        
                </router-link>
            </mt-tab-item>


                        <mt-tab-item id="tab3" class="tab">
                <router-link to="/message" class="to">
                    <div class="tab-con" v-if="select=selected=='tab3'?true:false">
                        <i class="iconfont on">&#xe657;</i>          
                        <span class="on">消息</span>
                    </div>
                    <div v-else>
                        <i class="iconfont">&#xe657;</i>
                        <span>消息</span>
                    </div>        
                </router-link>
            </mt-tab-item>


                        <mt-tab-item id="tab4" class="tab">
                <router-link to="/personal" class="to">
                    <div class="tab-con" v-if="select=selected=='tab4'?true:false">
                        <i class="iconfont on">&#xe611;</i>          
                        <span class="on">我的</span>
                    </div>
                    <div v-else>
                        <i class="iconfont">&#xe611;</i>
                        <span>我的</span>
                    </div>        
                </router-link>
            </mt-tab-item>

            
        </mt-tabbar>     
    </div>
</template>
<script>
export default {
    data(){
        return{
            select:""
        }
    },
    props:["selected"],
    methods:{
       
       
    }
}
</script>
<style lang="scss" scoped>
@import '../assets/common.css';

.footer{
    width: 100%;
    height:60px;
    border-radius: 3px;
    text-align: center;
    line-height: 30px;
    z-index: 1000;
    padding-bottom: 5px;
    background-color: #fff;
    .tab{
        width:30px;
        height:80px;
        line-height:30px;
       
       
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
            i{margin-top:5px;
                display: inline-block;
                font-size:25px;
                
            
            }
            i.on{
                margin-top:5px;
                display: inline-block;
                font-size:25px;
                color:#fe5929;
                font-weight: bold;
            }
            span{
                display: block;
                margin-top:10px;
            }
            span.on{
                color:#fe5929;
                font-weight: bold;
            }
    }
}
 
.to{
    font-style:normal;
    text-decoration: none;
    display: block;
    height:80px;
}
 
</style>