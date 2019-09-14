// 创建一个http服务器
// 1、引入http包
var http = require("http");

// 2、用http对象的createServer()方法创建一个服务器，并用一个变量接收返回的对象
var server = http.createServer();

// 3、接收请求
// 接收请求为server的on方法，有两个参数，第一个是request事件，第二个是一个回调函数
// 当客户端的请求发过来，则会自动触发服务器的request请求事件，然后执行回调函数
server.on("request", function() {
    console.log("我接收到请求了");
});

// 4、绑定端口号，启动服务器
// 启动服务器，即用server的listen方法，监听端口号为8080的服务器
// 当服务器启动（即用终端启动服务器）后，用浏览器输入有两种方法去打开该网页
// 1是输入：http://127.0.0.1:8080
// 2是输入：http://localhost:8080
server.listen(8080, function() {
    console.log("服务器启动成功了");
});

// 到这里一个基本的http服务器就基本创建好了，但这个服务器只有接受请求，
// 但没有处理请求，以及做出相应，所以此时用浏览器访问它会一直转圈

// 笔记：
// 1、创建一个http服务器，nodejs中创建一个类似啊派其的web服务器比较容易，因为nodejs的
// http服务器的底层代码已经用c++写好了，只需要引用http包就可以用它的函数的
// 2、服务器是干什么，是对数据提供服务的，http服务器的流程为：
// 有一个请求发过来 -> http服务器接受请求 -> http处理该请求 -> http作出响应
