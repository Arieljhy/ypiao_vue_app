const express = require('express');
const pool = require('../pool.js');
var router = express.Router();

// 查询主页 票品 表
router.get('/select/:style',(req,res)=>{
    var $itic_style = req.params.style;  
    console.log(`${$itic_style}`);
    var sql="select * from yp_index_tic where itic_style=?";
    pool.query(sql,[$itic_style],function(err,result){
        console.log(result.length);
        if (err) throw err;
       //result 是一个数组[], 里面的元素是 对象{}
        if(result.length>0){
            res.send(result);
            console.log(result);
        }
        if(result.length==0){
            console.log("la");
            res.send("-1");
        }
    });
});
// 查询主页 票品 表
router.get('/selectByid/:itic_family_id',(req,res)=>{
    var $tic_id= req.params.itic_family_id;  
    console.log(`收到值了没${$tic_id}`);
    var sql="select * from yp_tickets where tic_id=?";
    pool.query(sql,[$tic_id],function(err,result){
        console.log(result.length);
        if (err) throw err;
       //result 是一个数组[], 里面的元素是 对象{}
        if(result.length>0){
            res.send(result);  
        }
        if(result.length==0){
            console.log("la");
            res.send("-1");
        }
    });
});
router.get('/selectBystyle/:style',(req,res)=>{
    var $tic_style= req.params.style;  
    
    var sql="select * from yp_tickets where tic_style=?";
    pool.query(sql,[$tic_style],function(err,result){
        console.log(result.length);
        if (err) throw err;
       //result 是一个数组[], 里面的元素是 对象{}
        if(result.length>0){
            res.send(result);  
        }
        if(result.length==0){
            console.log("la");
            res.send("-1");
        }
    });
});
module.exports=router;