// 自定义模块modB，同时在模块中引用模块modB
module.exports.valueB = "B";

const modA = require("./modA");
console.log("modB:" + modA.valueA);

module.exports.valueA = "BB";
