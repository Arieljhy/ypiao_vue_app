<template>
    <div>
        <h1>canvas</h1>
        <mt-button @click="draw" size="large">点击绘制</mt-button>
        <div class="hb">
            <canvas id="c3"></canvas>

        </div>
        
    </div>
</template>
<script>
export default {
     data(){
         return{

         }
     },
     methods:{
         //绘制销售统计图
         draw(){
             var c3=document.getElementById("c3");
             var ctx=c3.getContext("2d");
             let list = [{name:"北口",value:1000},{name:"北口",value:1600},{name:"北口",value:1800},{name:"北口",value:1200}]
             for(var i=0;i<list.length;i++){
                 let w=20;
                 let h=list[i].value/10;
                 let y=100-h;
                 let x=i*100+50;
                 ctx.fillStyle="#f00"
                 ctx.fillRect(x,y,w,h);
             }
            
                                       

         }
     }
}
</script>
<style lang="scss" scoped>
.hb{

    width:100%;
    height:300px;
    border:1px solid #eee;
    canvas{
        width:100%;
        height:300px; 
        background-color: #eee;
    }


}

    
</style>