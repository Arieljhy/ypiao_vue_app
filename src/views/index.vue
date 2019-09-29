<template>
<div class="index">
    
    <div class="hedtit"> 
        <router-link to="/city" class="city_show left">北京<i class="iconfont hed_xx">&#xe63a;</i></router-link>
        <input type="text" class="city_search">
        <router-link to="/map" class="map_show"><i class="iconfont hed_xx">&#xe612;</i></router-link>
    </div>
    <div class="banner">
        <banner></banner>

    </div>
    <div class="index-center">
        <div class="cen-t">
            <div class="t-c">
                <div class="ych t-cc">
                    <router-link to="" class="to">
                        <i class="iconfont">&#xe895;</i>
                        <span>演唱会</span>
                    </router-link>

                </div>
                 <div class="yyh t-cc">
                    <router-link to="" class="to">
                        <i class="iconfont">&#xe621;</i>
                        <span>音乐会</span>
                    </router-link>

                </div>
                <div class="etqz t-cc">
                    <router-link to="" class="to">
                        <i class="iconfont">&#xe61b;</i>
                        <span>儿童亲子</span>
                    </router-link>

                </div>
                <div class="wdbl t-cc">
                    <router-link to="" class="to">
                        <i class="iconfont">&#xe6b0;</i>
                        <span>舞蹈芭蕾</span>
                    </router-link>

                </div>

            </div>
            <div class="t-c">
                <div class="hjgj t-cc">
                    <router-link to="" class="to">
                        <i class="iconfont">&#xe777;</i>
                        <span>话剧歌剧</span>
                    </router-link>

                </div>
                <div class="tyss t-cc">
                    <router-link to="" class="to">
                        <i class="iconfont">&#xe609;</i>
                        <span>体育赛事</span>
                    </router-link>

                </div>
                <div class="qyzt t-cc">
                    <router-link to="" class="to">
                        <i class="iconfont">&#xe61f;</i>
                        <span>曲苑杂坛</span>
                    </router-link>

                </div>
                <div class="djxx t-cc">
                    <router-link to="" class="to">
                        <i class="iconfont">&#xe61a;</i>
                        <span>休闲度假</span>
                    </router-link>

                </div>

            </div>
            
        </div>
        <div class="cen-b">
            <div class="b-l">
                <router-link  to="" class="to">
                <img src="../../public/img/index/c-l.png" alt="">
                </router-link>
            </div>
            <div class="b-r">
                
                <div class="r-t">
                    <router-link  to="" class="to">
                    <img src="../../public/img/index/c-r-t.png" alt="">
                    </router-link>
                </div>
                <div class="r-b">
                    <router-link  to="" class="to close">
                    <div >
                    </div>
                    </router-link>
                    <router-link  to="" class="to near">
                    <div ></div>
                    </router-link>
                </div>
            </div>
            
        </div>

    </div>
   
  
                  
    <div class="tickets">
        <div class="popular">
            <div class="top"> 
                <span class="s1">热门演出</span><span class="s2">|</span><span class="s3">Popular</span>
                <div class="gd">
                    <router-link to="/more_yc" class="to more">更多<i class="iconfont">&#xe728;</i></router-link>
                </div>
            </div>
            <popsal-list></popsal-list>
        </div>
        <div class="sale">
            <div class="top"> 
                <span class="s1">折扣专享</span><span class="s2">|</span><span class="s3">Sale</span>
                <div class="gd">
                    <router-link to="/more_yc" class="to more">更多<i class="iconfont">&#xe728;</i></router-link>
                </div>
            </div>
            <popsal-list></popsal-list>
        </div>

        <div class="hot">
            <div class="top"> 
                <span class="s1">热门推荐</span><span class="s2">|</span><span class="s3">Hot Events</span>
                <div class="gd">
                    <router-link to="/more_yc" class="to more">更多<i class="iconfont">&#xe728;</i></router-link>
                </div>
            </div>
            <ticket-list></ticket-list>
        </div>
        
        
    </div>

    <my-footer :selected=selected></my-footer>
</div>
</template>
<script>
import banner from '../components/banner.vue';
import popsalList from '../components/tic_pop_sale.vue';
import ticketList from '../components/ticket';
export default {
    data(){
        return{
            title:"主页",
            selected:"tab1"
        }
    },
    components:{
        banner,
        popsalList,
        ticketList
    },
    //修改列表页的meta值，false时再次进入页面会重新请求数据。
    beforeRouteLeave(to, from, next) { 
        from.meta.keepAlive = false;
        next();
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

.tickets{
    margin-top:30px;
    min-height: 1000px;
}
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
            .gd{
                width:20%;
                float: right;
                margin-right: 3%;
                .more{
                    float: right;
                    font-size:15px;
                    i{
                        font-size:15px;

                        color:#ff5533;
                    }
                }

            }
            
}
.index-center{
    width:100%;
    margin-top: 20px;
    .cen-t{
        width:100%;
        height:200px;
        .t-c{
            width:100%;
            height:100px;
            display: flex;
            justify-content: space-around;
           
            .t-cc{
                width:25%;
                height:100px;
               
                box-sizing: border-box;
                padding: 5%;
                position: relative;
               
                .to{
                    display: block;
                    width:100%;
                    height:100%;
                    text-align: center;
                   
                    line-height:90px;
                     
                    box-sizing: border-box;
                   

                    border-radius: 40%;
                    margin-top:-20%;

                    overflow: hidden;              
                    i{
                        display: block;
                        width:100%;
                        height:40px;
                        text-align: center;
                   
                    line-height:40px;                       
                        
                        font-size:35px;
                        margin: 10px 0;

                    }
                    
                }
                span{
                        display: block;
                        width:100%;
                        height:50%;
                        font-size: 15px;
                        margin-top:23%;
                        color:#000;
                        position: absolute;
                        top:15px;
                        right:3px;
                    }
                
            }
            .ych.t-cc .to{
                    background-color: rgb(255, 75, 139);
                    i{
                        background-color: rgb(255, 75, 139);
                        color: #fff;
                        
                    }
                    
                }
            .yyh.t-cc .to{
                    background-color: rgb(254, 126, 84);
                    i{
                        background-color: rgb(254, 126, 84);
                         color: #fff;
                    }
                }
            .etqz.t-cc .to{
                    background-color: rgb(245, 89, 112);
                    i{
                        background-color: rgb(245, 89, 112);
                         color: #fff;
                    }
                }
            .wdbl.t-cc .to{
                    background-color:  rgb(105, 154, 229);
                    i{
                        background-color:  rgb(105, 154, 229);
                         color: #fff;
                    }
                }
            .hjgj.t-cc .to{
                    background-color: rgb(210, 113, 231);
                    i{
                        background-color: rgb(210, 113, 231);
                         color: #fff;
                    }
                }
            .tyss.t-cc .to{
                    background-color: rgb(65, 185, 252);
                    i{
                        background-color: rgb(65, 185, 252);
                         color: #fff;
                    }
                }
            .qyzt.t-cc .to{
                    background-color: rgb(85, 217, 210);
                    i{
                        background-color: rgb(85, 217, 210);
                         color: #fff;
                    }
                }
            .djxx.t-cc .to{
                    background-color:rgb(255, 117, 148);
                    i{
                        background-color: rgb(255, 117, 148);
                         color: #fff;
                    }
                }
        }
    }
    .cen-b{
        width:100%;
        display: flex;
        justify-content: space-around;
        .b-l{
            width:40%;
            height:200px;
            border:1px solid #eee;
            border-radius: 10%;
            overflow: hidden;
            img{
                width:100%;
                height: 200px;
            }


        }
        .b-r{
            width:60%;
            height:200px;

            .r-t{
                width:100%;
                height:100px;
                border:1px solid #eee;
                border-radius: 10%;
                background-image: url(../../public/img/index/c-r-t.png);
                background-size: 100%;
                background-repeat: no-repeat;
              
                background-color: #fff;
                
                img{
                     width:100%;
                height:100px;
                }

            }
            .r-b{
                width:100%;
                height:100px;
                
                display: flex;
                justify-content: space-around;
                .near{width:50%; height:100px;
                border:1px solid #eee;
                border-radius: 10%;
                background-image: url(../../public/img/index/c-r-b-l.png);
                background-size: 100%;
                background-repeat: no-repeat;
                
                }
                .close{width:50%; height:100px;
                border:1px solid #eee;
                border-radius: 10%;
                background-image: url(../../public/img/index/c-r-b-r.png);
                background-size: 100%;
                background-repeat: no-repeat;
                }
            }
        }
    }
}

    
</style>