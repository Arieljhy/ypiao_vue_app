<template>
    <div>
        <div class="header">
            <mt-header :title="tit" class="head">
                <router-link to="/personal" slot="left">
                    <mt-button icon="back">返回</mt-button>
                    <!-- <mt-button @click="handleClose">关闭</mt-button> -->
                </router-link>
                <!-- <mt-button icon="more" slot="right"></mt-button> -->
            </mt-header>
        </div>

        <div class="reg-content">

            <mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="phone"></mt-field>
            <mt-field label="密码" placeholder="请输入密码" type="password" v-model="upwd"></mt-field>
            <mt-field label="邮箱" placeholder="请输入邮箱" type="email" v-model="email"></mt-field>
            
            
            <div class="nickname">
                        <div class="dz-zc-4 dz-zc">
                    
                            <mt-field label="姓氏" type="text" class="dz-ipu nik-l l-changcilb-on" placeholder="请输入姓氏"  v-model="user_name"></mt-field>
                        </div>

                        <div class="gender">
                            <input id="male" type="radio" name="gender"  value="1" style="display: none;"><label class="lab1" for="male" style="color:#7f8c8d">先生</label>
                            <input id="female" type="radio" name="gender"  value="0" style="display: none"><label class="lab2" for="female" style="color:#7f8c8d" >女士</label>
                        </div>
                        <span class="span1" style="color: red; display: none; font-size: 12px;"></span>
                        <span class="span2" style="color: red; display: none; font-size: 12px;"></span>
            </div>
            <div class="yanzhnegma">
                <div class="dz-zc-5 dz-zc yzm-l">
                   
                    <mt-field id="yanzhengma"  label="验证码" class="dz-ipu dz-ipu-yzm-l" placeholder="请输入验证码" type="text" v-model="yzm"></mt-field>
                </div>
                <div class="yzm-r">
                    <span id="reflashCode" class="dz-ipu dz-ipu-yzm-r" @click="reflashCode">
                        <input id="zc-yzm-cc" type="text" :value="veCode" style="display: none">
                        <canvas id="canvas" ref="canvas">
                        </canvas>
                    </span> 
                    <span class="yzm-msg" style="color: red; width:100%; display: none"></span>   
                    
                </div>
                                                        
             </div>                                           
            <mt-button id="reg_btn" size="large">注册</mt-button>
       

        
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            tit:"注册",
            user_name:"",
            upwd:"",
            phone:"",
            email:"",

            gender:"",
            yzm:"",
            veCode:"",
            options :[{
                    label: '女士',
                    value: '0'
                },
                {
                    label: '先生',
                    value: '1'
                }]
        }
    },
    mounted(){
        this.drawPic()//初始化验证码
    },
    methods:{
            randomNum(min, max) {
                return Math.floor(Math.random() * (max - min) + min);
            },
            /**生成一个随机色**/
            randomColor(min, max) {
                let r = this.randomNum(min, max);
                let g = this.randomNum(min, max);
                let b = this.randomNum(min, max);
                return "rgb(" + r + "," + g + "," + b + ")";
            },
            /**绘制验证码图片**/
            drawPic(){
                let canvas = this.$refs.canvas;
                let width = 240;//120
                let height = 200;//40
                //获取该canvas的2D绘图环境 
                let code = "";
                if (canvas != null) {
                    let ctx = canvas.getContext('2d');
                    ctx.textBaseline = 'bottom';
                    /**绘制背景色**/
                    //ctx.fillStyle = randomColor(180, 240);
                    ctx.fillStyle = this.randomColor(240, 300);
                    //颜色若太深可能导致看不清
                    ctx.fillRect(0, 0, width, height);
                    /**绘制文字**/
                    let str = 'ABCEFGHJKLMNPQRSTWXY123456789';
                    
                    //生成四个验证码
                    for (let i = 1; i <= 4; i++) {
                        let txt = str[this.randomNum(0, str.length)];
                        code = code + txt;
                        ctx.fillStyle = this.randomColor(50, 160);
                        //随机生成字体颜色
                        ctx.font = this.randomNum(15, 40) + 'px SimHei';
                        //随机生成字体大小
                        let x = 10 + i * 75;//let x = 10 + i * 25;
                        let y = this.randomNum(45, 55);//randomNum(25, 35)
                        let deg = this.randomNum(-65, 65);//randomNum(-45, 45)
                        //修改坐标原点和旋转角度
                        ctx.translate(x, y);
                        ctx.rotate(deg * Math.PI / 180);
                        ctx.fillText(txt, 0, 0);
                        //恢复坐标原点和旋转角度
                        ctx.rotate(-deg * Math.PI / 180);
                        ctx.translate(-x, -y);
                    }

                    /**绘制干扰线**/
                    for (let i = 0; i < 3; i++) {
                        ctx.strokeStyle = this.randomColor(40, 180);
                        ctx.beginPath();
                        ctx.moveTo(this.randomNum(0, width / 2), this.randomNum(0, height / 2));
                        ctx.lineTo(this.randomNum(0, width / 2), this.randomNum(0, height));
                        ctx.stroke();
                    }
                    /**绘制干扰点**/
                    for (let i = 0; i < 50; i++) {
                        ctx.fillStyle = this.randomColor(255);
                        ctx.beginPath();
                        ctx.arc(this.randomNum(0, width), this.randomNum(0, height), 1, 0, 2 * Math.PI);
                        ctx.fill();
                    }
                }
                this.veCode= code;
            },
            reflashCode(e) {
                e.preventDefault();
                this.veCode = this.drawPic();
                
            }
    }
    
}


  
</script>
<style lang="scss" scoped>
.header{
    width: 100%;
}
.head{
   width: 100%;
    height: 50px;
    line-height: 45px;
    background-color: #fe5929;
    border-radius: 3px;
    margin-bottom: 20px;
    font-size: 16px;
}
.reg-content{
    width:98%;
}

/*注册*/
.yanzhengma{
    float: left;
    width: 100%;

}
.dz-ipu.dz-ipu-yzm-l{
    width:220px;
    
    float: left;
    

}
#canvas{
    margin-left: -15px;
     width:150px;
    height:50px;
    
}
.dz-ipu.dz-ipu-yzm-r{
    width:120px;
    float: left;
    padding: 0;
    cursor:pointer;
    text-align: center;
    color:#ff6633;
    font-size:16px;
    overflow: hidden;
    margin-left: 3px;

}

.nickname{
    width:98%;
   min-height: 50px;
   
    font-size: 18px;
    position: relative;

    display: flex;
    justify-content:space-between;
}
.dz-zc-4.dz-zc{
  
    width:60%;
    
}
.gender{
    display: flex;
    justify-content: space-between;
   
    width:35%;
    height:50px;
    box-sizing: border-box;
    font-size:18px;
    line-height: 50px;
    padding-right:5px;
}
.nickname div.gender label.lab1{
   float: left; 
    
}
.nickname div.gender label.lab2{
  float: left;   
      
    
}
.dz-ipu.nik-l{
    width:217px;
}
div.nickname input:nth-child(2){
    display: none;
}
#female{
    display: none;
}

div.nickname label::before{
    display: inline-block;
    content: "";
    width: 11px;
    height: 11px;
    margin-right: 8px;
    line-height: 11px;
    text-align: center;
    border-radius: 50%;
    border: 1px solid rgb(219, 219, 219);
}
div.nickname input:checked+label::before{
    content: url(../../public/img/login/xz.png);
    border: none;
}
.yanzhnegma{
    display: flex;
    justify-content: space-between;
    align-items: center;
    

}
.yzm-l{
    width:40%;
}
.yzm-r{
    width:40%;


}
#reg-btn{
    width:100px;
}

    
</style>