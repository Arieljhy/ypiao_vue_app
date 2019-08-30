<template>
<div>
    <div class="wd-top">
        <div class="wd-dongxi" style="display:none;">
            <div class="wd-tx">
                <img src="../assets/girl.png" alt="头像">
            </div>
            <p class="wd-center">
                <span class="uname">Ariel</span>
                <span class="phone">18266647973</span>
            </p>
            <router-link to="/wdsz" class="to">
            <i class="iconfont wd-sz">&#xe615;</i>
            </router-link>
        </div>
        <div class="wd-dz-li">
            <router-link to="/login" class="to">登录</router-link>
            <span class="fg">|</span>
            <router-link to="/register" class="to">注册</router-link>

        </div>
        <div class="wd-xq">
            <div class="xq-xm xm-xk"> 
                <router-link to="" class="to">
                    <span>0个</span>
                    <span>想看</span>
                </router-link></div>
            <span class="fg fg1">|</span>
            <div class="xq-xm xm-yhq">
                <router-link to="" class="to">
                    <span>0个</span>
                    <span>优惠券</span>
                </router-link>
            </div>
            <span class="fg fg2">|</span>
            <div class="xq-xm xm-ye">
                 <router-link to="" class="to">
                     <span>0元</span>
                    <span>余额</span>
                </router-link>
            </div>


        </div>

    </div>

    <div class="my-order">
        <div class="order-title">
            <span class="l l-tit">我的订单</span>
            <router-link class="r r-tit" to="/order" >全部订单></router-link>
        </div>
        <div class="order-states">
            <router-link to="" class="to">
                <i class="iconfont">&#xe619;</i>
                <span>待付款</span>
            </router-link>
            <router-link to="" class="to">
                <i class="iconfont">&#xe60a;</i>
                <span>待发货</span>
            </router-link>
            <router-link to="" class="to">
                <i class="iconfont">&#xe671;</i>
                <span>待取票</span>
            </router-link>
            <router-link to="" class="to">
                <i class="iconfont">&#xe610;</i>
                <span>已发货</span>
            </router-link>

        </div>

    </div>
    
  <!-- -->
    <div class="wd-list">
        
            <router-link to="" class="to">
                <div class="list-item">
                    <span class="list-tit l">我的抢票</span>
                    <i class="iconfont r">&#xe87a;</i>
                </div>
            </router-link>
        
         
             <router-link to="" class="to">
                 <div class="list-item">
                    <span class="list-tit l">推荐有奖</span>
                    <i class="iconfont r">&#xe666;</i>
                </div>
            </router-link>
        
         
             <router-link to="" class="to">
                 <div class="list-item">
            <span class="list-tit l"> 欢迎评分</span>
            <i class="iconfont r">&#xe603;</i>
            </div>
            </router-link>
        
         
             <router-link to="" class="to">
                 <div class="list-item">
            <span class="list-tit l">帮助与客服</span>
            <i class="iconfont r">&#xe604;</i>
            </div>
            </router-link>
        
         
             <router-link to="" class="to">
                 <div class="list-item">
            <span class="list-tit l">关于我们</span>
            <i class="iconfont r">&#xe62d;</i>
            </div>
            </router-link>
        
    </div>
    <my-footer :selected=selected></my-footer>
</div>
</template>
<script>
export default {
    data(){
        return{
            title:"我的",
            selected:"tab4"
        }
    }   
}
</script>
<style lang="scss" scoped>
.l{
    float: left;
    margin-left: 20px;
}
.r{
    float: right;
    margin-right: 20px;
}
.to{
    text-decoration: none;
    font-style: normal;
    color: #111222;
}
.wd-top{
     
     height:200px;
     padding: 20px;
      background-color: #fe5929;
      position: relative;
      border-bottom-left-radius: 20%;
      border-bottom-right-radius: 20%;
        .wd-dongxi{
            width:80%;
            height:100px;
            padding: 20px;
            position: absolute;
            top:50px;
                .wd-tx{
                    width:60px;
                    height:60px;
                    border-radius:50%; 
                    background-color: #fff;
                    position: absolute;
                    top:25px; 
                    img{
                        width:61px;
                    height: 61px;}
                }
                .wd-center{
                    width:130px;
                    height:100px;
                    margin: 0 10px;
                    line-height: 25px;
                    position: absolute;
                    top:25px;
                    left:70px;
                    span{ 
                        display: block;
                        margin: 5px 20px;
                        float: left;
                        color: #fff;
                    }
                }
                .wd-sz{
                    position: absolute;
                    right:20px;
                    top:20px;
                    color: #fff;
                }

        }
        .wd-xq{
            width:81%;
            height:100px;
            background-color:#fff;
            box-shadow:0 0 8px #ddb9ae; 
            border-radius: 5px;
            position: absolute;
            top: 170px;
            left: 35px;
            .xq-xm{
                width: 25%;
                height: 50%;
                position: absolute;

                .to{
                    font-style: normal;
                    text-decoration: none;
                    span{
                    display: block;
                    font-size:15px;
                    color:#fe5929;
                }

                }
                
            }
            .xq-xm.xm-xk{
                top:25%;
                left:0;
            }
            .xq-xm.xm-yhq{
                top:25%;
                left:35%;
            }
            .xq-xm.xm-ye{
                top:25%;
                left:70%;
            }
            span.fg{
                display: inline-block;
                position: absolute;
                font-size:40px;
                color:#fe5929;
            }
            span.fg1{
                top:25%;
                left:30%;
            }
            span.fg2{
               top:25%;
                left:65%;
               
                
            }
        }
           
}
.wd-dz-li{
    position: absolute;
    top: 90px;
    left:40px;
    color: #fff;
    font-size:25px;
    .to{
        color:#fff;
        margin:5px;
    }
}

.my-order{
    width:100%;
    height: 130px;
    position: relative;
    margin-top:50px;
    .order-title{
        height: 70px;
        width:100%;
        position: absolute;
        top: 0px;
        font-size: 15px;
        margin-bottom: 10px;
        .l-tit{
            border-bottom: 1px solid #fe5929;
            font-size: 16px;
        }
        .r-tit{
            text-decoration: none;
            font-style: normal;
            color: #111333;
        }
    }
    .order-states{
        position: relative;
        top:40px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        .to{
            display: inline-block;
            width:22%;

            i{
                display: block;
                font-size:28px;
                color:#fe5929;
                margin:5px;
            }
            span{
                display: block;
                font-size: 12px;
            }
            
        }

    }

}
.wd-list{
    margin-bottom: 80px;
    .list-item{
        width:100%;
        height:50px;
        line-height: 50px;
        border-bottom:1px solid #eee;
    }
}
    

    
</style>