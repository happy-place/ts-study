namespace obj_test {
// object 表示非原始类型，也就是除number，string，boolean，symbol，null或undefined之外的类型
    declare function create(o: object): void;

// interface、null、array tuple 都属于为 object
    create({name: 'tim'})
    create(null)
    create([1, 2, 3])

    let num: number[] = [1, 2, 3]
    let o1: object = num
    create(num)

    let tup: [string, number, boolean] = ['a', 1, true]
    let o2: object = tup
    create(tup)


// let o3:object = 1 // 不可赋值
// number 、string、boolean 不属于object
// create(1)
// create('a')
// create(false)
}