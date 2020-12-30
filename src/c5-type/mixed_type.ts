(function() {
// 组合类型
    let a: number | string

    a = "hello"
    console.log(a)

    a = 10
    console.log(a)

// a = true // 报错

// 给组合类型取别名
    type NumOrStr = number | string
    let b: NumOrStr

    b = 10
    b = "hi"
// b = true // 报错
    console.log(b)

// 直接使用字面量限制取值范围
    let c: 'on' | 'off'
    c = 'on'
    c = 'off'
// c = 'OFF' // 超过取值范围，编译不通过

})()


