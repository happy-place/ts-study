let username:string = 'Jack'

let age:number = 10
let is_ok:boolean = true

// 多行字符串，切可以使用 ${var} 引用变量
let sentence:string = `Hello, my name is ${ username }. 
I'll be ${ age + 1 } years old next month. 
Are you ok ? ${is_ok}`
console.log(sentence)