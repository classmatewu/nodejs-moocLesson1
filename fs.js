// 引用系统内置模块，即在安装node时也顺带一起下下来的模块，eg：文件系统
const fs = require("fs"); // 这里输入的不是文件路径，而直接就是要引用的模块名

// 这是一个异步的回调函数，但执行到该回调函数时，程序不会等到它有结果返回才继续执性，
// 而是直接不等待直接跳过执行下面语句，待有回调函数有数据返回才执行
// 注意文件的路径
const result = fs.readFile("./NodeJs/fs.js", (err, data) => {
    if(err) {
        console.log(err);
    } else {
        // 因为data是一个二进制流，所以必须转成字符串输出
        console.log(data.toString());
    }
});

console.log(result);