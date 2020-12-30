/**
 * 函数形参列表可以使用类型注释, tsc greeter.ts 编译完后生成的 .js 文件中函数类型注释消失
 * 调用带有类型的函数时，传参类型如果不正确，会报错
 */
(function() {
function greet(person:string){ // 没有声明返回值类型， 就自行推断
    return 'hello,' + person
}


function greet2(person:string):string{ // 声明了返回值类型
    return 'hello,' + person
}

// var user = [1,2,3] // 类型不是 string 调用会报错
var user = 'tom'
console.log(greet(user))
// document.body.innerHTML = greet(user)
})()