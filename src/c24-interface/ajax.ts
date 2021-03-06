// npm i xmlhttprequest-ts

// @ts-ignore
import {XMLHttpRequest} from 'xmlhttprequest-ts'

(function() {
    interface Config {
        type: string;
        url: string;
        data?: string;
        dataType: string;
    }

//原生js封装的ajax
    function ajax(config: Config) {
        let xhr = new XMLHttpRequest();
        xhr.open(config.type, config.url, true);
        xhr.send(config.data);
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                console.log('success!!!');
                if (config.dataType == 'json') {
                    console.log(JSON.parse(xhr.responseText));
                } else {
                    console.log(xhr.responseText)
                }
            }
        }
    }

    ajax({
        type: 'get',
        data: 'name=zhangsan',
        url: 'http://a.itying.com/api/productlist', //api
        dataType: 'json'
    })

})()



