{
    // Pick顾名思义，就是把一些属性挑选出来
    interface iUser {
        name: string
        age: number
        color: string
    }

    type res = Pick<iUser, 'color' | 'age'>

    type MyPick<T, K extends keyof T> = {
        [P in K]: T[P]
    }
    type res1 = MyPick<iUser, 'color' | 'age'>
}
