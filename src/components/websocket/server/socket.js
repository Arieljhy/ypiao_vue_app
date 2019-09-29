
//创建 web 服务器 
//创建socket.io 对象
//绑定监听端口  3000
//接受客户端请求
var app=require("http").createServer();
var io = require("socket.io")(app);

app.listen(3000);
io.on("connection",(socket)=>{
   
    console.log("有客户端连接到服务器了！！！");
    //服务器端接收客户消息
    socket.on("message",(data)=>{
        console.log("客户端向服务器发送的数据:"+data);
        socket.emit("server","交保护费");
    });
   
    io.emit("list","群发消息");

    socket.on("disconnect",(data)=>{
        console.log("断开连接:"+data);
        
    });

   
});

