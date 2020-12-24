
// tsc greeter.ts 直接编译得到与其内容一样的 greeter.js 文件, idea 中会报错，因为没有限制类型
function greeter(person){
    return "hello,"+person
}

function greeter2(person:string):string{
    return 'hi, '+person
}
var user = "Jane User"
console.log(greeter(user))
// document.body.innerHTML = greeter(user)