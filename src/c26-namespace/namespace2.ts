// namespace 支持嵌套，以 x.y 的形式被访问
namespace House {
    export namespace Badroom {
        export class Bad {
            public doubleBed(bed:number){
                return bed * 2
            }
        }
    }
}