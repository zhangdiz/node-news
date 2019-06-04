'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.get('/', function (req, res) {
    res.send('Hello World !');
});

app.get('/process_get', function (req, res) {

    // 输出 JSON 格式
    var response = {
        "first_name": '张张张',
        "last_name": 'bbbb',
        "real_name": 'xxxxx'
    };

    console.log(response);
    res.setHeader('Content-Type', 'text/html; charset=utf8');

    res.end(JSON.stringify(response));
});

app.listen(3000, function () {
    console.log('服务启动!');
});