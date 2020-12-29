namespace interface_test {
// 通过接口约束必须包含属性
    interface Apple {
        name: string
        color: string
    }

    function eat(apple: Apple) {
        console.log(`name: ${apple.name}, color: ${apple.color}`)
    }

// 声明为Apple类型时，字段必须刚刚好，不多不少
    let apple: Apple = {
        name: 'fushi',
        color: 'red',
    }
    eat(apple)

// 不显示声明为 Apple类型时，只要包含指定字段，就可以冲抵需要对象
    let appleLike = {
        color: 'grenn',
        name: 'pear',
        age: 1,
    }
    eat(appleLike)

// 使用接口约束行为，接口内部都是抽象的，必须在实现类中实现
    interface Moveable {
        move()
    }

    class Plane implements Moveable {
        move() {
            console.log("plane is flying")
        }

        stop() {
            console.log("plane stop")
        }
    }

    class Bike implements Moveable {
        move() {
            console.log("bike is ridding")
        }

        acc() {
            console.log("bike is acceleated")
        }
    }

    function play(vehicle: Moveable) {
        vehicle.move()
    }

    let plane = new Plane()
    play(plane)

    let bike = new Bike()
    play(bike)
}

