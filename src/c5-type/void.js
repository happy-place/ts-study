var void_test;
(function (void_test) {
    // 明确声明没有返回值
    function greet(name) {
        console.log('hi, ' + name);
    }
    // 字符串就拼接，数值类型就相加
    function concat(a, b) {
        return a + b;
    }
    greet('Jack');
    console.log(concat('big', 'bang'));
    console.log(concat(1, 2));
})(void_test || (void_test = {}));
