/// <reference path = "namespace2.ts" />

/**
 * 使用namespace 避免组件命名冲突
 * 引用外部 ts 中的 namespace从时，使用 /// <reference path = "xxx.ts" /> 格式，且必须放在当前脚本最开头
 */
namespace Home {
    // 未使用export 暴露时，外部不能调用
    class Head{
        constructor() {
            const elem = document.createElement('div')
            elem.innerText = 'This is header'
            document.body.appendChild(elem)
        }
    }

    class Content{
        constructor() {
            const elem = document.createElement('div')
            elem.innerText = 'This is Content'
            document.body.appendChild(elem)
        }
    }

    class Footer{
        constructor() {
            const elem = document.createElement('div')
            elem.innerText = 'This is Footer'
            document.body.appendChild(elem)
        }
    }
    // 需要被外部调用直接调用使用使用 export 暴露
    export class Page {
        constructor() {
            new Head()
            new Content()
            new Footer()
        }
    }
}

namespace Home2 {
    class Head{
        constructor() {
            const elem = document.createElement('div')
            elem.innerText = 'This is header'
            document.body.appendChild(elem)
        }
    }

    class Content{
        constructor() {
            const elem = document.createElement('div')
            elem.innerText = 'This is Content'
            document.body.appendChild(elem)
        }
    }

    class Footer{
        constructor() {
            const elem = document.createElement('div')
            elem.innerText = 'This is Footer'
            document.body.appendChild(elem)
        }
    }

    export class Page {
        constructor() {
            new Head()
            new Content()
            new Footer()
        }
    }
}

function test_namespade(){
    let doubleBed = new House.Badroom.Bad().doubleBed(2)
    console.log(doubleBed)
}




