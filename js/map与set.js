// Map 对象保存键值对，并且能够记住键的原始插入顺序。任何值（对象或者基本类型）都可以作为一个键或一个值。
// const map = new Map()
// map.set('a', 1)
// map.set('b', 2)
// map.set('b', 2)
// map.set(NaN, 3)
// map.set(NaN, 4)
// map.set({ a: 1 }, 5)
// map.set({ a: 1 }, 5)

// console.log(map)
// map.a = 1

// map.forEach((value, key, m) => {
//     console.log(value)
//     console.log(key)
//     console.log(m)
// })

// const obj = {}
// obj.a = 1
// obj.__proto__.a = 2
// console.log(obj)
// for (const key in obj) {
//     console.log(key, obj[key])
// }
// const map1 = new Map()
// console.log(obj)
// console.log(map1)

// const kvArray = [
//     ['key1', 'value1'],
//     ['key2', 'value2']
// ]

// const map = new Map(kvArray)
// console.log(map)
// console.log(map.get('key1'))

// const map = new Map()
// map.set({ a: 1 }, "['a', 2]")

// const obj = {
//     a: {
//         value: 1,
//         expression: ['a', 2]
//     }
// }
// console.log(map)
// console.log(obj)

// class Student {
//     constructor(name, age, greed) {
//         this.name = name
//         this.age = age
//         this.greed = greed
//     }
// }

// class Greed {
//     constructor(greed) {
//         this.greed = greed
//     }

//     static greedData = {
//         // ...
//     }
// }

// const stu = new Student('小王', 18, 3)
// const greed3 = new Greed(3)

// const studentInfo = new Map()
// studentInfo.set(stu, greed3)
// console.log(studentInfo)
// console.log(studentInfo.get(stu))

// const state = {
//     a: 1,
//     b: {
//         c: {
//             d: 2
//         }
//     }
// } : [ callback ]

// const set = new Set()
// set.add(1)
// set.add({ a: 1 })
// set.add('a')

// console.log(set)
// set.forEach((value, key, s) => {
//     console.log(value)
//     console.log(key)
//     console.log(s)
// })

// const arr = [1, 2, 3, 3, 4, 'a', NaN, NaN, undefined, undefined, null, { a: 1 }, { a: 1 }]

// const newArr = [...new Set(arr)]
// console.log(newArr)
