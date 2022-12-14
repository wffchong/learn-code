{
    // Required和Partial方法正好相反，是将属性变成必须。方法同样非常简单，可以这样实现（该方法已内置）
    interface iUser {
        name?: string
        age?: number
    }

    interface iOptionUser {
        name: string
        age: number
    }

    type MyRequired<T> = {
        [key in keyof T]-?: T[key]
    }

    type iOptionUser1 = MyRequired<iUser>
    type iOptionUser2 = Required<iUser>
}
