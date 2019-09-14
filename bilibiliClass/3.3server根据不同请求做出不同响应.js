// 实现可以根据不同的请求路径发送不同的响应
// 1、引入http包
var http = require("http");

// 2、创建服务器对象
var server = http.createServer();

// 3、监听require请求响应事件，
// 然后回调函数根据不同的请求响应不同的结果，回调函数有两个参数，request和response，分别为请求和响应对象
// 注意，请求是request，响应是response
server.on("request", (req, res) => {
    // res对象的做出响应的write以及end可以合并为end写法
    console.log("我接收请求了，请求路径是：" + req.url);
    // 接下来根据不同的请求路径做出不同的响应，即向页面输出东西
    //注意，url指的是端口号后面的路径，以/开头，默认为/
    if(req.url === "/") {
        res.end("index page");
    } else if(req.url === "/login") {
        res.end("login page");
    } else if(req.url === "/home") {
        res.end("home page");
    } else {
        res.end("404 not found");
    }
});

// 4、监听绑定的端口号，启动服务器，执行回调函数向终端输出东西
server.listen(8080, () => {
    console.log("服务器启动了");
});