var name = "james";
var age = 37;
var add = function(x, y) {
    return(x + y);
};

// 挂载
exports.name = name;
exports.add = add;