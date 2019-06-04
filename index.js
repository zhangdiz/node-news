const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express()
app.use(cors());
app.use(bodyParser.json()); // json请求
app.use(bodyParser.urlencoded({extended: false})); // 表单请求

app.listen(3000, () =>{
    console.log('服务启动!')
})

app.get('/', (req, res) => {
    res.json('Hello World aaa !')
})


app.all('*', (req, res, next) => {    
    next();
})