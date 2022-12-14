{
    // 主要用于剔除interface中的部分属性。
    // 比如接口iUser包含name、age、firstName、lastName、location属性，
    // 而接口iUser2不包含location属性，
    // 我们可以使用前面提到的Pick实现，但这样会比较复杂，所以有了Omit 操作符。
    interface iUser {
        name: string
        age: number
        firstName: string
        lastName: string
        location: string
    }

    interface iUser2 {
        name: string
        age: number
        firstName: string
        lastName: string
    }

    type res1 = Pick<iUser, 'age' | 'firstName' | 'lastName' | 'name'>

    type res2 = Omit<iUser, 'location'>
}
