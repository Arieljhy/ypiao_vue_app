<template>
<div>
    <my-header :tit=title></my-header>
        
            这是推荐

    <my-footer :selected=selected></my-footer>
</div>
</template>
<script>
export default {
    data(){
        return{
            title:"推荐",
            selected:"tab2"
        }
    }
    
}
</script>
<style lang="">
    
</style>