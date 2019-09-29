var app=require("http").createServer();
var io = require("socket.io")(app);

app.listen(4000);
//功能1
//将客户聊天的信息广播给所有人
//当客户退出了 广播给所有人
//创建昵称
//user 1
//广播
var clientCount=0;
io.on("connection",(socket)=>{
   clientCount++;
   var nickname="user"+clientCount;

    io.emit("enter",nickname+"come in");
    socket.on("send",(data)=>{
        console.log("前端来的"+data);
        io.emit("list",data);
    });
    socket.on("disconnect",(data)=>{
        io.emit("leave",nickname+"退出了");
    });
})