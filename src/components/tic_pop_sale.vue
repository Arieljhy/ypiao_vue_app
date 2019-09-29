<template>
    <div class="ticketps">
         <div class="slide">  
            <div class="slide-box">
                
                <div class="ticket-item slide-item" v-for="(item,index) of tickets" :key="index">
                
                <div class="goto" @click="goto(index)">

                <div class="item-t">
                    <span class="img-zk" v-show="item.zk==0?false:true"><span class="" v-text="item.zk" ></span>折</span>
                    
                    <img class="itm-l-img" :src=item.src alt="">
                    <div class="img-l">
                        <span class="focus_num">1305</span><br>
                        <span class="fg"></span>
                        <span class="gz">关注</span>
                    </div>
                </div>
                <div class="item-b">
                    
                    <div class="itm-tit" v-text="item.title"></div>
                    <div class="itm-price" >
                        <span>¥<span v-text="item.price">500</span>起</span>
                    </div>
                </div>
                
                
                
        </div>
            </div>
         </div>


        
        
    </div>
    </div>
</template>
<script>
//import Bus from '../assets/bus.js'
export default {
    data(){
        return{
            tickets:[{
            tic_id:1,
            zk:0,
            src:require("../../public/img/index/zkp2.jpg"),
            price:400,
            time:"2019.11.22-12.01",
            venu:"北京喜剧院",
            title:"【中鱼文化】神剧重燃！black Mary Poppins中文版《水曜日》第二轮",
            status:0,
            xk:0



            },{
            tic_id:2,
            zk:1,
            src:require("../../public/img/index/zkp4.jpg"),
            price:800,
            time:"2019.11.22-12.01",
            venu:"北京喜剧院",
            title:"【中鱼文化】神剧重燃！black Mary Poppins中文版《水曜日》第二轮",
            status:1,
            xk:0
            },{
            tic_id:3,
            zk:7.6,
            src:require("../../public/img/index/zkp3.jpg"),
            price:300,
            time:"2019.11.22-12.01",
            venu:"北京喜剧院",
            title:"【中鱼文化】神剧重燃！black Mary Poppins中文版《水曜日》第二轮",
            status:1,
            xk:0
            },{
            zk:0,
            src:require("../../public/img/index/zkp2.jpg"),
            price:500,
            time:"2019.11.22-12.01",
            venu:"北京喜剧院",
            title:"【中鱼文化】神剧重燃！black Mary Poppins中文版《水曜日》第二轮",
            status:0,
            xk:0
            },{
            zk:1,
            src:require("../../public/img/index/zkp4.jpg"),
            price:700,
            time:"2019.11.22-12.01",
            venu:"北京喜剧院",
            title:"【中鱼文化】神剧重燃！black Mary Poppins中文版《水曜日》第二轮",
            status:1,
            xk:0
            },{
                 tic_id:4,
                zk:7.6,
            src:require("../../public/img/index/zkp1.jpg"),
            price:1000,
            time:"2019.11.22-12.01",
            venu:"北京喜剧院",
            title:"【中鱼文化】神剧重燃！black Mary Poppins中文版《水曜日》第二轮",
            status:1,
            xk:0
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


.ticketps{
     width:100%;
    
    .slide{
        width:100%;
            .slide-box{
                    margin-top: 10px;
                    display: -webkit-box;
                    
                    overflow-x: scroll;
                    -webkit-overflow-scrolling:touch;
                }
                .slide-box::-webkit-scrollbar {
                    display: none;
                }
                .slide-item{
                    width: 140px;
                    height: 230px;

                    margin: 0.5%;
                    box-sizing: border-box;
                    padding: 3%;
                    
                    
                    
                }
        }

        .ticket-item{
            width:110px;
            height:200px;
            .goto{
                width:100%;
                height: 200px;
            .item-t{
                width:100%;
                height:150px;                
                border-radius: 5px;                
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
                .img-l{
                    position: absolute;
                    width:50px;
                    height:60px;
                    
                    font-size:10px;
                    color:#fff;
                    background-color:rgba(0,0,0,0.5);
                    border-radius:3px;
                    box-sizing: border-box;
                    padding: 3%;
                    text-align: center;
                   
                    left:0;
                    bottom:8px;
                    z-index: 100;
                    span{
                        width:100%;

                    }
                    .focus-num{
                        width:100%;
                        height:30px;

                    }
                    .fg{
                        display: inline-block;
                        width:100%;
                        height:0px;
                        border: 1px solid #fff;
                    }
                    .gz{
                        width:100%;
                        height:30px;
                    }

                }
            }
            .item-b{
                width:100%;
                height:60px;
                
               position: relative;
               
                

                    .itm-tit{
                        width:100%;
                        
                        height:35px;
                        
                        margin-top: 3px;
                        font-size: 12px;
                        text-overflow:ellipsis;
                        white-space: normal;
                        overflow: hidden;

                        display: -webkit-box;

                        -webkit-line-clamp: 2;

                        -webkit-box-orient: vertical;

                        
  
                        position:absolute;
                        top:0;
                        left:0;
                        
                    }
                .itm-price{
                  
                    height:20px;
                    margin-top: 1px;
                    color:#fe5929;
                    position:absolute;
                        top:40px;
                        left:10px;
                        

                }
                
        }

        }
    }
   
}

    


</style>