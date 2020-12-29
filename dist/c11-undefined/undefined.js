"use strict";
var undefined_test;
(function (undefined_test) {
    let num;
    console.log(num); // undefined
    let un;
    console.log(un); // undefined
    let num2;
    num2 = 10;
    console.log(num2); // 10
    let n = null;
    console.log(n == un); // null == undefined
    // object 是非原始类型，即除number、string、boolean、synbol、null、undefined 之外类型
    // null 和 undefined 是所有类型的子类
    let a = un;
    let s = un;
    let b = un;
    // 使用 --strictNullChecks 可以强约束null 和 undefined 作为其他类型传入
})(undefined_test || (undefined_test = {}));
