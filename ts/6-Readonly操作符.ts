{
    // Readonly是将属性变成只读。
    interface iUser {
        name: string
        age: number
    }

    type MyReadonly<T> = {
        readonly [key in keyof T]: T[key]
    }

    type iOptionUser1 = MyReadonly<iUser>
    type iOptionUser2 = Readonly<iUser>
}
