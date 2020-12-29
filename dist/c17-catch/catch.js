"use strict";
var catch_test;
(function (catch_test) {
    // catch 中声明的 e 是let,只能在catch 块使用，finally中感知到的是 undefined
    function test() {
        let e;
        try {
            throw "test";
        }
        catch (e) {
            console.log(e, typeof e); // test string
        }
        finally {
            console.log(e); // undefined
        }
    }
    test();
})(catch_test || (catch_test = {}));
