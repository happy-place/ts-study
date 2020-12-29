var override_test;
(function (override_test) {
    function getInfo(obj) {
        // 通过分支逻辑控制对应重载逻辑
        if (typeof (obj) === `string`) { // 通过参数类型控制分支
            return '我叫：' + obj;
        }
        else {
            return obj;
        }
    }
    console.log(getInfo('张三')); // 我叫：张三
    console.log(getInfo(20)); // 我年龄：20
    function getInfo1(name, age) {
        // 通过分支逻辑控制对应重载逻辑
        if (age == null) { // 可选参数传参与否决定处理逻辑
            return '我叫：' + name;
        }
        else {
            return age;
        }
    }
    console.log(getInfo1('张三')); // 我叫：张三
    console.log(getInfo1('张三', 20)); // 我年龄：20
    function getInfo2(name, age = 21) {
        return `Name: ${name} age: ${age}`;
    }
    console.log(getInfo2('张三')); // 我叫：张三
    console.log(getInfo2('张三', 20)); // 我年龄：20
})(override_test || (override_test = {}));
