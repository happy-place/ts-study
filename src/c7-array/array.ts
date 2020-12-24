// 使用明确类型数值，可以现在元素类型 (类型不变，长度不变，元素可变)
let arr: number[] = [1,2,3]
arr[0] = 4
console.log(arr,typeof(arr),arr.length)

let arr2: Array<number> = [1,2,3]
console.log(arr2,typeof(arr2))

// 使用泛型数组，可以接收任何类型
let arr3:Array<any> = [1,'hi',true]
// let arr3 = [1,'hi',true]
console.log(arr3,typeof(arr3))


