// tsc object.ts --strictNullChecks 报错，开启 --strictNullChecks 时，null 和 undefined 只能赋值给 void 和他们自己
// tsc object.ts 正常


// ts xxx.ts 编译生成 xx.js
// ts xx.ts --strictNullChecks 严格模式编译，null undefined 不能作为string boolean number symbol 子类
// ts-node xx.ts 直接运行
namespace strict_test {
    function test1(name: string): void {
        console.log(name)
    }

    test1(null)
}