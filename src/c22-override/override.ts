(function() {
// 方法重载需要写各自的方法签名，然后共用一个方法实现
    function getInfo(name: string): string
    function getInfo(age: number): number
    function getInfo(obj: any): any {
        // 通过分支逻辑控制对应重载逻辑
        if (typeof (obj) === `string`) { // 通过参数类型控制分支
            return '我叫：' + obj
        } else {
            return obj
        }
    }

    console.log(getInfo('张三')); // 我叫：张三
    console.log(getInfo(20)); // 我年龄：20

    function getInfo1(name: string): string
    function getInfo1(name: string, age?: number): number
    function getInfo1(name: string, age?: number): any {
        // 通过分支逻辑控制对应重载逻辑
        if (age == null) { // 可选参数传参与否决定处理逻辑
            return '我叫：' + name
        } else {
            return age
        }
    }

    console.log(getInfo1('张三')); // 我叫：张三
    console.log(getInfo1('张三', 20)); // 我年龄：20

// 默认参数
    function getInfo2(name: string): string
    function getInfo2(name: string, age: number): number
    function getInfo2(name: string, age: number = 21): any {
        return `Name: ${name} age: ${age}`
    }

    console.log(getInfo2('张三')); // 我叫：张三
    console.log(getInfo2('张三', 20)); // 我年龄：20
})()