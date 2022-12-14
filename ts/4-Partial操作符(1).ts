// Partial 将属性变为可选属性。
interface iUser {
    name: string
    age: number
}

interface iOptionUser {
    name?: string
    age?: number
}

type MyPartial<T> = {
    [key in keyof T]?: T[key]
}

type iOptionUser1 = MyPartial<iUser>