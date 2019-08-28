interface Human {
    // new (name: string): void
    // 接口只能约束类的公有成员
    name: string
    eat(): void
}

class Asian implements Human {
    constructor(name: string){
        this.name = name
    }
    name: string
    eat() {}
    sleep() {}
}

interface Man extends Human {
    run(): void
}

interface Child {
    cry(): void
}

interface Boy extends Man, Child {

}

let boy: Boy = {
    name: '',
    eat() {},
    run() {},
    cry() {}
}

//接口也可以继承类
class Auto {
    state = 1
    // private state2 = 0
}

// let auto = new Auto()
interface AutoInterface extends Auto {

}

// let auto: AutoInterface = {
//     state: 2
// }

class C implements AutoInterface {
    state = 1
}

class Bus extends Auto implements AutoInterface {
    
}