# Typescript 快速上手
## 参照
```aidl
https://www.cnblogs.com/joe235/p/13814753.html
```
## 安装
```shell
# node js
brew install nodejs
node -v 
# v15.1.0

# 全局安装
npm i -g typescript
tsc -v
# Version 3.1.6

# deno 执行器
curl -fsSL https://deno.land/x/install/install.sh | sh
export DENO_INSTALL="/Users/xxx/.deno"
export PATH="$DENO_INSTALL/bin:$PATH"
```

## Helloworld

```shell
mkdir hello
echo 'console.log("hello");' > helloworld.ts
tsc helloworld.ts
ls -l 
# hello
# 	|--helloworld.ts
# 	|--helloworld.js

node helloworld.js
# hello

ts-node helloworld.ts
# hello
```

## 类型

![image-20201228083714613](static/image/类型.png)

```shell
// 1.number 接收整数、浮点
let a1 = 10
a1 = 10.1
let a2:number
a2 = 0x110 // 二进制

// @ts-ignore 大整形
let u:bigint = 999999999999999999n
console.log(u)

// 2.string 字符串
let a3:string
let a4 = 'haha'

// 3.boolean
let a5:boolean = true
a5 = false

// 4.字面量 (限制取值可能性,可以看成简单枚举)
let a6:'haha' | 'hehe'
a6 = 'haha'

// 5.any 任意类型的子类，因此可以接受任意类型，使用any会破坏类型检查机制，需要慎用
// 显示声明类型为any
let a7:any
// 不使用任何类型，就按any 处理
let a8

a8 = true
a8 = 10
a8 = 'hello'

// 子类(any)，赋值给父类 number,string,boolean,编译不报错，但实质类型不匹配
a1 = a8
a3 = a8
a5 = a8

let a:string
let b: unknown = '10'

// 6.unknow 与any相反，非常谨慎处理类型，赋赋值给其他类型变量，会报错，需要断言或判断
// string = unknown 报错，不能直接赋值
// a = b
if(typeof b === 'string'){ // 方案1：需要严格执行类型检查
    a = b
}

// 方案2：需要执行断言
a = b as string
a = <string> b

// 7. void 无返回值，无显示return，或return null
function show1():void {
    console.log('show')
}

function show2():void {
   return null
}

function show3():void {
    // return 1
}

//8. never 永远不会有返回值(必定抛出异常，死循环)
function test1():never{
    throw new Error("test never")
}

function test2():never{
    while(true){

    }
}

// 9. object 接收一个js对象
let m:object
m = function add(a:number,b:number):number{
    return a+b
}

m = {
    name:'tom',
    age: 19,
}
m = [1,2,3]
m = ['tom',1,true]

// age 为可选参数
let n:{name:string,age?:number}
n = {
    name:'tim'
}
n = {
    name:'tim',
    age:19
}

// [prop:string] 表明是任意属性类型
let k:{name:string,[prop:string]:any}
k = {
    name:'tim'
}

k = {
    name:'tim',
    age: 23,
    hobby:'swim'
}

// lambda 表示函数
let j:(a:number,b:number) => number
j = function(a,b):number{
    return a + b
}

// 10. 数组: 输出长度可变，元素类型都一致
let arr1:number[] = [1,2,3]
let arr2:Array<number> = [1,2,3]
arr1[3] = 10
console.log(arr1)

// 11. 元组: 固定长度数组，且元素类型也固定
let tup1:[string,number] = ['a',1]

// 12 枚举
enum Gender {
    female=0,
    male=1
}

// 限制 gender只能在0 和 1 之间取值
let stu:{name:string,gender:0|1}

stu = {
    name:'tim',
    gender:Gender.male
}
console.log(Gender[1]) // male 基于下标取字面量

stu = {
    name:'tim',
    gender: 0
}

// === 严格模式比较
console.log(0 === Gender.female) // true

// 13 组合类型
let p:number|string // 或
p = 12
p = 'haha'

let t:{name:string} & {age:number} // 且
t = {
    name:'tim',
    age:21
}

type MyMixType = number | string
let l:MyMixType = 1

```

## 详解tsconfig.json

```shell
mkdir tsconfig_test
# 默认（yes）初始安装
npm init -y 

vi tsconfig.json
{
	"include": [],
	 "exclude": []
	 "extends": ""
	 "files": []
	 "compilerOptions": {
	 	 	"outDir": "",
	 		"target": "",
	 		"module": "",
	 		"lib": [],
	 		"allowJs": true,
	 		"checkJs": false,
	 		"removeComments": false,
	 		"noEmit": false,
	 		"noEmitOnError": false,
	 		"strict": false,
	 		"alwaysStrict": false,
	 		"noImplicitAny": false,
	 		"noImplicitThis": false,
	 		"strictNullChecks": false,
	 }
}
```

* Include 列举需要编译的ts文件（可以使用通配）

  ```json
  // 源码通常放在 src 目录下，** 表示任意目录，* 表示任意文件，写好ts文件后，根路径下使用tsc命令，直接可以编译为js文件
  "include":["./src/**/*"]
  ```

* files 列举需要编译的ts文件，直接采用枚举方式列出具体文件

  ```json
  // 只有指定文件被编译，其余被忽略，常在ts文件比较少时使用，文件较多时，使用include
  "files": ['./src/c1/hello.ts']
  ```

* exclude 编译需要忽略的ts文件，（亦可使用通配）

  ```json
  // 忽略src/c2目录下所有文件，不参与ts文件编译，长与include搭配使用
  "exclude":["./src/c2/*"]
  ```

* extends 继承其他tsconfig文件

  ```json
  // 继承 ./basic-config.json
  "extends": "./basic-config.json"
  ```

* compileOptions 编译可选参数

  * outDir 编译输出到指定文件

    ```json
    /*
       编译后js输出到./dist目录
    */
    "outDir": "./dist",
    ```

  * target 编译js版本

    ```json
    /*
    	 编译js版本
    	 可选项：'es3', 'es5', 'es6', 'es2015', 'es2016', 'es2017', 'es2018', 'esnext'
    	 es3最老，兼容浏览器最多，常用es2015,当前最新编译规范为esnext
    	 eg: 使用 es3编译后生成js文件，编译仍使用 var,而是有 es2015编译的js文件，变量使用let
    */
    "target": "ES2017"
    ```

  * module 编译使用模块的规范

    ```json
    /*
    	可选项：'none', 'commonjs', 'amd', 'system', 'umd', 'es6', 'es2015', 'esnext'
    	通常默认使用 commonjs
    */
    "module":"commonjs"
    ```

  * lib  编译需要使用依赖

    ```json
    /*
    	通常保持默认即可，例如js在浏览器运行，不需要使用dom,可以直接获取document，而在其他node场景运行，要获取dom，需要引入dom
    	可选项：'es5', 'es6', 'es2015', 'es7', 'es2016', 'es2017', 'es2018', 'esnext', 'dom', 'dom.iterable', 'webworker', 'webworker.importscripts', 'scripthost', 'es2015.core', 'es2015.collection', 'es2015.generator', 'es2015.iterable', 'es2015.promise', 'es2015.proxy', 'es2015.reflect', 'es2015.symbol', 'es2015.symbol.wellknown', 'es2016.array.include', 'es2017.object', 'es2017.sharedmemory', 'es2017.string', 'es2017.intl', 'es2017.typedarrays', 'es2018.intl', 'es2018.promise', 'es2018.regexp', 'esnext.array', 'esnext.symbol', 'esnext.asynciterable', 'esnext.intl'
    */
    "lib": ["dom",]
    ```

    

    

  



