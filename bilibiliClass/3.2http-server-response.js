// 这是一个有响应的http服务器
// 1、引入http包
var http = require("http");

// 2、用http对象的createServer()方法创建一个服务器，并用一个变量接收返回的对象
var server = http.createServer();

// 3、接收请求 并且 做出响应，即用response.write()方法向页面写东西，但注意写完一定要用response.end();结束
// 接收请求为server的on方法，有两个参数，第一个是request事件，第二个是一个回调函数
// 当客户端的请求发过来，则会自动触发服务器的request请求事件，然后执行回调函数
server.on("request", function(request, response) {
    // request.url为在浏览器中网址端口号后面的字符串，若没有则也会默认输出/
    // 注意，可以用request.url判断是登录页面还是注册页面等选择进入的页面，加入if语句进行判断选择
    // 注意，console.log()是向终端发送响应，即向终端写东西
    console.log("我接收到请求了，请求路径是：" + request.url);

    // response的write和end方法是向显示页面写东西
    response.write("我向页面写入东西了，即我做出了响应"); // 为什么这里的中文会显示成乱码，下面的英文就能正常显示
    response.write("hello node.js");
    response.end(); // 注意，write可以写多次，但之一最后一定要以response.end();结束，表示我说完了，这样前面的响应才会显示出来

});

// 5、绑定端口号，启动服务器
// 启动服务器，即用server的listen方法，监听端口号为8080的服务器
// 当服务器启动（即用终端启动服务器）后，用浏览器输入有两种方法去打开该网页
// 1是输入：http://127.0.0.1:8080
// 2是输入：http://localhost:8080
server.listen(3000, function() {
    console.log("服务器启动成功了");
});

// 注意每次更改完这里的代码要重启服务器（ctrl + c停止服务器 再重新打开）才能切换到最新的代码服务器，
// 否则还是在运行那个就旧的服务器

// 笔记：
// 1、创建一个http服务器，nodejs中创建一个类似啊派其的web服务器比较容易，因为nodejs的
// http服务器的底层代码已经用c++写好了，只需要引用http包就可以用它的函数的
// 2、服务器是干什么，是对数据提供服务的，http服务器的流程为：
// 有一个请求发过来 -> http服务器接受请求 -> http处理该请求 -> http作出响应