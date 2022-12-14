type TArea = (width: number, height: number) => number

// 获取函数的参数类型
type params = Parameters<TArea>

// Parameters源码
// type Parameters<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never

// 解读: 如果泛型变量T是 () => infer R的`子集`，那么返回 通过infer获取到的函数返回值，否则返回boolean类型
type Func<T> = T extends () => infer R ? R : boolean
type func1 = Func<number> // boolean
type func2 = Func<''> // boolean
type func3 = Func<() => Promise<number>> // Promise<number>

// 同上，但当a、b为不同类型的时候，返回不同类型的联合类型
type Obj<T> = T extends { a: infer VType; b: infer VType } ? VType : number
type obj1 = Obj<string> // number
type obj2 = Obj<true> // => number
type obj3 = Obj<{ a: string; b: string }> // => string
type obj4 = Obj<{ a: number; b: () => void }> // => number | () => void
type obj5 = Obj<{ a: number; c: () => void }> // number

// 获取函数返回值 --> ReturnType 方法 ts 已内置
// 解释： T 必须是一个函数 所以T extends (...args: any) => any
// 右边： T 是否是 (...args: any) => infer R --》R 占位
type GetFnReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : never
const fn = () => ({})
type r1 = GetFnReturnType<TArea> // number
type r2 = GetFnReturnType<typeof fn> // {}
type r3 = ReturnType<TArea> // number
type r4 = ReturnType<typeof fn> // {}

// 获取实例类型 InstanceType
class School {
    name: string
    uid: string

    constructor(name: string) {
        this.name = name
    }
}

type MyInstanceType<T extends new (...args: any) => any> = T extends new (...args: any) => infer I ? I : any
type schoolType = MyInstanceType<typeof School>
type schoolType1 = InstanceType<typeof School>
type name1 = schoolType['name']
type name2 = schoolType['uid']

// 获取构造函数的 constructor 中传入的参数的类型 ConstructorParameters
type MyConstructorParameters<T extends new (...args: any) => any> = T extends new (...args: infer A) => any ? A : never

type argsType1 = MyConstructorParameters<typeof School>
type argsType2 = ConstructorParameters<typeof School>
