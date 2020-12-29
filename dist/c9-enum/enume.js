"use strict";
var enume_test;
(function (enume_test) {
    // 枚举类型: 枚举元素明确赋值，就取值，否则就按顺序，取下标
    let Status;
    (function (Status) {
        Status[Status["success"] = 1] = "success";
        Status[Status["error"] = 2] = "error";
    })(Status || (Status = {}));
    let s = Status.error;
    console.log(s);
    // 枚举元素未指定数值，按下标处理
    let Color;
    (function (Color) {
        Color[Color["red"] = 0] = "red";
        Color[Color["blue"] = 1] = "blue";
        Color[Color["yellow"] = 2] = "yellow";
    })(Color || (Color = {}));
    let c = Color.blue;
    console.log(c);
    // 前面是按元素取数字，下面是按数字取元素名次
    let color = Color[2];
    console.log(color);
    // status 在/node_modules/typescript/lib/lib.dom.d.ts:（ declare var status: string;） 中已经定义，为全局变量不能使用
    let aa = Status[1];
    console.log(aa);
})(enume_test || (enume_test = {}));
