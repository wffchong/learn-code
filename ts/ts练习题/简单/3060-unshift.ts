{
    // 实现类型版本的 Array.unshift。
    type Result = Unshift<[1, 2], 0> // [0, 1, 2,]

    // -------------

    type Unshift<T extends readonly any[], U> = [U, ...T]
}
