
// 闭包：函数内部返回另一个函数
function f(){
    let a = 10 // 环境
    return function(){
        return a + 1
    }
}

let g = f()
console.log(g()) // 11

function h(flag:boolean){
    if(flag){
        var a = 1 // var 声明的变量，在整个 函数体内都能访问到，
    }
    return a
}
console.log(h(true)) // var a=1 被执行，不会出错
console.log(h(false)) // var a=1 未被执行，undefined

function j(){
    var a = 1

    return b() // 可以返回它之后定义的函数

    function b(){
        return a+1
    }
}

console.log(j()) // 2

function sumMatrix(matrix: number[][]) {
    var sum = 0;
    for (var i = 0; i < matrix.length; i++) { // 重复声明变量 var i，编译通过不会报错，会带来无尽灾难
        var currentRow = matrix[i];
        for (var i = 0; i < currentRow.length; i++) { // 内部覆盖外部i,引起混乱
            sum += currentRow[i];
        }
    }
    return sum;
}

// 同级别作业域可以反复声明
var d = 1
var d = 2