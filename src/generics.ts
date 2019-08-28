function log<T>(value: T):T {
    console.log(value)
    return value
}

log<string[]>(['1', '2'])
log(['1', '2'])

// type Log = <T>(value: T) => T
// let myLog: Log = log

interface Log<T = string> {
    (value: T): T
}

let myLog: Log = log

myLog('a')

class Log2<T>{
    run(value: T){
        console.log(value)
        return value
    }
}

let logtest1 = new Log2<number>()
logtest1.run(1)

let logtest2 = new Log2()
logtest2.run(1)
logtest2.run('2')
