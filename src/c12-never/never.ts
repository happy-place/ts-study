(function() {
// never 类型：永远不会有结果或返回值的类型，不接受其他所有类型（包括null、undefined、any），常用于接收一个永远不会有返回值函数
    let a: never
// a=12
// a = null

    let num: number[] = [1, 2, 3]
// a = num

    let b: any = 1

// a = b

    function test1(): never {
        throw new Error("test never")
    }

// 只接收自己
    a = test1()

    function test2() {
        return test1()
    }

// 推断返回值类型为never
    a = test2()

// 死循环，永远不可达
    function test3(): never {
        while (true) {
        }
    }

    a = test3()
})()