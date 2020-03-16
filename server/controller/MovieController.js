const movieModel = require("../db/MovieModel");
const express = require("express");

let router = express.Router();

//新增电影信息
router.post('/addMovie',(req,res) => {
   let data = req.body;
   movieModel.create(data).then(doc => {
       res.send({
           code:0,
           msg: '创建成功' + doc
       })
   }).catch(err => {
       res.send({
           code:1,
           msg: '创建失败'+err
       })
   });
});

//获取所有电影信息
router.get('/getAllMovie',(req,res) => {
   movieModel.find().then(docs => {
       if (docs.length > 0){
           res.send({
               code: 0,
               data: docs
           })
       }
   }).catch(err => {
       res.send({
           code: 1,
           msg: err
       })
   })
});


module.exports = router;

