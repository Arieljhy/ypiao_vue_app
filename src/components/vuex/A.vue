<template>
    <div class="">
        <h1 style="color:#0ff;">124</h1>
        <mt-button @click="draw" size="large">绘图</mt-button>
        
       
    
         <canvas id="c3" style="width:300px; height:300px; border:1px solid #000;">

         </canvas>
          <mt-button  size="large">清除</mt-button>
    </div>
</template>
<script>

export default {
    created(){
        console.log(this);
    },
    methods:{
        draw(){
            let c3=document.getElementById("c3");
            let ctx=c3.getContext("2d");

            var p3= new Image();
            p3.src="res/p3.png";
            p3.onload=function(){
               
                let w = p3.width;
                let h = p3.height;
                 ctx.drawImage(p3,300-w,0);
                 ctx.drawImage(p3,0,100-5,10,5);
                 var w1=10;
                 var h1=5;
                 var y=setInterval(()=>{
                     // ctx.clearRect(0,0,300,300);
                //      w1+=5;
                //      h1+=2;
                //      ctx.drawImage(p3,50,50,w1,h1);

                //      if(w1>=200){clearInterval(y)}
                //  },200)
                // ctx.drawImage(p3,0,0);
                // ctx.rotate(15*Math.PI/180);
                // ctx.drawImage(p3,0,0);
                // ctx.rotate(15*Math.PI/180);
                // ctx.drawImage(p3,0,0);

                ctx.translate(50,50);
                ctx.drawImage(p3,0,0);
                ctx.rotate(15*Math.PI/180);
                ctx.drawImage(p3,0,0);
                ctx.rotate(15*Math.PI/180);
                ctx.drawImage(p3,0,0);


                },200)
       
        
            }
        }
    }
}

</script>
<style lang="scss" scoped>

    
</style>