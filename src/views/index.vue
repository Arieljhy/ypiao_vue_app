<template>
<div>
    
    <div class="hedtit"> 
        <router-link to="/city" class="city_show left">北京<i class="iconfont hed_xx">&#xe63a;</i></router-link>
        <input type="text" class="city_search">
        <router-link to="/map" class="map_show"><i class="iconfont hed_xx">&#xe612;</i></router-link>
    </div>
        
            这是主页

    <my-footer :selected=selected></my-footer>
</div>
</template>
<script>
export default {
    data(){
        return{
            title:"主页",
            selected:"tab1"
        }
    }
    
}
</script>
<style lang="scss" type="text/css" scoped>
.hedtit{
    width:100%;
    height:50px;
    line-height: 45px;
    background-color: #fe5929;
    color: #fff;
    border-radius: 3px;
    .city_search{
        width:65%;
        height: 30px;
        border-radius: 5px;
        border: none;
    }
}
.city_show{
   width: 5%;
    height: 30px;
    color: #fff;
    text-decoration: none;
    font-style: normal;

    i{
        display: inline-block;
        margin:auto 5px;
        font-size: 12px;
    }
   
}

.map_show{
    
    height: 30px;
    color: #fff;
    text-decoration: none;
    font-style: normal;

    i{
        display: inline-block;
        margin:auto 15px;

    }
}
    
</style>