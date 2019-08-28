enum Role {
    Reporter,
    Developr = 3,
}
console.log(Role.Reporter, Role)

enum Message {
    Success = '恭喜你'
}

//常亮枚举，编译后会消失，下方的对象会直接被赋值（相当于减少了上面定义部分的代码量）
const enum Month {
    Jan,
    Feb
}
let month = [Month.Jan, Month.Feb]

enum E {a, b}
enum F {a = 0, b =1}

enum G {a = 'apple', b ='banana'}

let e: E = 3
let f: F = 3

let g: G.a = G.a

enum Answer {
    N,
    Y = 1,
    X = Math.ceil(1)
}

interface User {
    name: string
    age: number
    address: string
}

interface UserList {
    data: User[]
}

let userList = {
    data: [{
        name: 'godaangel',
        age: 18,
        address: 'xxxx'
    }]
}

function render(list: UserList):void {
    list.data.forEach((item) => {
        console.log(item.name, item.age)
    });
}

render(userList)