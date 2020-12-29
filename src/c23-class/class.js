var class_test;
(function (class_test) {
    class Car {
        // 构造器
        constructor(engine) {
            this.engine = engine;
        }
        // 方法
        disp() {
            console.log(`car engine ${this.engine}`);
        }
    }
    let car = new Car('Moto');
    console.log(car.engine);
    car.disp();
    class Boat {
        constructor(name) {
            this.name = name;
        }
        getName() {
            return this.name;
        }
        setName(value) {
            this.name = value;
        }
        play() {
            console.log("play in park");
        }
    }
    let boat = new Boat("Jerry");
    console.log(boat.getName());
    boat.play();
    // 子类继承父类
    class FastBoat extends Boat {
        constructor(name, speed) {
            super(name); // 子类创建前需要，先调用super 创建父类
            this.speed = speed;
        }
        getSpeed() {
            return this.speed;
        }
        setSpeed(value) {
            this.speed = value;
        }
        // 子类重写父类方法
        play() {
            console.log("fast boat play in park");
        }
    }
    let fastBoat = new FastBoat("Tim", 100);
    console.log(fastBoat.getName());
    fastBoat.play();
    class Tools {
        constructor(name) {
            this.name = name;
        }
        static repair() {
            console.log("do repair job");
        }
        getName() {
            return this.name;
        }
        setName(name) {
            this.name = name;
        }
        work() {
            console.log("tool is working");
        }
    }
    Tools.num = 10;
    // 静态属性和方法只能被类调用，不能被实例调用
    console.log(Tools.num);
    Tools.repair();
    // 非静态只能被实例调用
    let tool = new Tools("hummar");
    console.log(tool.getName());
    tool.work();
    class Refer {
        constructor() {
            // 等价于 final 只能在初始化时赋值，一旦赋值不可修改
            this.content = 'hello';
        }
    }
    let refer = new Refer();
    console.log(refer.content);
    // refer.content = 'tim' // final 不可修改
    class Student {
        // 兼容空参构造器
        constructor(name) {
            if (name != null) {
                this._name = name;
            }
        }
        // 直接以 stu.name 形式访问
        get name() {
            return this._name;
        }
        // 直接对 stu.name = 'xxx' 进行赋值
        set name(value) {
            this._name = value;
        }
        say() {
            console.log("helo");
        }
    }
    let stu = new Student();
    stu.name = 'happy';
    console.log(stu.name);
    // 抽象类不一定有抽象内容（抽象实例、抽象方法）
    // 抽象方法所在的类一定是抽象类
    class Animal {
    }
    class Dog extends Animal {
        constructor(name) {
            super();
            this._name = name;
        }
        get name() {
            return this._name;
        }
        set name(value) {
            this._name = value;
        }
        eat() {
            console.log("dog eat bone");
        }
    }
    class Sheep extends Animal {
        constructor(name) {
            super();
            this._name = name;
        }
        get name() {
            return this._name;
        }
        set name(value) {
            this._name = value;
        }
        eat() {
            console.log("sheep eat grass");
        }
    }
    function show(animal) {
        animal.eat();
    }
    let dog = new Dog("peter");
    let sheep = new Sheep('jerry');
    show(dog); // 父类引用指向子类实例 多态
    show(sheep);
})(class_test || (class_test = {}));
