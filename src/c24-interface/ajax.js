"use strict";
// npm i xmlhttprequest-ts
Object.defineProperty(exports, "__esModule", { value: true });
const xmlhttprequest_ts_1 = require("xmlhttprequest-ts");
var ajax_test;
(function (ajax_test) {
    //原生js封装的ajax
    function ajax(config) {
        let xhr = new xmlhttprequest_ts_1.XMLHttpRequest();
        xhr.open(config.type, config.url, true);
        xhr.send(config.data);
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                console.log('success!!!');
                if (config.dataType == 'json') {
                    console.log(JSON.parse(xhr.responseText));
                }
                else {
                    console.log(xhr.responseText);
                }
            }
        };
    }
    ajax({
        type: 'get',
        data: 'name=zhangsan',
        url: 'http://a.itying.com/api/productlist',
        dataType: 'json'
    });
})(ajax_test || (ajax_test = {}));
