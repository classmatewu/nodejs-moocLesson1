// 自定义模块modA，同时在里面引用模块modB
module.exports.valueA = "A";

//用require引用模块，./表示当前文件夹路径， /表示绝对路径
const modB = require("./modB");
console.log("modA:" + modB.valueB);

module.exports.valueA = "AA";
