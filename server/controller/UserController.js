const userModel = require("../db/UserModel");
const express = require("express");

const MD5 = require("crypto-js/md5");
const Jwt = require("jsonwebtoken");
const config = require("../config/index");

let router = express.Router();

function tokenSign({_id,userName}) {
    try {
        return Jwt.sign({_id,userName},config.token.secretOrPrivateKey,config.token.options);
    } catch (error) {
        throw(error);
    }
}

//注册用户
router.post("/register",(req,res) => {
    let {userName,password} = req.body;
    if(userName && password) {
        //查看是否已注册过
        userModel.find({userName},(err,docs) => {
            if(docs.length > 0){
                //用户名已存在
                res.send({
                    code: 1,
                    msg: '用户名已经存在'
                });
            }else{
                let newPassword = MD5(password).toString();
                userModel.create({
                    userName,
                    password: newPassword
                }).then(() => {
                    res.send({
                        code: 0,
                        msg: '注册成功'
                    })
                }).catch(err=>{
                    console.log('注册失败',err);
                    res.send({
                        code: 5,
                        msg: '注册失败'
                    })
                })
            }
        });
    }else{
        res.send({
            code: 1,
            msg: '用户名或密码不能为空'
        });
    }
});

//用户登录
router.post("/login",(req,res) => {
    let {userName,password} = req.body;
    if(userName && password) {
        userModel.find({userName},(err,docs) => {
            if(docs.length > 0) {
                password = MD5(password).toString();
                if(password === docs[0].password){
                    res.send({
                        code: 0,
                        msg: "登录成功",
                        userInfo: docs[0],
                        token: tokenSign(docs[0])
                    })
                }else{
                    res.send({
                        code: 1,
                        msg: "密码错误"
                    })
                }
            }else{
                res.send({
                    code: 1,
                    msg: "用户不存在"
                });
            }
        })
    }else{
        res.send({
            code: 1,
            msg: '用户名或密码不能为空'
        })
    }
});


module.exports = router;

