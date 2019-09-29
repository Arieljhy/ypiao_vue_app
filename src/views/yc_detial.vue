<template>

    <div>
        <div class="header">
            <header class="head">
                <router-link to="/" class="head-l to">
                    <i class="iconfont">&#xe60f;</i>
                    <!-- <mt-button @click="handleClose">关闭</mt-button> -->   
                </router-link>
                <div class="head-r" >
                    <router-link to="/search" class="to">
                        <mt-search  class="search_zy" >
                            
                        </mt-search>
                    </router-link>
                </div>
                
                
            </header>
        
        </div>
        
       
        
    </div>
</template>
<script>
export default {
    data(){
        return{
            
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
        z-index: 199;
        overflow: hidden;
        
        .search_zy{
            width:100%;
            height: 50px;
            line-height: 30px;
            z-index: 99;
 
        }
        
    }
    
    }
    
}
    
</style>