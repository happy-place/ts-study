(function() {
// 明确声明返回值
    function run1(): string {
        return 'run'
    }

// 类型推断返回值
    function run2() {
        return 'run'
    }

// 明确声明无返回值
    function run3(a: number): void {
        console.log(a + 1)
    }

    const arr = ['aa', 'java', 'python']

// lambda 表达式声明函数
// 函数赋值给比那里
    let func = (e: string) => e.length
// map 函数
    console.log(arr.map(func))

// 可变参数： 可以传，也可以不传
    function run4(a: number, b?: any): void {
        if (b != null) { // if 中 null、0、undefined 都表示 false，空列表不会判断为false
            console.log(`a=${a}, b=${b}`)
        } else {
            console.log(`a=${a}`) // 此时 b 为 undefine
        }
    }

    run4(1) // a=1
    run4(1, 2) // a=1, b=2
    run4(1, 0) // a=1, b=0
    run4(1, []) // a=1, b=

// 默认参数
    function run5(a: number, b: number = 1): void {
        console.log(a + b)
    }

    run5(1) // 2
    run5(1, 2) // 3

// 可变参数: 如果多个参数类型相同，可变参数必须放在末尾，才能正确解析
    function sum(...nums: number[]): void {
        let res = 0
        for (let i = 0; i < nums.length; i++) {
            res += nums[i]
        }
        console.log(res)
    }

    sum(1, 2)
    sum(1, 2, 3)

    function multipy(a: number, b: number, ...others: number[]) {
        let res = 0
        for (let i = 0; i < others.length; i++) {
            res += others[i]
        }
        res = res + a + b
        console.log(res)
    }

})()



