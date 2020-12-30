(function() {
// let 是块作用域
    function test(flag: boolean) {
        let a = 1
        if (flag) {
            let b = a + 1
            return b //传 true时，可达，因此返回值有效
        }
        // return b // 传false时，let b 不可达，无返回值，报错，解析不到 b
    }

    let c = 1

    function test2() {
        c += 1 // 使用了全局变量，test2只能在 c 声明前，才能使用
        return c
    }

    console.log(test2())


// 同级别作用域，不能同时声明
    let d = 1

// let d = 1


    function sumMatrix(matrix: number[][]) {
        let sum = 0;
        for (let i = 0; i < matrix.length; i++) {
            var currentRow = matrix[i];
            for (let i = 0; i < currentRow.length; i++) { // 作用域不同的let，内部i屏蔽外部i，可以得到正确结构
                sum += currentRow[i];
            }
        }
        return sum;
    }
})()