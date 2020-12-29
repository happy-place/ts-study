var T;
(function (T) {
    // 泛型 函数
    function add(a, b) {
        return a;
    }
    console.log(add(1, 2));
    class Player {
        show(t) {
            console.log(t);
        }
    }
    let player = new Player();
    player.show('hello ts');
})(T || (T = {}));
