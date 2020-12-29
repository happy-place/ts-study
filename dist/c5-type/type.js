"use strict";
var type_test1;
(function (type_test1) {
    let username = 'Jack';
    let age = 10;
    let is_ok = true;
    // 多行字符串，切可以使用 ${var} 引用变量
    let sentence = `Hello, my name is ${username}. 
I'll be ${age + 1} years old next month. 
Are you ok ? ${is_ok}`;
    console.log(sentence);
})(type_test1 || (type_test1 = {}));
