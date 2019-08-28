abstract class Animal {
    eat() {
        console.log('eat')
    }
    abstract sleep(): void
}
// let animal = new Animal()

class Dog extends Animal{
    constructor(name: string) {
        super()
        this.name = name
    }
    public name: string
    run() {}
    private pri() {}
    protected pro() {}
    readonly legs: number = 4
    static food: string = 'bones'
    sleep() {
        console.log('dog sleep')
    }
}

console.log(Dog.prototype)
let dog = new Dog('wangwang')
console.log(dog, Dog.food)
dog.eat()
dog.sleep()

class Husky extends Dog {
    constructor(name: string, public color: string) {
        super(name)
        this.color = color
        // this.pri()
        this.pro()
    }
    // color: string
}

let husky = new Dog('husky wangwang')
console.log(Husky.food)
// husky.sleep()

class Cat extends Animal{
    constructor() {
        super()
    }
    sleep() {
        console.log('Cat sleep')
    }
}
let cat = new Cat()
let animals: Animal[] = [dog, cat]
animals.forEach(i => {
    i.sleep()
})

class WorkFlow {
    step1() {
        return this
    }
    step2() {
        return this
    }
}

let workFlow = new WorkFlow()
workFlow.step1().step2()

class MyFlow extends WorkFlow {
    next() {
        return this
    }
}

new MyFlow().next().step1().step2().next()