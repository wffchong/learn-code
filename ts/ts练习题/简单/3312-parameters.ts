{
    // 实现内置的 Parameters 类型，而不是直接使用它

    const foo = (arg1: string, arg2: number): void => {}

    type FunctionParamsType = MyParameters<typeof foo>
    // [arg1: string, arg2: number]

    //  -----------------------

    type MyParameters<T extends (...args: any) => any> = T extends (...args: infer R) => any ? R : never
}
