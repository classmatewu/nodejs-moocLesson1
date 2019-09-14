// 注意nodejs文件名一般不要含有中文
// 引用fs包，即file system文件系统
// fs变量被赋值为一个fs对象
var fs = require("fs");

// 调用fs对象的readFile方法，第一个参数是文件路径，第二个参数是一个回调函数
fs.readFile("./NodeJs/bilibiliClass/01读文件.js", function(error, data) {
    if(error) {
        console.log("读取失败");
        console.log(error);
    } else {
        // 因为data参数是读取到的文件的二进制形式，.toString()将其以字符串形式读出的才是文件的内容
        console.log("读取成功");
        console.log(data.toString());
    }
});

console.log("我执行完啦！");
