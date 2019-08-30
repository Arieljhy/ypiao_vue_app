<template>
<div>
    <my-header :tit=title></my-header>
        
            这是购物车

    <my-footer :selected=selected></my-footer>
</div>
</template>
<script>
export default {
    data(){
        return{
            title:"购物车",
            selected:"tab2"
        }
    }
    
}
</script>
<style lang="">
    
</style>