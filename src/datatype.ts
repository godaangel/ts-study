// 原始类型
let bool: boolean = true
let num: number = 123

//数组
let arr1: number[] = [1, 3, 4]
let arr2: Array<number | string> = [1, 3, 2, '4']

//元组
let tuple: [number, string] = [0, '1']
// tuple.push(2)
// console.log(tuple)
// tuple[2]

//函数
let add = (x: number, y: number) => x+y
let compute: (x: number, y: number) => number
compute = (a, b) => a+b

let obj: {x: number, y: number} = { x: 1, y: 1 }
obj.x = 3

let noReturn = (): void => {}

