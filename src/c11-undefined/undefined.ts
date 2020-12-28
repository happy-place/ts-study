let num:number
console.log(num) // undefined

let un:undefined
console.log(un) // undefined

let num2:number | undefined
num2 = 10
console.log(num2) // 10

let n = null

console.log(n==un) // null == undefined

// object 是非原始类型，即除number、string、boolean、synbol、null、undefined 之外类型

// null 和 undefined 是所有类型的子类
let a:number = un
let s:string = un
let b:boolean = un

// 使用 --strictNullChecks 可以强约束null 和 undefined 作为其他类型传入
