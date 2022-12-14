{
    // Record用于创建一个具有同类型属性值的对象。

    interface Obj {
        name: string
        age: number
    }

    const obj: Obj = {
        name: 'wff',
        age: 18
    }

    // r 的类型是键位Obj的键，值为string
    type r = Record<keyof Obj, string>
}
