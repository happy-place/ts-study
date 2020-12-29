"use strict";
var tuple_test;
(function (tuple_test) {
    // 元组，长度固定，类型确定，但不要求统一，元素可以修改，但需要保持类型一致
    let tup = [1, 'hi', true];
    console.log(typeof tup); // object
    console.log(tup);
    // 类型一致，可修改
    tup[0] = 3;
    console.log(tup);
    // tup[2] = 'hi' // 类型不一致，不能修改
})(tuple_test || (tuple_test = {}));
