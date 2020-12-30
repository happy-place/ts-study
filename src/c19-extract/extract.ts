/**
 * ../../node_modules/typescript/lib/lib.dom.d.ts:19535:15
 19535 declare const name: void;
 注意：name 在 lib.dom.d.ts 中已经定义为全局范围内常量，不可重新赋值但在 函数体中，缩小作用域可以继续赋值
 */
// let args:[number,string] = [21,'tom']
// let [age,name] = args  // name 是 在lib 中
// console.log(age,name)
(function() {
// 析构
    function test() {
        let args = [21, 'tom']
        let [age, name] = args  // name 是 在lib 中
        console.log(age, typeof age, name, typeof name)

        // 交换元素
        let num1: number = 1;
        let num2: number = 2;
        [num1, num2] = [num2, num1]
        console.log(num1, num2)

        // 剩余元素全部归为 others
        let [first, ...others] = [1, 2, 3, 4]
        console.log(first) // 1
        console.log(others) // [ 2, 3, 4 ]

        let [aa] = [1, 2, 3]
        console.log(aa) // 1 只能接收一个

        let [, b, c] = [1, 2, 3, 4]  // 忽略第一个，然后顺序接收
        console.log(b, c) // 2,3

        let kitty = {
            a1: 'kitty',
            b1: 21,
            c1: 'beijing',
        }
        // 对 结构体析构，元素名称需要保持一致
        let {a1, b1,} = kitty
        console.log(a1, b1) // kitty 21

        let jim = {
            a2: 'jim',
            b2: 21,
            c2: 'beijing',
        }
        // a2 接收制定元素，d2接收其余 map
        let {a2, ...d2} = jim
        console.log(a2, d2) // jim { b2: 21, c2: 'beijing' }

        // 给属性字段取别名
        let {a2: aa2, b2: bb2} = jim
        console.log(aa2, bb2) // jim 21

        // 析构前指定类型
        let {a2: aa1, b2: bb1}: { a2: string, b2: number } = jim
        console.log(aa1, bb1) // jim 21

    }


    test()
})()