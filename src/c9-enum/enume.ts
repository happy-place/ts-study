// 枚举类型: 枚举元素明确赋值，就取值，否则就按顺序，取下标
enum Status {success=1,error=2}

let s:Status = Status.error
console.log(s)

enum Color {red,blue,yellow}
let c:Color = Color.blue
console.log(c)