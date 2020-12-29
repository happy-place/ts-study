namespace T {
// 泛型 函数
    function add<T>(a: T, b: T): T {
        return a
    }

    console.log(add(1, 2))

// 泛型接口
    interface Showable<T> {
        show(t: T)
    }

    class Player implements Showable<string> {
        show(t: string) {
            console.log(t)
        }
    }

    let player = new Player()
    player.show('hello ts')
}
