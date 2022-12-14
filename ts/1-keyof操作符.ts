interface iUserInfo {
    name: string
    age: number
}
type keys = keyof iUserInfo

// const getValue = (obj: object, key: string) => {
//     return obj[key]
// }

// const obj = {
//     a: 1,
//     b: 2
// }

// getValue(obj, 'a')

// type GetValue = <O extends Object, K extends keyof O>(obj: O, key: K) => O[K]

// const getValue: GetValue = (obj, key) => {
//     return obj[key]
// }

// 使用 keyof 后我们可以看到，可以完整的提示可以输入的值，当拼写错误时也会有清晰的提示。
const getValue: <O extends Object, K extends keyof O>(obj: O, key: K) => O[K] = (obj, key) => {
    return obj[key]
}

const obj = {
    a: 1,
    b: 2
}

getValue(obj, 'a')
