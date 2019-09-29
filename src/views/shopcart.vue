<template>
<div>
     <div class="header">
        <mt-header class="head">
            <span slot="left" v-text="title"></span>
            <mt-button slot="right" @click="gl_change" v-text="gl_tit"> </mt-button>
        </mt-header>
    </div>
    <div class="zhezhao"></div>
    <div class="all">
    <div class="cart-content">

        <div class="selectall">
           <span>共<span class="" v-text="alltitnum"></span>种票</span>
        </div>

        <div class="cart-items" v-for="(item,index) of cartlist" :key="index">
            <mt-cell-swipe class="itm-swipe"
                :right="[
                    {
                    content:'删除',
                    style: { background: 'red', color: '#fff' },
                    handler: () => this.$messagebox('delete')
                    }
                ]">
                <div class="cart-item" slot="title">  
                    <div class="itm-checkbox">
                        <input type="checkbox"  v-model="checklist" :value="item.tic_id" :checked="item.ifcheck" >
                    </div>
                    <div class="ticket-item">
                        <div class="item-l">
                            <span class="img-zk" v-show="item.zk==0?false:true"><span class="" v-text="item.zk">7.6</span>折 </span>
                            <img class="itm-l-img" :src=item.sr alt="">
                            
                        </div>
                        <div class="item-r">
                            <div class="itm-r-tit" v-text="item.tic_title">
                            
                                 
                            
                            </div>
                            <div class="itm-r-sc">
                                <p class="sj" v-text="item.tic_time"></p>
                                <p class="cg" v-text="item.tic_venue">北京喜剧院</p>
                            </div>
                            <div class="itm-r-bott" >
                                <span class="price">¥
                                    <span class="pri" v-text="item.sin_price">500</span>
                                </span>
                                <span class="number">
                                    <mt-button class="reduce btn" @click="count_change(index,-1)">-</mt-button>
                                    <span class="num" v-text="item.count">123</span>
                                    <mt-button class="add btn" @click="count_change(index,1)">+</mt-button>
                                </span>
                            </div>

                        </div>
                    
                    </div>
                 </div>
            </mt-cell-swipe>

        </div>            

    </div>

    <div class="foot-fixed">
        <div class="selectall" @click="checkAll">
            <input type="checkbox" v-model="checked"/><span>全选</span>
        </div>
        <div class="gl2"  v-if="glstate">
            <span class="s1">不含运费</span>  
           <span class="s2">
               <span>合计:</span>
               <span class="prii">¥<span class="all_pri" v-text="allprice">99</span></span>
           </span>
            <mt-button class="gm-btn" @click="buy">购买</mt-button>
        </div>
        <div class="gl1" v-else>
            <span>清理</span>
            <mt-button size="small" class="btn addscj">移入收藏夹</mt-button>
            <mt-button size="small" class="btn delect" @click="deltick">删除</mt-button>
        </div>           
    </div>    
    <my-footer :selected=selected></my-footer>
    </div>
</div>
</template>
<script>
import { MessageBox } from 'mint-ui';
export default {
    data(){
        return{
            title:"购物车",
            selected:"tab2",
            glstate:true,
            gl_tit:"管理",
            checked:false,
            checklist:[],
            allprice:0,

            cartlist:[{
                zk:1,
                tic_id:1,
                tic_title:"【中鱼文化】神剧重燃！black Mary Poppins中文版《水曜日》第二轮suigvuyefbcuaeksbviuadfvsd",
                tic_time:"2019.11.22-12.01",
                tic_venue:"北京喜剧院",
                price:500,
                sin_price:0,
                count:1,
                ifcheck:true,
                sr:require("../../public/img/index/zkp1.jpg")
                
            },{
                tic_id:2,
                zk:2,
                tic_title:"【中鱼文化】神剧重燃！black Mary Poppins中文版《水曜日》第二轮suigvuyefbcuaeksbviuadfvsd",
                tic_time:"2019.11.22-12.01",
                tic_venue:"北京2",
                price:800,
                sin_price:0,
                count:2,
                ifcheck:true,
                sr:require("../../public/img/index/zkp2.jpg")
            },{
                tic_id:3,
                zk:0,
                tic_title:"【中鱼文化】神剧重燃！black Mary Poppins中文版《水曜日》第二轮suigvuyefbcuaeksbviuadfvsd",
                tic_time:"2019.11.22-12.01",
                tic_venue:"北京3",
                price:1000,
                sin_price:0,
                count:3,
                ifcheck:false,
                sr:require("../../public/img/index/zkp3.jpg")
            }],
            alltitnum:0 
        }
    },
    created(){
        this.rend()
        this.allcount()
        this.sinprice()
    },
    watch:{
        
    　　checklist(){
            this.calcTotalPrice();
    　　     if(this.checklist.length==this.cartlist.length){
                    this.cartlist.forEach((item)=>{
                    item.ifcheck=true;
                    });
                this.checked=true;
    　　　　        }else{
                    this.checklist.forEach((e)=>{
                    this.cartlist.forEach((item,index)=>{
                            if(e==item.tic_id){
                                this.cartlist[index].ifcheck=true;
                            }
                            else{
                                this.cartlist[index].ifcheck=false;
                            }
                        });
                    });
                this.checked=false;
    　　　　    }  
    　　}       
    },
    methods:{
        rend(){
            console.log(sessionStorage.userinfo);
        },
        allcount(){
            this.alltitnum=this.cartlist.length; 
        },
        sinprice(){  
            this.cartlist.forEach((item)=>{
                item.sin_price=item.price*item.count;
            })
        },
        gl_change(){
            if(this.glstate
            ==true){
                this.gl_tit="完成"
                this.glstate=false
                return;               
            }else{
                this.gl_tit="管理"
                this.glstate=true
                return;               
            }
        },
        count_change(index,num){
            
            if(this.cartlist[index].count!=0&&num==-1){
                this.cartlist[index].count--;
                
                this.cartlist[index].sin_price=this.cartlist[index].count*this.cartlist[index].price;
                this.calcTotalPrice();
                if(this.cartlist[index].count==0){
                    MessageBox({
                        title: 'Notice',
                        message: '是否删除此商品?',
                        showCancelButton: true
                    }).then(action => {
                        if(action == 'confirm'){
                            this.cartlist[index]. 
                            console.log('删除成功');
                        }else{
                            this.cartlist[index].count=1;
                            this.cartlist[index].sin_price=this.cartlist[index].count*this.cartlist[index].price;
                            
                            this.checklist.forEach((e)=>{
                                if(e==this.cartlist[index].tic_id){
                                   this.checklist.splice(this.checklist.indexOf(e),1);
                                   //console.log(this.checklist.splice(this.checklist.indexOf(e),1));
                                }

                            });
                            console.log('取消删除');
                        }  
                    }).catch(() => {
                        console.log("error");
                    });
                    this.cartlist[index].count=0;
                }     
            }
            if(this.cartlist[index].count!=6&&num==1){
                this.cartlist[index].count++;
                this.cartlist[index].sin_price=this.cartlist[index].count*this.cartlist[index].price;
                this.calcTotalPrice();
                if(this.cartlist[index].count==6){
                    this.$toast("最多购买6张");
                }
            }

        },
        calcTotalPrice(){
            this.allprice = 0;//每次遍历商品之前对总金额进行清零
            //console.log(this.checklist);
            this.checklist.forEach((e) => {//遍历商品，如果选中就进行加个计算，然后累加
                this.cartlist.forEach((item,index)=>{
                    if (e==item.tic_id){
                        this.allprice+=item.price * item.count;//累加的
                    }        
                });    
            });
        },
        checkAll(){
            if(this.checked){
                this.checklist=[];
            }
            else{this.cartlist.forEach((e)=>{
                　 if(this.checklist.indexOf(e.tic_id)==-1){
            　　    　this.checklist.push(e.tic_id)
            　　　　 }
                })
            }
        },
        deltick(){
            if(this.checklist.length!=0){
                MessageBox({
                        
                    message: '是否删选中商品?',
                    showCancelButton: true
                }).then(action => {
                    if(action == 'confirm'){
                        this.checklist.forEach((e)=>{
                        this.cartlist.forEach((item,ind)=>{
                            if(item.tic_id==e){
                            this.cartlist.splice(ind,1);
                            }
                        })
                    });
                    this.allcount();
                            
                    this.calcTotalPrice();
                    //this.sin_price();
                            
                            
                    console.log('删除成功');
                    }else{
                
                        console.log('取消删除');
                    }  
                }).catch(() => {
                        console.log("error");});
                    
            }
        },
        buy(){
            
        }
    
    }
    
}
</script>
<style lang="scss" scoped>
.zhezhao{
    width:100%;
    height:500;
    background-color:#fff;
}
.all{
    width:100%;
}
.header{
    width: 100%;
    .head{
   width: 100%;
    height: 50px;
    line-height: 45px;
    background-color: #fe5929;
    border-radius: 3px;
   
    font-size: 16px;
    }
}
.cart-content{
    width:100%;
    min-height:500px;
    
    .selectall{
        width:100%;
        box-sizing: border-box;
        padding:0 3%;
        height:30px;
        line-height:30px;
        text-align: justify;
        background-color: #eee;
    }
    .cart-items{
        width:100%;
        box-sizing: border-box;
        
        .itm-swipe{
        width:100%;
        margin-top:10px;
            
        .cart-item{
            width:100%;
            display: flex;
            justify-content: space-between;
            
            .itm-checkbox{
                width:5%;
                height: 150px;
                line-height: 150px;

            }
            .ticket-item{
                width:95%;
                
                
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
                    margin:0 10px;
                    position: relative;
                    .itm-r-tit{
                        width:90%;
                        height:40px;
                        margin-top: 7px;

                        text-overflow:ellipsis;
                        white-space: nowrap;
                        overflow: hidden;

                        position:absolute;
                        top:0;
                        left:0;
                        
                    }
                    .itm-r-sc{
                        width:90%;
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
                        width:98%;

                        position:absolute;
                        bottom:0;
                        left:0;
                        display: flex;
                        justify-content: space-between;
                        .price{
                            color:#fe5929;
                        }

                        .number{
                            width:60%;
                            display: flex;
                            justify-content: space-around;
                            .btn{
                                margin:0;
                                padding:0;
                                width:30%;
                                height:20px;
                                line-height:20px;
                                font-size:10px;
                                border-radius: 10%;
                            }
                            .num{
                                width:40%;
                                border:1px solid #eee;
                            }
                        }
                        .add-btn{

                            width:20%;
                            height:25px;
                            z-index:999;
                            position: relative;
                            .i1{
                                font-size: 20px;
                                position: absolute;
                                top:0;
                                left:0;
                            }
                            .i2{
                                width:10px;
                                font-size: 8px;
                                position: absolute;
                                top:10px;
                                left:17px;
                                }
                            }
                    
                        }
                }
                
            }
        }
    }
    }
    
}
.foot-fixed{
    width:100%;
    height:50px;
    line-height:50px;
    background-color: #eee;
    position:fixed;
    bottom:60px;

    display: flex;
    justify-content: space-between;
    .selectall{
        width:40%;
        text-align: justify;
    }
    .gl1{
        width:60%;
        text-align: end;
        span{
            font-size:8px;
        }
        .btn{
            margin-left:3%;
        }
        .btn.addscj{
            border:1px solid #fe5929;
            color:#fe5929;
        }
        .btn.delect{
            border:1px solid rgb(228, 69, 161);
            color:rgb(228, 69, 161);
        }
    }
    .gl2{
        width:60%;
        text-align: end;
        .s1{
            width:35%;
            font-size:8px;
            
        }
        .s2{
            width:35%;
            margin-left:3%;
            .prii{
                margin-left:3%;
                color:#fe5929;
            }

        }
        .gm-btn{
        
       width:30%;
        font-size: 12px;
        margin-left:6%;
        

        background-color:rgb(228, 69, 161);
        color:#fff;

    }
    }
    
}
    
</style>