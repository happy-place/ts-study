namespace enume_test {
// 枚举类型: 枚举元素明确赋值，就取值，否则就按顺序，取下标
    enum Status {success = 1, error = 2}

    let s: Status = Status.error
    console.log(s)

// 枚举元素未指定数值，按下标处理
    enum Color {red, blue, yellow}

    let c: Color = Color.blue
    console.log(c)


// 前面是按元素取数字，下面是按数字取元素名次
    let color: string = Color[2]
    console.log(color)

// status 在/node_modules/typescript/lib/lib.dom.d.ts:（ declare var status: string;） 中已经定义，为全局变量不能使用
    let aa: string = Status[1]
    console.log(aa)
}