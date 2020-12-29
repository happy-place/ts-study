namespace class_test {
    class Car {
        // 属性：可使用private public protected 等修饰，默认public
        // private 只能在本类中访问
        // protected 只能在本类或其子类中访问
        // public 在任意位置都可以访问
        engine: string

        // 构造器
        constructor(engine: string) {
            this.engine = engine
        }

        // 方法
        disp(): void {
            console.log(`car engine ${this.engine}`)
        }
    }

    let car = new Car('Moto')
    console.log(car.engine)
    car.disp()


    class Boat {
        // 私有化属性通过getter、setter 访问
        private name: string

        constructor(name: string) {
            this.name = name;
        }

        getName(): string {
            return this.name;
        }

        setName(value: string) {
            this.name = value;
        }

        public play() {
            console.log("play in park")
        }

    }

    let boat = new Boat("Jerry")
    console.log(boat.getName())
    boat.play()

// 子类继承父类
    class FastBoat extends Boat {
        private speed: number

        constructor(name: string, speed: number) {
            super(name); // 子类创建前需要，先调用super 创建父类
            this.speed = speed
        }

        getSpeed(): number {
            return this.speed;
        }

        setSpeed(value: number) {
            this.speed = value;
        }

        // 子类重写父类方法
        play() {
            console.log("fast boat play in park")
        }
    }

    let fastBoat = new FastBoat("Tim", 100)
    console.log(fastBoat.getName())
    fastBoat.play()


    class Tools {
        static num: number = 10

        name: string

        static repair() {
            console.log("do repair job")
        }

        constructor(name: string) {
            this.name = name
        }

        getName() {
            return this.name
        }

        setName(name: string) {
            this.name = name
        }

        work() {
            console.log("tool is working")
        }
    }

// 静态属性和方法只能被类调用，不能被实例调用
    console.log(Tools.num)
    Tools.repair()

// 非静态只能被实例调用
    let tool = new Tools("hummar")
    console.log(tool.getName())
    tool.work()

    class Refer {
        // 等价于 final 只能在初始化时赋值，一旦赋值不可修改
        readonly content: string = 'hello'
    }

    let refer = new Refer()
    console.log(refer.content)

// refer.content = 'tim' // final 不可修改

    class Student {
        // 通过getter setter 访问，自动将属性变为下划线开头
        private _name: string

        // 兼容空参构造器
        constructor(name?: string) {
            if (name != null) {
                this._name = name;
            }
        }

        // 直接以 stu.name 形式访问
        get name(): string {
            return this._name;
        }

        // 直接对 stu.name = 'xxx' 进行赋值
        set name(value: string) {
            this._name = value;
        }

        say() {
            console.log("helo")
        }
    }


    let stu = new Student()
    stu.name = 'happy'
    console.log(stu.name)

// 抽象类不一定有抽象内容（抽象实例、抽象方法）
// 抽象方法所在的类一定是抽象类
    abstract class Animal {
        // 抽象属性在子类中也必须实现
        abstract name: string

        // 抽象类，必须在其派生类中实现
        abstract eat()
    }

    class Dog extends Animal {
        private _name: string

        constructor(name: string) {
            super()
            this._name = name
        }

        get name(): string {
            return this._name;
        }

        set name(value: string) {
            this._name = value;
        }

        eat() {
            console.log("dog eat bone")
        }
    }

    class Sheep extends Animal {
        private _name: string

        constructor(name: string) {
            super();
            this._name = name
        }

        get name(): string {
            return this._name;
        }

        set name(value: string) {
            this._name = value;
        }

        eat() {
            console.log("sheep eat grass")
        }
    }

    function show(animal: Animal) {
        animal.eat()
    }

    let dog = new Dog("peter")
    let sheep = new Sheep('jerry')
    show(dog) // 父类引用指向子类实例 多态
    show(sheep)

}




