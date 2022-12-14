// let obj = { a: 1 } // 1  --> 开辟一个新的地址存放 { a:1 }

// let obj1 = obj // +1
// let obj2 = obj // +1

// // 此时这个地址被引用了三次
// // 我们可以通过设置null，让链接到这个地址的指针断掉
// obj = null // -1   ---> 这样obj链接到{ a:1 }的指针就断掉了
// obj1 = null // -1
// obj2 = null // -1

// 此时这个{ a:1 }就没有被使用了，也就是引用计数为0，浏览器的垃圾回收机制会在某个不可预测的时间把他回收掉

// let obj = { a: 1 } // 1

// let obj1 = obj // +1

// const map = new Map()
// map.set(obj, obj)
// console.log(map)
// console.log(obj)
// console.log(map)
// const weakmap = new WeakMap()
// weakmap.set(obj, 1)
// console.log(weakmap)
// obj = null
// obj1 = null
// console.log(weakmap)

// setTimeout(() => {
//     console.log(weakmap)
// }, 10000)

const obj = {
    a: 1,
    b: 2,
    c: {
        d: 3,
        e: {
            f: {
                g: 4
            }
        }
    }
}

// 循环引用
obj.c.e.f.h = obj

function deepClone(data, hash = new WeakMap()) {
    if (!data || typeof data !== 'object') return data
    if (data instanceof Date) return new Date(data)
    if (data instanceof RegExp) return new RegExp(data)

    // 每次都先看看存不存在这个引用，存在就直接返回这个引用
    if (hash.get(data)) return hash.get(data)

    // 如果不存在此引用
    // 不是上面的情况就有可能是数组或者对象
    const newObj = new data.constructor()

    hash.set(data, newObj)

    for (const key in data) {
        if (data.hasOwnProperty(key)) {
            newObj[key] = deepClone(data[key], hash)
        }
    }
    return newObj
}

const newObj = deepClone(obj)
newObj.c.e.f.g = 400
console.log(obj)
console.log(newObj)
