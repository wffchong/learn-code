{
    // 不使用 Omit 实现 TypeScript 的 Omit<T, K> 泛型。
    // Omit 会创建一个省略 K 中字段的 T 对象。

    interface Todo {
        title: string
        description: string
        completed: boolean
    }

    type TodoPreview = MyOmit<Todo, 'description' | 'title'>

    const todo: TodoPreview = {
        completed: false
    }

    // --------------
    type MyOmit<T, U extends keyof T> = {
        [K in Exclude<keyof T, U>]: T[K]
    }
}
