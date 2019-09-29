<template>
    <div class="ticket">
        <div class="ticket-item" v-for="(item,index) of tickets" :key="index">
            
            <div class="goto" @click="goto(index)">

            <div class="item-l">
                <span class="img-zk" v-show="item.zk==0?false:true"><span class="" v-text="item.zk" ></span>折</span>
                
                <img class="itm-l-img" :src=item.src alt="">
                <div class="img-bott">
                    <span>¥<span class="itm-price" v-text="item.price">500</span>起</span>
                </div>
            </div>
            <div class="item-r">
                
                <div class="itm-r-tit" v-text="item.title">
                    
                </div>
                    <div class="r-l">
            
                    <div class="itm-r-sc">
                        <p class="sj" v-text="item.time"></p>
                        <p class="cg" v-text="item.venu"></p>
                    </div>
                    <div class="itm-r-bott">
                        
                        <span class="addcart-btn"><i class="iconfont i1">&#xe69d;</i><i class="iconfont i2">&#xe634;</i> </span>
                        
                        <span class="xk on" @click.stop="collect(index)" v-if="item.xk==1?true:false"><i class="iconfont">&#xe605;</i></span>
                        <span class="xk" @click.stop="collect(index)" v-else><i class="iconfont">&#xe757;</i></span>
                    </div>
                </div>
                <div class="r-r">
                        <span class="status on" v-if="item.status==1?true:false">售票中</span>
                        <span class="status no" v-else>已售罄</span>
                        <mt-button class="gm-btn" @click="buy" v-if="item.status==1?true:false">购买</mt-button>
                        <mt-button class="gm-btn ck" v-else>查看</mt-button>
                </div>

            </div>
            </div>
            
            
            
        </div>
        
    </div>
</template>
<script>
 //import Bus from '../assets/bus'
export default {
    data(){
        return{
            tickets:[{
            zk:0,
            src:require("../../public/img/index/zkp2.jpg"),
            price:500,
            time:"2019.11.22-12.01",
            venu:"北京喜剧院",
            title:"【中鱼文化】神剧重燃！black Mary Poppins中文版《水曜日》第二轮",
            status:0,
            xk:0,
            },{
            zk:1,
            src:require("../../public/img/index/zkp4.jpg"),
            price:500,
            time:"2019.11.22-12.01",
            venu:"北京喜剧院",
            title:"【中鱼文化】神剧重燃！black Mary Poppins中文版《水曜日》第二轮",
            status:1,
            xk:0,
            },{
            zk:7.6,
            src:require("../../public/img/index/zkp3.jpg"),
            price:500,
            time:"2019.11.22-12.01",
            venu:"北京喜剧院",
            title:"【中鱼文化】神剧重燃！black Mary Poppins中文版《水曜日》第二轮",
            status:1,
            xk:0,
            }]
        }
    },
    methods:{
        buy(){},
        goto(index){
            let params={
                tic_id:this.tickets[index].tic_id,
                zk:this.tickets[index].zk,
                src:this.tickets[index].src,
                price:this.tickets[index].price,
                time:this.tickets[index].time,
                venu:this.tickets[index].venu,
                title:this.tickets[index].title,
                status:this.tickets[index].status,
                xk:this.tickets[index].xk
            }
            this.bus.$emit('getticket',params);
            this.$router.push('/ticket_detial');
        },
        collect(index){
           
                
            if(this.tickets[index].xk==0){
               
                 this.tickets[index].xk=1;
                 this.$toast("喵，(=￣ω￣=) 收藏成功了哦");
                return;
            }
            if(this.tickets[index].xk==1){
                this.tickets[index].xk=0;
                this.$toast("取消收藏");
                return;
            }
            
        }
    }
    
}
</script>
<style lang="scss" scoped>

.ticket{
    width:100%;
    

        .ticket-item{
             width:100%;
            .goto{
            
            
            width:100%;
            height: 150px;
            display: flex;
            justify-content: space-between;
            padding-bottom:20px;
            border-bottom:1px solid #eee;
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
                .img-bott{
                    position: absolute;
                    width:110px;
                    height:25px;
                    line-height: 25px;
                    font-size:10px;
                    color:#fff;
                    background-color:rgba(0,0,0,0.5);
                    border-top-left-radius:3px;
                    border-top-right-radius:3px;
                    border-bottom-right-radius:8px;
                    border-bottom-left-radius:8px;
                    left:0;
                    bottom:0px;
                    z-index: 100;

                }
            }
            .item-r{
                width:55%;
                height:150px;
                margin:0 10px;
               position: relative;
                

                    .itm-r-tit{
                        width:100%;
                        height:20px;
                        
                        margin-top: 7px;

                        text-overflow:ellipsis;
                        white-space: nowrap;
                        overflow: hidden;
                        
                    

                        position:absolute;
                        top:0;
                        left:0;
                        
                    }
                    .r-l{
                    width:50%;
                    height:120px;
                    position: absolute;
                    top:30px;
                    left:0;
                        .itm-r-sc{
                            width:100%;
                            height:40px;
                            line-height:15px;
                            text-align: justify;

                            font-size:12px;
                            
                            position:absolute;
                            top:40%;
                            left:0;

                            p{
                                margin: 0;

                            }
                        }
                        .itm-r-bott{
                            width:100%;
                            height:30px;
                            position:absolute;
                            bottom:0;
                            left:0;
                            display: flex;
                            justify-content: space-between;
                            .addcart-btn{

                                width:20px;
                                height:20px;
                                line-height:20px;
                                border:1px solid #eee;
                                border-radius: 50%;
                                text-align: end;
                                
                                z-index:999;
                               position:absolute;
                                bottom:5px;
                                left:0;
                                .i1{
                                    display:none;
                                    font-size: 17px;
                                    position: absolute;
                                    top:0;
                                    left:0;
                                }
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
                                top:0;
                                left:0;
                                    
                                }
                            }
                            .xk{
                                display: inline-block;
                                width:30px;
                                height:30px;
                                
                                line-height:30px;
                                
                               

                                position:absolute;
                                bottom:0;
                                left:40px;
                                i{
                                    color:#fe5929;
                                }
                            }
                            .xk.on{
                                display: inline-block;
                                width:30px;
                                height:30px;
                                
                                line-height:30px;
                                
                                
                               

                                position:absolute;
                                bottom:0;
                                left:40px;
                                i{
                                    color:#fe5929;
                                }
                            }
                            
                            
                        }
                    }
                    .r-r{
                        
                        width:50%;
                        height:120px;
                        position: absolute;
                        top:30px;
                        right: 0;
                        .status.on{
                            position: absolute;
                            top:50px;
                            right:10px;
                            display: inline-block;
                            width:45px;
                            height:23px;
                            line-height: 23px;
                            font-size: 12px;
                            border:1px solid #f00;
                            color:red;

                            border-radius:5px;

                            }
                            .status.no{
                            position: absolute;
                            top:50px;
                            right:10px;
                            display: inline-block;
                            width:45px;
                            height:23px;
                            line-height: 23px;
                            font-size: 12px;
                            border:1px solid #eee;
                            color:#eee;

                            border-radius:5px;

                            }
                    
                    
                        .gm-btn{
                            width:50px;
                            height:25px;
                            font-size: 12px;
                            padding: 0;

                            background-color:#fe5929;//rgb(228, 69, 161)
                            color:#fff;

                            position: absolute;
                            top:88px;
                            right:10px;

                        
                        }
                        .gm-btn.ck{
                            background-color:#ff9d7f;//rgb(228, 69, 161)
                            color:#fff;
                        
                        }

                    }
                
        }

        }
    }
   
}

    


</style>