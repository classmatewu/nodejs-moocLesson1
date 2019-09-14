// //require意味要求，即需要引用模块
// const http = require("http");

// //创建http服务器
// var server = http.createServer(function(request, response) {

//     // response用于输出
//     response.write("helloworld");
//     response.end();
// })

// // 监听端口号为8080的服务器请求
// server.listen(8080);

var http = require('http');

http.createServer(function (request, response) {

    // 发送 HTTP 头部 
    // HTTP 状态值: 200 : OK
    // 内容类型: text/plain
    response.writeHead(200, {'Content-Type': 'text/plain'});

    // 发送响应数据 "Hello World"
    response.end('Hello World\n');
}).listen(8888);

// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8888/');