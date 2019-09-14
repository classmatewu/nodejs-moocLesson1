// 1、之前说过一个模块的变量只有挂载到exports对象上，才能被其他模块通过对象.xxx来
// 访问导入的模块的数据
// 2、模块的数据也可以挂载到global全局对象上，表示导入任何该模块后，挂载到global的
// 数据就可以不用对象.xxx来访问，而是可以直接xxx访问，但注意前提是也要导入该模块，只是可以不用对象.访问
// eg：console等，类似浏览器js的windows对象

var modA = require("./a");
console.log(globalA);