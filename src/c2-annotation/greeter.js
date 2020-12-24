// 函数形参列表可以使用类型注释
function greet(person) {
    return 'hello,' + person;
}
var user = "Jane";
document.body.innerHTML = greet(user);
