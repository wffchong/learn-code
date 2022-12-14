{
    // 从类型 T 中剔除所有可以赋值给 U 的属性，然后构造一个类型。主要用于联合类型
    type u = 'a' | 'b' | 'c'
    type res = Exclude<u, 'a' | 'b'> // 'c'
    type MyExclude<T, U> = T extends U ? never : T
}
