var obj_test;
(function (obj_test) {
    // interface、null、array tuple 都属于为 object
    create({ name: 'tim' });
    create(null);
    create([1, 2, 3]);
    let num = [1, 2, 3];
    let o1 = num;
    create(num);
    let tup = ['a', 1, true];
    let o2 = tup;
    create(tup);
    // let o3:object = 1 // 不可赋值
    // number 、string、boolean 不属于object
    // create(1)
    // create('a')
    // create(false)
})(obj_test || (obj_test = {}));
