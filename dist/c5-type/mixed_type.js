"use strict";
var mixed_type;
(function (mixed_type) {
    // 组合类型
    let a;
    a = "hello";
    console.log(a);
    a = 10;
    console.log(a);
    let b;
    b = 10;
    b = "hi";
    // b = true // 报错
    console.log(b);
    // 直接使用字面量限制取值范围
    let c;
    c = 'on';
    c = 'off';
    // c = 'OFF' // 超过取值范围，编译不通过
})(mixed_type || (mixed_type = {}));
