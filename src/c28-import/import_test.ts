import {aa} from './hello'

(function() {
    console.log(aa)

    let box1 = document.getElementById("box1")
// box1.addEventListener('click',function (){ // box1 可能为null,会报错
//     alert('click')
// })

    if (box1 != null) {
        box1.addEventListener('click', function () { // box1 可能为null,会报错
            alert('click')
        })
    }
// 存在才调用，否则不调用
    box1?.addEventListener('click', function () { // box1 可能为null,会报错
        alert('click')
    })
})()
