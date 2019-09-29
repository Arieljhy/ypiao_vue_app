<template>
    <div>
        <div class="detial_top">
                <div class="img_top">
                    <router-link to="/" class="fh to"><i class="iconfont">&#xe60f;</i></router-link>
                    <div class="back_img bg-blur"></div>
                    <router-link to="/share" class="fx to"><i class="iconfont">&#xe608;</i></router-link>
                </div>
            
                <div class="ticket-item">
                    <div class="item-l">
                        <span class="img-zk" v-show="ticket.zk==0?false:true" ><span class="" v-text="ticket.zk" ></span>折</span>
                        
                        <img class="itm-l-img" :src=ticket.src alt="">
                    </div>
                    <div class="item-r">
                        <div class="itm-r-tit">                            
                        </div>
                    
                        <div class="itm-r-sc">
                            <p class="gmnumb"><span>33</span>人购买</p>
                            <span class="status" v-if="ticket.status==1?true:false">售票中</span>
                            <span class="status" v-else>已售罄</span>
                            
                        </div>
                        <div class="itm-r-bott">
                            <span class="xk on" @click.stop="collect" v-if="xk==1?true:false"><i class="iconfont">&#xe605;</i><span class="pp">200</span></span>
                            <span class="xk" @click.stop="collect" v-else><i class="iconfont">&#xe757;</i><span class="pp">200</span></span>
                            
                            <span class="bott-price" >¥<span class="itm-price" v-text="ticket.price">500</span>起</span>
                        </div>
                    </div>
                </div>
                <div class="top-d">
                    <div> 
                        <mt-cell  is-link class="location" >
                            <i class="iconfont" slot="icon" >&#xe612;</i>

                            <span slot="title" v-text="ticket.venu"></span>
                        </mt-cell>
                    </div>
                     <div> 
                        <mt-cell  class="time" >
                            <i class="iconfont" slot="icon" >&#xe612;</i>
                            <span slot="title" v-text="ticket.time"></span>
                        </mt-cell>
                    </div>
                     <div> 
                        <mt-cell   is-link  >
                            
                            
                            <span slot="title"><i class="iconfont"  >&#xe606;</i>100%真票</span>
                            
                            <span slot="title"><i class="iconfont" >&#xe606;</i>担保交易</span>
                            
                            <span slot="title"><i class="iconfont">&#xe606;</i>安心购票</span>
 
                        </mt-cell>
                    </div>
                    
                </div>

                   
        </div>
    
       
        <div class="detail-content">
            <div class="ycjj" >
                <div class="top"> 
                    <span class="s1">演出简介</span><span class="s2">|</span><span class="s3">Introduction</span>
                </div>
                <div class="ycjj-content">
                    123253654

                </div>
            </div>
            <div class="gpxz" >
                <div class="top"> 
                    <span class="s1">购票须知</span><span class="s2">|</span><span class="s3">Notice</span>
                </div>
                <div class="gpxz-content">
                    <p>1.邮票官方确保售出票品100%真是有效，请放心购买；</p>
                    <p>2.演出详情仅供参考，具体以主办方公布信息及现场为准，请准时到场以免错过演出；</p>
                    <p>3.演出票品为特殊商品，除不可抗力因素导致演出取消或延期外，订单不支持无理由退换，可在平台转售</p>
                    <p>4.根据演出火爆情况，有票平台坑会将您所选的快递送票、上门自取等取票方式调整为现场取票，敬请谅解</p>
                    <p>5.平台会尽力促使卖家履行交易协议，如果卖家付票过程中发生问题，本平台可协调相同或者更高票档票品代替，否则，平台将全额退款并按照订单上约定的赔付方式与金额向用户进行赔付。</p>

                </div>
            </div>


        </div>

        <div class="footer">
            <router-link to="" class="to kf">
                <i class="iconfont">&#xe604;</i>
                <span>客服</span>
            </router-link> 

            <span style="font-size:35px;">|</span> 

            <div class="xk">
               <div class="addcart-btn ">
                    <i class="iconfont i2">&#xe634;</i> 
                    <span>加购</span>
                </div>
             </div> 

            <mt-button class="buy_btn" @click="buy()">立即购买</mt-button>

        </div>

    </div>
    
   

</template>
<script>
// import Bus from '../assets/bus'
export default {
    data(){
        return{
            xk:0,
            ticket:{}
        }
    },
    inject:["reload"],
    created(){
        
        this.rend()
        
    },
    methods:{
        rend(){
           this.bus.$on('getticket',(content)=>{
                
                this.ticket=content;
                //console.log(this.ticket.price);

            }); 
             
        },
        collect(){
            if(this.xk==0){
                this.xk=1;
                this.$toast("喵，(=￣ω￣=) 收藏成功了哦");
                return;
            }
            if(this.xk==1){
                this.xk=0;
                this.$toast("取消收藏");
                return;
            }
            
        },
        buy(){
            
            this.$router.push('/order_identify');
        }

    },
    beforeRouteLeave(to, from, next) {
      if (to.path == "/index") {
        to.meta.keepAlive = true;
      } else {
        to.meta.keepAlive = false;
      }
      next();
    }

    
}
</script>
<style lang="scss" scoped>
.detial_top{
    position: relative;
    .img_top{
        width:100%;
       height:270px;
        overflow: hidden;
        position: relative;
        .fh{
            width:35px;
            height:35px;
            line-height:35px;
            border-radius: 50%;
            position: absolute;
             color:#fff;
            top:50px;
            left:20px;
            z-index:999;
            background-color: rgba(0,0,0,.2);
            i{
                display: block;
                color:#fff;
                font-size:15px;
            }
        }
        .fx{
            width:35px;
            height:35px;
            line-height:35px;
            border-radius: 50%;
            position: absolute;
             color:#fff;
            top:50px;
            right:20px;
            z-index:999;
            background-color: rgba(0,0,0,.2);
            i{
                display: block;
                color:#fff;
                font-size:25px;
            }
        }
        .bg-blur.back_img {
            float: left;
            width:100%;
            height:0;
            padding-bottom:90%;
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
            -webkit-filter: blur(13px);
            -moz-filter: blur(15px);
            -o-filter: blur(15px);
            -ms-filter: blur(15px);
            background-image: url(../../public/img/index/zkp1.jpg);
        }
    }

     
    .ticket-item{
             width:100%;
             position: absolute;
             background:transparent;
             top:140px;
            
            display: flex;
            justify-content: space-between;
            padding-bottom:20px;
           
            .item-l{
                width:35%;
                height:150px;
                border-bottom:1px solid #eee;
                border-radius: 5px;
                margin-left:20px;
                position:relative;  
    

                .img-zk{
                    display: block;
                    width:40px;
                    height:20px;
                    line-height: 20px;
                    font-size:10px;
                    color:#fff;
                    background-color:rgb(228, 69, 161);
                    border-top-left-radius:8px;
                    border-top-right-radius:3px;
                    border-bottom-right-radius:3px;
                    border-bottom-left-radius:3px;
                    position: absolute;
                    top:0;
                    left: 0;
                    
                    z-index: 100;
                }
                .itm-l-img{
                    width:110px;
                    height:150px;
                    border-radius: 8px;
                    position: absolute;
                    z-index: 50;
                    top:0;
                    left:0;
                }
                
            }
            .item-r{
                width:60%;
                margin:0;
                position: relative;
                .itm-r-tit{
                    display: block;
                    width:100%;
                    height: 30px;
                    
                    font-size: 15px;
                    text-overflow:ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                    
                    margin-top: 0px;
                    color:#fff;

                    
                    position:absolute;
                    top:0;
                    left:0;
                    
                }
                
                .itm-r-sc{
                     width:100%;
                     height:30px;
                    line-height:15px;
                    text-align: justify;
                    color:#fff;
                    font-size:15px;
                    display: flex;
                    justify-content: space-between;
                    
                    position:absolute;
                    top:40%;
                    left:0;

                    p{
                        margin: 0 0 0 5%;

                    }
                    .status{
                        display: inline-block;
                        width:40px;
                        height:23px;
                        line-height: 23px;
                        font-size: 10px;
                        border:1px solid #fff;
                        color:#fff;

                        border-radius:5px;
                        margin-right: 10%;

                    }
                }
                .itm-r-bott{
                    width:100%;

                    position:absolute;
                    bottom:30px;
                    left:0;
                    display: flex;
                    justify-content: space-between;
                    
                    .xk{
                                display: inline-block;
                                width:30px;
                                height:30px;
                                
                                line-height:30px;
                                
                               margin-left:5%;

                                
                                i{
                                    color:#fe5929;
                                    font-size:30px;
                                }
                                 span.pp{
                                    width:25px;
                                    height:12px;
                                    line-height:12px;
                                    border-radius: 25%;
                                    font-size:10px;
                                    background-color:red;
                                    color:#fff;

                                    position:absolute;
                                    top:0px;left:35px;
                                }
                    }
                .xk.on{
                        display: inline-block;
                        width:30px;
                        height:30px;
                                
                        line-height:30px;
                                
                        margin-left:5%;
                            
                        i{
                            color:#fe5929;
                            font-size:30px;
                        }
                         span.pp{
                            width:25px;
                            height:12px;
                            line-height:12px;
                            border-radius: 25%;
                            
                            background-color:red;
                            color:#fff;

                            position:absolute;
                            top:0px;left:35px;
                        }
                }
               .bott-price{
                    position: absolute;
                    width:40%;
                    height:25px;
                    line-height: 25px;
                    font-size:10px;
                    color: #fff;
                    
                    right: 0;
                    bottom:0px;
                    z-index: 100;
                    .itm-price{
                        font-size:20px;
                    }

                }
                }
            }

        
    }
    .top-d{
        width:100%;
        margin-top:30px;
        text-align: justify;
        
        div{
            width:100%;
            font-size:15px;
           
            line-height: 30px;
           
            span{
                font-size: 15px;
                i{
                    display: inline-block;
                    margin:0 3%  0 3%;
                    font-size:15px;
                    color:#ff5533;
               
                }
            }
            i{
                margin-left:3%;
                font-size:13px;
                color:#ff5533;
               
            }
        }
        
    }
}
.detail-content{
    width:100%;
    margin-bottom:100px;
    .ycjj{
        width:100%;
        border-top:5px solid #eee;
        .top{
            width:100%;
            height: 50px;
            text-align: justify;
            box-sizing: border-box;
            padding-left:5%;
            span{
                display:inline-block;  
            }
            .s1{
                font-size: 20px;
                font-weight:bold;
                margin-right:3%;
               
            }
            .s2{
                font-size: 20px;
                color:#ff5533;
                margin-right:3%;
            }
            .s3{
                font-size: 23px;
                color:rgba(0,0,0,0.1);
            }
            
        }
    }
    .gpxz{
        width:100%;
        border-top:5px solid #eee;
        .top{
            width:100%;
            height: 50px;
            text-align: justify;
            box-sizing: border-box;
            padding-left:5%;
            span{
                display:inline-block;  
            }
            .s1{
                font-size: 20px;
                font-weight:bold;
                margin-right:3%;
               
            }
            .s2{
                font-size: 20px;
                color:#ff5533;
                margin-right:3%;
            }
            .s3{
                font-size: 23px;
                color:rgba(0,0,0,0.1);
            }
            
        }
        .gpxz-content{
            padding:0 6%;
            box-sizing: border-box;
            text-align:justify;
            
            p{
                font-size:13px;
                padding:0;
                margin:5px 0;
            }
        }
    }
}
.footer{
    width:100%;
    height:55px;
    line-height:55px;
    background-color:#fff;
    
    position: fixed;
    bottom: 0;
    display: flex;
    justify-content: space-around;
        .kf{
            display: inline-block;
            width:17%;
            height:55px;
            position:relative;
            i{display: block; font-size: 26px;position: absolute;top:-5px;left:15px;}
            span{
                display: block; font-size: 10px;position:absolute;top:20px;left:15px;
            }
            
            
        }
        .xk{
            display: inline-block;
            width:17%;
            height:55px;
            position:relative;
            .addcart-btn{

                width:100%;
                
                border:1px solid #eee;
                border-radius: 50%;

                position:absolute;
                top:5px;
                left:10px;

                text-align: center;

                
                .i2{
                width:18px;
                height:18px;
                line-height: 18px;
                

                border-radius: 50%;
                background-color:#fff;
                color:#fda88e;
                border:1px solid #fe5929;
                
                font-size: 18px;
                
                position: absolute;
                top:5px;
                left:5px;   
                }
                span{
                    display: inline-block;
                    
                    width:30px;
                   
                   font-size: 11px;

                   position: absolute;
                    top:13px;
                    left:0; 
                }
            }
        }
        .buy_btn{
            width:66%;
            height: 55px;
            
            
            background:linear-gradient(to right,#f8814a,#ff5533);
            color:#fff;

        
        }
}

    
</style>