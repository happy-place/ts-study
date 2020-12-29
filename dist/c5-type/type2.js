"use strict";
var type2;
(function (type2) {
    // 1.number 接收整数、浮点
    let a1 = 10;
    a1 = 10.1;
    let a2;
    a2 = 0x110; // 二进制
    // @ts-ignore 大整形
    // let u:bigint = 999999999999999999n
    // console.log(u)
    // 2.string 字符串
    let a3;
    let a4 = 'haha';
    // 3.boolean
    let a5 = true;
    a5 = false;
    // 4.字面量 (限制取值可能性,可以看成简单枚举)
    let a6;
    a6 = 'haha';
    // 5.any 任意类型的子类，因此可以接受任意类型，使用any会破坏类型检查机制，需要慎用
    // 显示声明类型为any
    let a7;
    // 不使用任何类型，就按any 处理
    let a8;
    a8 = true;
    a8 = 10;
    a8 = 'hello';
    // 子类(any)，赋值给父类 number,string,boolean,编译不报错，但实质类型不匹配
    a1 = a8;
    a3 = a8;
    a5 = a8;
    let a;
    let b = '10';
    // 6.unknow 与any相反，非常谨慎处理类型，赋赋值给其他类型变量，会报错，需要断言或判断
    // string = unknown 报错，不能直接赋值
    // a = b
    if (typeof b === 'string') { // 方案1：需要严格执行类型检查
        a = b;
    }
    // 方案2：需要执行断言
    a = b;
    a = b;
    // 7. void 无返回值，无显示return，或return null
    function show1() {
        console.log('show');
    }
    function show2() {
        return null;
    }
    function show3() {
        // return 1
    }
    //8. never 永远不会有返回值(必定抛出异常，死循环)
    function test1() {
        throw new Error("test never");
    }
    function test2() {
        while (true) {
        }
    }
    // 9. object 接收一个js对象
    let m;
    m = function add(a, b) {
        return a + b;
    };
    m = {
        name: 'tom',
        age: 19,
    };
    m = [1, 2, 3];
    m = ['tom', 1, true];
    // age 为可选参数
    let n;
    n = {
        name: 'tim'
    };
    n = {
        name: 'tim',
        age: 19
    };
    // [prop:string] 表明是任意属性类型
    let k;
    k = {
        name: 'tim'
    };
    k = {
        name: 'tim',
        age: 23,
        hobby: 'swim'
    };
    // lambda 表示函数
    let j;
    j = function (a, b) {
        return a + b;
    };
    // 10. 数组: 输出长度可变，元素类型都一致
    let arr1 = [1, 2, 3];
    let arr2 = [1, 2, 3];
    arr1[3] = 10;
    console.log(arr1);
    // 11. 元组: 固定长度数组，且元素类型也固定
    let tup1 = ['a', 1];
    // 12 枚举
    let Gender;
    (function (Gender) {
        Gender[Gender["female"] = 0] = "female";
        Gender[Gender["male"] = 1] = "male";
    })(Gender || (Gender = {}));
    // 限制 gender只能在0 和 1 之间取值
    let stu;
    stu = {
        name: 'tim',
        gender: Gender.male
    };
    console.log(Gender[1]); // male 基于下标取字面量
    stu = {
        name: 'tim',
        gender: 0
    };
    // === 严格模式比较
    console.log(0 === Gender.female); // true
    // 13 组合类型
    let p; // 或
    p = 12;
    p = 'haha';
    let t; // 且
    t = {
        name: 'tim',
        age: 21
    };
    let l = 1;
})(type2 || (type2 = {}));
