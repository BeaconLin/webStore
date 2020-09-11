//创建服务器以及配置路由
// express是基于nodejs的http模块而编写的高级模块，简化web服务端的应用开发
const express = require('express')
const bodyParser = require('body-parser') //express中间件，解析http请求体
const path = require('path')
const fs = require('fs')

const app = express()
app.use(bodyParser.json()) //解析json数据格式

//// 静态资源访问服务功能
//__dirname是指文件所在文件夹路径，到promise为止
//拼接得到静态资源的路径
app.use(express.static(path.join(__dirname, 'public')))

app.get('/getJSON', (req, res) => {
    res.status(200).send({ "name": "LanDezhi", "age": "25" })
})

app.get('/getJSON1', (req, res) => {
    res.status(200).send({ "name": "LanDezhi1", "age": "26" })
})

app.listen(3000)
console.log('服务器已经启动...')