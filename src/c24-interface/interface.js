var interface_test;
(function (interface_test) {
    function eat(apple) {
        console.log(`name: ${apple.name}, color: ${apple.color}`);
    }
    // 声明为Apple类型时，字段必须刚刚好，不多不少
    let apple = {
        name: 'fushi',
        color: 'red',
    };
    eat(apple);
    // 不显示声明为 Apple类型时，只要包含指定字段，就可以冲抵需要对象
    let appleLike = {
        color: 'grenn',
        name: 'pear',
        age: 1,
    };
    eat(appleLike);
    class Plane {
        move() {
            console.log("plane is flying");
        }
        stop() {
            console.log("plane stop");
        }
    }
    class Bike {
        move() {
            console.log("bike is ridding");
        }
        acc() {
            console.log("bike is acceleated");
        }
    }
    function play(vehicle) {
        vehicle.move();
    }
    let plane = new Plane();
    play(plane);
    let bike = new Bike();
    play(bike);
})(interface_test || (interface_test = {}));
