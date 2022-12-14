{
    // 假如我们有一个 Promise 对象，这个 Promise 对象会返回一个类型。
    // 在 TS 中，我们用 Promise 中的 T 来描述这个 Promise 返回的类型。请你实现一个类型，可以获取这个类型。

    // 例如：Promise<ExampleType>，请你返回 ExampleType 类型。
    // 如果T是promise类型且接收的参数也是promise类型的话，则进行递归调用，否则返回非promisee参数。

    type ExampleType = Promise<string>
    type ExampleType1 = Promise<Promise<number>>

    type Result = MyAwaited<ExampleType> // string
    type Result1 = MyAwaited<ExampleType1>

    // -------------

    type MyAwaited<T extends Promise<unknown>> = T extends Promise<infer R>
        ? R extends Promise<unknown>
        // 递归
            ? MyAwaited<R>
            : R
        : never
}
