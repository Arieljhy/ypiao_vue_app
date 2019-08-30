
//输入框点击变长
$('.su-ipt').focus(function() {
    $(this).animate({width: "275"}, 300)
});
$('.su-ipt').focusout(function(event) {
    $(this).animate({width: "246"}, 300)
});

$('.jieguo-top li a').click(function(){
    $(this).addClass('paixu-on').siblings().removeClass('paixu-on');
});

// // 头部下拉列表
$('.hed-ul li').hover(function(){
    $(this).find('.xl-xs-1').finish().fadeIn(500);
},function(){
    $(this).find('.xl-xs-1').finish().fadeOut(500);
});


var InterValObj; //timer变量，控制时间
var count = 900; //间隔函数，1秒执行
var curCount;//当前剩余秒数
var code = ""; //验证码
var codeLength = 6;//验证码长度
//注册
function sendMessage() {
    var csrfToken = $('meta[name="csrf-token"]').attr("content");
    curCount = count;
    var phone=$(".dz-ipu-sj1").val();//手机号码
    var token = $("#token").val();
    var csessionid = $("#csessionid").val();
    var sig = $("#sig").val();
    var scene = $("#scene").val();
    if(phone != ""){
        //产生验证码
        for (var i = 0; i < codeLength; i++) {
            code += parseInt(Math.random() * 9).toString();
        }
        //设置button效果，开始计时
        $(".dz-yanzhengma").attr("disabled", "true");
        $(".dz-yanzhengma").val(curCount + "秒后重新发送");
        $(".dz-yanzhengma").css("color","#ccc");
        InterValObj = window.setInterval(SetRemainTime, 1000); //启动计时器，1秒执行一次
        //向后台发送处理数据
        $.ajax({
            url:'/user/send-code/',
            type: 'post',
            data: {
                'mobile':phone,
                '_csrf':csrfToken,
                'token':token,
                'csessionid':csessionid,
                'sig':sig,
                'scene':scene
            },
            success: function (data) {
                data = JSON.parse(data);
                $('.TANcHUAG').fadeIn(300).delay(5000).fadeOut(400);
                if(data.status == 'true') {
                    $('.TANcHUAG').find('.allTan').text('发送成功');
                }else{
                    $('.TANcHUAG').find('.allTan').text(data.data);
                }
                return false;
            },
//            error: function () {
//                layer.msg('ajax error!');
//            }
        });
    }else{
        $('.TANcHUAG').fadeIn(300).delay(5000).fadeOut(400);
        $('.TANcHUAG').find('.allTan').text('手机号码不能为空');
    }
}
//重置
function _sendMessage() {
    var csrfToken = $('meta[name="csrf-token"]').attr("content");
    curCount = count;
    var phone=$(".dz-ipu-sj2").val();//手机号码
    var token = $("#token").val();
    var csessionid = $("#csessionid").val();
    var sig = $("#sig").val();
    var scene = $("#scene").val();
    if(phone != ""){
        //产生验证码
        for (var i = 0; i < codeLength; i++) {
            code += parseInt(Math.random() * 9).toString();
        }
        //设置button效果，开始计时
        $(".dz-yanzhengma").attr("disabled", "true");
        $(".dz-yanzhengma").val(curCount + "秒后重发");
        $(".dz-yanzhengma").css("color","#ccc");
        InterValObj = window.setInterval(SetRemainTime, 1000); //启动计时器，1秒执行一次
        //向后台发送处理数据
        $.ajax({
            url:'/user/send-code/',
            type: 'post',
            data: {
                'mobile':phone,
                '_csrf':csrfToken,
                'token':token,
                'csessionid':csessionid,
                'sig':sig,
                'scene':scene
            },
            success: function (data) {
                data = JSON.parse(data);
                $('.TANcHUAG').fadeIn(300).delay(5000).fadeOut(400);
                if(data.status == 'true') {
                    $('.TANcHUAG').find('.allTan').text('发送成功');
                }else{
                    $('.TANcHUAG').find('.allTan').text(data.data);
                }
                return false;
            },
//            error: function () {
//                layer.msg('ajax error!');
//            }
        });
    }else{
        $('.TANcHUAG').stop(true).fadeIn(300).delay(5000).fadeOut(400);
        $('.TANcHUAG').find('.allTan').text('手机号码不能为空');
    }
}
//timer处理函数
function SetRemainTime() {
    if (curCount == 0) {
        window.clearInterval(InterValObj);//停止计时器
        $(".dz-yanzhengma").removeAttr("disabled");//启用按钮
        $(".dz-yanzhengma").val("重新发送验证码");
        $(".dz-yanzhengma").css("color","#ff6633");
        code = ""; //清除验证码。如果不清除，过时间后，输入收到的验证码依然有效
    }
    else {
        curCount--;
        $(".dz-yanzhengma").val(curCount + "秒后重发");
        $(".dz-yanzhengma").css("cursor","not-allowed");
    }
}



$('#login').submit(function(){
    var mima = $('.dz-ipu-mima').val();
    var phone = $('.dz-ipu-sj').val()
    var url = $('#url').val();
    if(phone==''){
        $('.TANcHUAG').stop(true).fadeIn(300).delay(5000).fadeOut(400);
        $('.TANcHUAG').find('.allTan').text('请输入手机号');
        return false;
    }else if(mima==''){
        $('.TANcHUAG').stop(true).fadeIn(300).delay(5000).fadeOut(400);
        $('.TANcHUAG').find('.allTan').text('请输入密码');
        return false;
    }else if(!(/^1[34578]\d{9}$/.test(phone))){
        $('.TANcHUAG').stop(true).fadeIn(300).delay(5000).fadeOut(400);
        $('.TANcHUAG').find('.allTan').text('请输入正确的手机号');
        return false;
    }else{
        $('.dz-denglu').val('正在登录...');
    }
});

$('#register').submit(function(){
    var mima_zhuce = $('.dz-ipu-mima1').val();
    var yanzhenma_zhuce = $('.dz-ipu-1').val();
    var nicheng_zhuce = $('.dz-ipu-nicheng').val();     //获取用户昵称
    var phone1 = $('.dz-ipu-sj1').val();
    var xingbie = $("input[type='radio']:checked").val();    //获取多选框val值
    var url = $('#url').val();
    if(phone1==''){
        $('.TANcHUAG').stop(true).fadeIn(300).delay(5000).fadeOut(400);
        $('.TANcHUAG').find('.allTan').text('请输入手机号');
        return false;
    }else if(yanzhenma_zhuce==''){
        $('.TANcHUAG').stop(true).fadeIn(300).delay(5000).fadeOut(400);
        $('.TANcHUAG').find('.allTan').text('请输入验证码');
        return false;
    }else if(mima_zhuce==''){
        $('.TANcHUAG').stop(true).fadeIn(300).delay(5000).fadeOut(400);
        $('.TANcHUAG').find('.allTan').text('请输入密码');
        return false;
    }else if(nicheng_zhuce==''){
        $('.TANcHUAG').stop(true).fadeIn(300).delay(5000).fadeOut(400);
        $('.TANcHUAG').find('.allTan').text('请输入姓氏');
        return false;
    }else if(!(/^1[34578]\d{9}$/.test(phone1))){
        $('.TANcHUAG').stop(true).fadeIn(300).delay(5000).fadeOut(400);
        $('.TANcHUAG').find('.allTan').text('请输入正确的手机号');
        return false;
    }else{
        $('.dz-denglu').val('注册并登录中...');
    }
});

$('.su-wd').hover(function(){
    $('.wd-tanchuang2').show();
},function(){
    $('.wd-tanchuang2').hide();
});

// 重置密码
$('#register-pwd').submit(function(){
    var mima_zhaohui = $('.dz-ipu-mima2').val();
    var yanzhenma_zhaohui = $('.dz-ipu-2').val();
    var phone2 = $('.dz-ipu-sj2').val();
    if(phone2==''){
        $('.TANcHUAG').stop(true).fadeIn(300).delay(5000).fadeOut(400);
        $('.TANcHUAG').find('.allTan').text('请输入手机号');
        return false;
    }else if(yanzhenma_zhaohui==''){
        $('.TANcHUAG').stop(true).fadeIn(300).delay(5000).fadeOut(400);
        $('.TANcHUAG').find('.allTan').text('请输入验证码');
        return false;
    }else if(mima_zhaohui==''){
        $('.TANcHUAG').stop(true).fadeIn(300).delay(5000).fadeOut(400);
        $('.TANcHUAG').find('.allTan').text('请输入密码');
        return false;
    }else if(!(/^1[34578]\d{9}$/.test(phone2))){
        $('.TANcHUAG').stop(true).fadeIn(300).delay(5000).fadeOut(400);
        $('.TANcHUAG').find('.allTan').text('请输入正确的手机号');
        return false;
    }else{
        $('.dz-denglu').val('正在重置...');
    }
});


// 重置
function keyLogin2(e){
    e = e||event;
    if(e.keyCode == 13){
        $('.dz-denglu3').click();
    }
    return;
}
// 搜索
function keyLogin3(e){
    e = e||event;
    if(e.keyCode == 13){
        $('.su-tb').click();
    }
    return;
}
// 登陆注册弹窗关闭
function tcguabi(obj){
    $('.dengluzhuce').fadeOut();
}




/**
  * 解决IE下不支持placeholder属性
  * 可以根据自己的需要去扩展
  * ps:写的很简单  根据自己的需求来  不喜勿喷
*/
 ;
 (function($) {
     $.fn.placeholder = function(options) {
         var opts = $.extend({}, $.fn.placeholder.defaults, options);
         var isIE = document.all ? true : false;
         return this.each(function() {
             var _this = this,
                 placeholderValue = _this.getAttribute("placeholder"); //缓存默认的placeholder值
             if (isIE) {
                 _this.setAttribute("value", placeholderValue);
                 _this.onfocus = function() {
                     $.trim(_this.value) == placeholderValue ? _this.value = "" : '';
                 };
                 _this.onblur = function() {
                     $.trim(_this.value) == "" ? _this.value = placeholderValue : '';
                 };
             }
         });
     };
 })(jQuery);

//用户注册
function AjaxRegister(mobile,password,code,nickname,sex,url) {
    var csrfToken = $('meta[name="csrf-token"]').attr("content");
    $("#login").submit();
    return;
    $.ajax({
        url:'/user/check-register',
        type: 'post',
        data: {
            mobile:mobile,
            password:password,
            code:code,
            nickname:nickname,
            sex:sex,
            _csrf:csrfToken

        },
        dataType:'json',
        success: function (data) {
            if(data.result.error_code) {
                $('.TANcHUAG').stop(true).fadeIn(300).delay(5000).fadeOut(400);
                $('.TANcHUAG').find('.allTan').text(data.result.message);
                return false;
            } else {
                $('.TANcHUAG').stop(true).fadeIn(300).delay(5000).fadeOut(400);
                $('.TANcHUAG').find('.allTan').text('注册成功');
                window.location.href=url;
            }
        },
//            error: function () {
//                layer.msg('ajax error!');
//            }
    });
}

//用户找回密码
function AjaxGetPassword(mobile,password,code) {
    var csrfToken = $('meta[name="csrf-token"]').attr("content");
    $.ajax({
        url:'/user/register-password',
        type: 'post',
        data: {
            mobile:mobile,
            password:password,
            code:code,
            _csrf:csrfToken

        },
        dataType:'json',
        success: function (data) {
            if(data.result.result ==1) {
                $('.TANcHUAG').stop(true).fadeIn(300).delay(5000).fadeOut(400);
                $('.TANcHUAG').find('.allTan').text('修改成功');
                window.location.href=url;
                // window.location.reload();
            } else {
                $('.TANcHUAG').stop(true).fadeIn(300).delay(5000).fadeOut(400);
                $('.TANcHUAG').find('.allTan').text(data.result.message);
                return false;
            }

        },
//            error: function () {
//                layer.msg('ajax error!');
//            }
    });
}

//用户登录
function AjaxLogin(mobile,password,url) {
    var csrfToken = $('meta[name="csrf-token"]').attr("content");
    $("#login").submit();
    return;
    $.ajax({
        url:'/user/check-login',
        type: 'post',
        data: {
            mobile:mobile,
            password:password,
            _csrf:csrfToken

        },
        dataType:'json',
        success: function (data) {
            if(data.result.error_code) {
                // alert(data.result.message);
                $('.TANcHUAG').stop(true).fadeIn(300).delay(5000).fadeOut(400);
                $('.TANcHUAG').find('.allTan').text(data.result.message);
                return false;
            } else {
                $('.TANcHUAG').stop(true).fadeIn(300).delay(5000).fadeOut(400);
                $('.TANcHUAG').find('.allTan').text('登录成功');
//                  window.location.href=url;
            }
        },
// error: function () {
//  layer.msg('ajax error!');
// }
    });
}


//  点击取消 收货地址弹窗隐藏
function dizhiguanzhu(){
    $('.dizhi').hide();
}
// 点击底部微博 打开新页面
function openWEIBO(){
    window.open('http://weibo.com/ypiaocom?refer_flag=1001030201_');
}

function GbTshi(obj){
    $('.TANcHUAG').fadeOut(400);
}

/**
 * 解决IE下不支持placeholder属性
 * 可以根据自己的需要去扩展
 * ps:写的很简单  根据自己的需求来  不喜勿喷
 */
;
(function($) {
    $.fn.placeholder = function(options) {
        var opts = $.extend({}, $.fn.placeholder.defaults, options);
        var isIE = document.all ? true : false;
        return this.each(function() {
            var _this = this,
                placeholderValue = _this.getAttribute("placeholder"); //缓存默认的placeholder值
            if (isIE) {
                _this.setAttribute("value", placeholderValue);
                _this.onfocus = function() {
                    $.trim(_this.value) == placeholderValue ? _this.value = "" : '';
                };
                _this.onblur = function() {
                    $.trim(_this.value) == "" ? _this.value = placeholderValue : '';
                };
            }
        });
    };
})(jQuery);