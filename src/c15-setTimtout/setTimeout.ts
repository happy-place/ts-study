
/*
 * setTimeout中函数，准备执行时,i 已经变为了10，即后面声明的变量 var i 会取代前面的声明
 * 10
    10
    10
    10
    10
    10
    10
    10
    10
    10
 */
function test1(){
    for(var i=0;i<10;i++){
        setTimeout(function(){
            console.log(i)
        },100*i)
    }
}


/** 使用 let i 声明变量，后面声明的 i 不会取代前面的值
 *   0
     1
     2
     3
     4
     5
     6
     7
     8
     9
 */
function test2(){
    for(let i=0;i<10;i++){
        setTimeout(function(){
            console.log(i)
        },100*i)
    }
}

/**
 *0
 1
 2
 3
 4
 5
 6
 7
 8
 9

 */
function test3(){
    // 借助函数传参捕获，初始调用时i的值
    for(var i=0;i<10;i++){
        (function(i:number){
            setTimeout(function(){
                console.log(i)
            },100*i)
        }(i))
    }
}

test3()
