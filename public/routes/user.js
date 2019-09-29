const express = require('express');
const pool = require('../pool.js');
var router = express.Router();

// 测试接口
router.get('/text/:uid',(req,res)=>{
    var $uid= req.params.uid;
    console.log($uid);
    var sql="select * from yp_user where uid=?";
    pool.query(sql,[$uid],(err,result)=>{console.log(result);
        if(result.length>0){
            res.send("1");
        }
        else{
            res.send("0");
        }
    });
});
// 登录
router.post('/login',(req,res)=>{
    var $phone = req.body.phone;
    var $upwd = req.body.upwd;
    console.log(req.body);
    var sql="select * from yp_user where phone=? and upwd=?";
    pool.query(sql,[$phone,$upwd],function(err,result){
        
        if (err) throw err;
       //result 是一个数组[], 里面的元素是 对象{}
        if(result.length>0){
            req.session.userinfo={uid:result[0].uid};
            console.log(req.session.userinfo.uid);
            res.send(result[0]);
        }
        if(result.length==0){
           
            res.send("-1");
        }
    });
});
// 注册
router.post('/reg',(req,res)=>{   
    var $phone = req.body.phone;
    var $upwd = req.body.upwd;
    var $user_name = req.body.user_name;
    var $uname = $user_name;
    var $gender = req.body.gender;
    var $avatar="";
    if($gender==1){
        $avatar="./img/login/boy.png"
    }
    if($gender==0){
        $avatar="./img/login/girl.png"
    }
    console.log("upwd:"+$upwd);
    var sql1="select * from yp_user where phone=?";
    var sql2="insert into yp_user (uname,upwd,phone,avatar,user_name,gender) values (?,?,?,?,?,?)";
    pool.query(sql1,[$phone],function(err,result){
        if (err) throw err;
       //result 是一个数组[], 里面的元素是 对象{}
        if(result.length>0){
            res.send("0");
        }
        else{
            pool.query(sql2,[$uname,$upwd,$phone,$avatar,$user_name,$gender],(err,result)=>{
                if (err) throw err;
                if(result.affectedRows>0){
                    res.send("1");
                }
                else{
                    res.send("-1");
                }
            });
           
        }
    });   
});
//修改用户信息
router.put('/upwdc',(req,res)=>{
    var $uid = req.body.uid;
    var $upwd = req.body.upwd;

    var sql="update yp_user set upwd=?where uid=?";
    pool.query(sql,[$upwd,$uid],(err,result)=>{
        if (err) throw err;
        if(result.affectedRows>0){
            res.send("1");
        }
        else{
            res.send("0");
        }
    });
});
//修改用户信息
router.put('/update_user',(req,res)=>{
    var $uid = req.body.uid;
    var $uname = req.body.uname;
    var $upwd = req.body.upwd;
    var $phone = req.body.phone;
    var $email = req.body.email;
    var $user_name = req.body.user_name;
    var $gender = req.body.gender;

    var sql="update yp_user set uname=?,upwd=?,phone=?,email=?,user_name=?,gender=? where uid=?";
    pool.query(sql,[$uname,$upwd,$phone,$email,$user_name,$gender,$uid],(err,result)=>{
        if (err) throw err;
        if(result.affectedRows>0){
            res.send("{message:1}");
        }
        else{
            res.send("{message:0}");
        }
    });
});
module.exports=router;








