const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");

const AuthenticateToken = require("./AuthenticateToken/index");

const app = express();
app.listen(3000,()=>{
    console.log("服务启动成功：localhost:3000");
});
//使用中间件
//req.query  req.body
app.use(bodyParser.json());
app.use(morgan('combined'));


//用户相关
app.use("/api/user",require("./controller/UserController"));

//Jwt测试
//AuthenticateToken.isvalidToken
app.get("/api",(req,res) => {
    res.send({
        code: 0,
        data: [
            {name: '1',age: 18},
            {name: '2',age: 22}
        ]
    })
});

