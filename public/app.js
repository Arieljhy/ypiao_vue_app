const express = require('express');
const bodyParser = require('body-parser');
const userRouter = require('./routes/user.js');
const ticketRouter = require('./routes/ticket.js');
const cors = require('cors'); 
const session = require('express-session');


 
var app = express();
app.listen(8081);
//添加cors中间件
//所有请求进入app.js 加请求头

// server.use(cors({
//     origin:["http://127.0.0.1:5050","http://localhost:5050"],
//     credentials:true
//     }))
app.use(session({
    secret:"12334",
    resave:true,
    saveUninitialized:true
}));

app.use(cors({
        origin:["http://localhost:8080","http://127.0.0.1:8081"],//不能用*
        credentials:true
    }));




app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
     extended:false
}));
app.use('/user',userRouter);
app.use('/ticket',ticketRouter);


