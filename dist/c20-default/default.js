"use strict";
var default_test;
(function (default_test) {
    // step?:number 表明可以不传
    function increby(info) {
        let { a, step = 1 } = info;
        a += step;
        return a;
    }
    console.log(increby({ a: 1 })); // 2，不传时使用默认值
    console.log(increby({ a: 1, step: 3 })); // 传入时使用此值
})(default_test || (default_test = {}));
