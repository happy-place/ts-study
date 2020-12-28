// interface、null、array tuple 都属于为 object
create({ name: 'tim' });
create(null);
create([1, 2, 3]);
var num = [1, 2, 3];
var o1 = num;
create(num);
var tup = ['a', 1, true];
var o2 = tup;
create(tup);
// let o3:object = 1 // 不可赋值
// number 、string、boolean 不属于object
// create(1)
// create('a')
// create(false)
