// 1、由于各模块变量或者函数默认无关，互不影响，但有时我们需要让各模块进行通信，
// 即要使用导入模块的数据及方法等，所以模块就提供了加载和导出对象的功能
//     1）加载：require("./4.2a"); 这样便加载了模块，但不能使用到加载的模块里的数据
//     2）导出：var a = require("./4.2a"); 用一个变量a接收模块导出的对象exports
// 2、在主文件main.js中导入a文件啊a.js，要使得main.js可以使用a.js的文件，需要：
//     1）在a文件中默认有一个空对象exports，需要将a.js里的变量方法 挂载 到exports对象上
//     2）main.js文件中接收到exports对象后，便可以通过.xx的形式访问a.js挂载在exports对象上的数据
var a = require("./4.4a");

console.log(a.name);
console.log(a.add(3, 7));
console.log(a.age); // age没被挂载，所以undefined，访问不到