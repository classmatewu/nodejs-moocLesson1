var fs = require("fs");

//第一个参数：要写入文件的路径，（注意若没有这个文件则执行时会创建一个）
// 第二个参数：要进入的内容
// 第三个参数：回调函数，（注意基本所有的api函数最后一个参数都是回调函数，因为nodejs是异步的）
fs.writeFile("./NodeJs/bilibiliClass/2.2wreitTo.txt", "hello,我写进去啦", (error) => {
    if(error) {
        console.log("写入失败");
        console.log(error);
    } else {
        console.log("写入成功");
    }
});

console.log("我执行完了");