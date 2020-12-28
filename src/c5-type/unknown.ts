// 1.number 接收整数、浮点
let a1 = 10
a1 = 10.1
let a2:number

// 2.string 字符串
let a3:string
let a4 = 'haha'

// 3.boolean
let a5:boolean = true
a5 = false

// 4.字面量 (限制取值可能性,可以看成简单枚举)
let a6:'haha' | 'hehe'
a6 = 'haha'

// 5.any 任意类型的子类，因此可以接受任意类型，使用any会破坏类型检查机制，需要慎用
// 显示声明类型为any
let a7:any
// 不使用任何类型，就按any 处理
let a8

a8 = true
a8 = 10
a8 = 'hello'

// 子类(any)，赋值给父类 number,string,boolean,编译不报错，但实质类型不匹配
a1 = a8
a3 = a8
a5 = a8

let a:string
let b: unknown = '10'

// 6.unknow 与any相反，非常谨慎处理类型，赋赋值给其他类型变量，会报错，需要断言或判断
// string = unknown 报错，不能直接赋值
// a = b
if(typeof b === 'string'){ // 方案1：需要严格执行类型检查
    a = b
}

// 方案2：需要执行断言
a = b as string
a = <string> b

// 7. void 无返回值，无显示return，或return null
function show1():void {
    console.log('show')
}

function show2():void {
   return null
}

function show3():void {
    // return 1
}

//8. never 永远不会有返回值(必定抛出异常，死循环)
function test1():never{
    throw new Error("test never")
}

function test2():never{
    while(true){

    }
}


