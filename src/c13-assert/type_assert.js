var assert_test;
(function (assert_test) {
    let a = 'a';
    let b = a; // 此处number 类型只是注释型功能，不能真正起到约束作用
    console.log(b);
    function test1(num) {
        console.log(num + 1);
    }
    test1(a);
    console.log(a.length); // 通过类型断言，告诉编译器，程序员知道自己在干嘛，照着做就行了，不使用断言，无法使用对应函数会属性
    console.log(a.length); // 你在TypeScript里使用JSX时，只有 as语法断言是被允许的。
})(assert_test || (assert_test = {}));
