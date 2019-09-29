<template>

    <div>
        <div class="header">
            <header class="head">
                <router-link to="/more_yc" class="head-l to">
                    <i class="iconfont">&#xe60f;</i>
                    <!-- <mt-button @click="handleClose">关闭</mt-button> -->   
                </router-link>
                <div class="head-r" >
                    <mt-search class="search">
                        <mt-cell
                            v-for="(item,index) in result"
                            :title="item.title"
                            :value="item.value" :key="index">
                        </mt-cell>
                    </mt-search>

                </div>
                
                
            </header>
        
        </div>
        
       
        
    </div>
</template>
<script>
export default {
    data(){
        return{
            result:[{
                title:"yi",
                value:"1"
            },
            {
                title:"yi",
                value:"1"
            },
            {
                title:"yi",
                value:"1"
            },
            {
                title:"yi",
                value:"1"
            }]
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
    line-height: 50px;
    background-color:#fff ;//#fe5929
    border-radius: 3px;
    margin-bottom: 20px;
    font-size: 16px;

    display: flex;
    justify-content: space-between;
    .head-l{
        width:10%;
         height: 50px;
    line-height: 50px;
    }
    .head-r{
        width:90%;
        height: 50px;
        line-height: 50px;
        background-color:#fff;
        .search{
            width:100%;
            height: 50px;
            line-height: 30px;
           
            
        }
        
    }
    
    }
    
}
    
</style>