function lunbo(){
      //初始化
          var size = $(".ban li").size();  //获取图片的个数
          console.log(size)
          for(var i=1;i<=size;i++){ //创建图片个数相对应的底部数字个数
            var li="<li>"+"</li>";  //创建li标签，并插入到页面中
            $("#banner-ye").append(li);
          }
          
          //手动控制图片轮播
          $(".ban li").eq(0).show();  //显示第一张图片
          $("#banner-ye li").eq(0).addClass("hover");  //第一张图片底部相对应的数字列表添加hover类
          $("#banner-ye li").mouseover(function(){
            $(this).addClass("hover").siblings().removeClass("hover");  //鼠标在哪个数字上那个数字添加class为hover
            var index=$(this).index();  //定义底部数字索引值
            i=index;  //底部数字索引值等于图片索引值
            $(".ban li").eq(index).stop().fadeIn(300).siblings().stop().fadeOut(300); //鼠标移动到的数字上显示对应的图片
          });
          
          //自动控制图片轮播
          var i=0;  //初始i=0
          var t=setInterval(move,5000);  //设置定时器，1.5秒切换下一站轮播图
          //向左切换函数
          function moveL(){
            i--;
            if(i==-1){
              i=size-1;  //如果这是第一张图片再按向左的按钮则切换到最后一张图
            }
            $("#banner-ye li").eq(i).addClass("hover").siblings().removeClass("hover");  //对应底部数字添加背景
          $(".ban li").eq(i).fadeIn(300).siblings().fadeOut(300);  //对应图片切换
          }
          //向右切换函数
          function move(){
            i++;
            if(i==size){
              i=0;  //如果这是最后一张图片再按向右的按钮则切换到第一张图
            }
            $("#banner-ye li").eq(i).addClass("hover").siblings().removeClass("hover");  //对应底部数字添加背景
            $(".ban li").eq(i).fadeIn(300).siblings().fadeOut(300);  //对应图片切换
          }
          //左按钮点击事件
          $(".banner-l").click(function(){
            moveL();  //点击左键调用向左切换函数
          })
          //右按钮点击事件
          $(".banner-r").click(function(){
            move();    //点击右键调用向右切换函数
          })
          //定时器开始与结束
          $(".banner").hover(function(){
            clearInterval(t); //鼠标放在轮播区域上时，清除定时器
          },function(){
            t=setInterval(move,5000);  //鼠标移开时定时器继续
          })
}

// // 头部下拉列表
$('.hed-ul li').hover(function(){
    $(this).find('.xl-xs-1').finish().fadeIn(500);
},function(){
    $(this).find('.xl-xs-1').finish().fadeOut(500);
})

// 海报弹出层
$('.haibao').hover(function(){
    $(this).find('.haibao-xx').stop().animate({bottom: 0},300);
},function(){
    $(this).find('.haibao-xx').stop().animate({bottom: -75},300);
});

// 点击侧面导航返回顶部
$("#menu .lt-fding").click(function(){
    $("body,html").animate({scrollTop:0}, 1000);
    return false;
})

var _index=0;
$("#menu ul li").click(function(){
    $(this).find("span").addClass("wenzi-on").parent().siblings().find("span").removeClass("wenzi-on");
    var _index=$(this).index()+1;
     console.log(_index)  
    var _top=$("#louti"+_index).offset().top;   //通过拼接字符串获取元素，再取得相对于文档的高度
     console.log(_top);    
    $("body,html").animate({scrollTop:_top},500);   //scrollTop滚动到对应高度 
});
var nav = $("#menu");
var win = $(window);
var sc = $(document);
win.scroll(function() {
      if(sc.scrollTop()>=600){
          var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
          if(windowWidth<1400){
              nav.hide();
          }else{
              nav.show();
          }
          var index = Math.floor(sc.scrollTop()/500);
          $("#menu ul li span").eq(index-1).addClass("wenzi-on").parent().siblings().find("span").removeClass("wenzi-on");
      }else{
          nav.hide();    //导航隐藏
      };
});
// 排行选项卡
$('.ph-lb-1 a').on('mouseover',function(){
    var index = $(this).index();
    $(this).addClass('lb-on').siblings().removeClass('lb-on');
    $('https://images.ypiao.com/static/js/.ph-o-1 .yr').eq(index).addClass('yr-on').siblings().removeClass('yr-on');
});

$('.xz-piaojia').on('click','.cc-price',function(){
    $(this).addClass('changci-on').siblings().removeClass('changci-on');
    var priceId = $(this).attr('id').substr(2);
    venusMapObj.showByPriceId(priceId);
})
$('.xz-shuliang li').click(function(){
    $(this).addClass('changci-on').siblings().removeClass('changci-on');
})
$(".changcilb-lb").hover(function() {
    $(this).find('.lb-goumai').addClass('changci-on');
}, function() {
    $(this).find('.lb-goumai').removeClass('changci-on');
    //
});

// 项目详情楼梯导航
$('.xiangqing-xz li').click(function(){
    var _index= $(this).index()+1;
    var _top =parseInt($("#xz"+_index).offset().top-100);
    $("body,html").animate({scrollTop:_top},500);
})

//项目列表页---js

// 图片懒加载
// $(".cc-haibao,.top-w img,.zuoweitu-tu img,.yiren-xinxi img,.xiangqing-wz .xiangqing-haibao img").lazyload({failure_limit : 30,effect:"fadeIn"});

// 分页点击变换底色
$('.fy-li').click(function(){
    $(this).addClass('fy-li-on').siblings().removeClass('fy-li-on');
})
