"use strict";
var const_test;
(function (const_test) {
    // 常量：类型和值都不能修改，如果是 obect 类型，则元素可以修改，但变量指向的引用不能修改
    const num = 1;
    // num = 2 // 常量指向的对象不能修改
    const kitty = {
        name: 'jack',
        age: 21,
    };
    // kitty = { // 常量指向的对象不能修改
    //     name:'jack2',
    //     age:21,
    // }
    // 常量指向的对象的属性可以修改
    kitty.age = 22;
    console.log(kitty);
    const arr = [1, 2, 3];
    // arr = [3,4,5] // 常量指向的对象不能修改
    arr[1] = 100; //常量指向的对象的元素可以修改
})(const_test || (const_test = {}));
