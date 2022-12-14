{
    // 功能与 Exclude相反
    // 从类型 T 中剔除所有可以赋值给 U 的属性，然后构造一个类型。主要用于联合类型
    type u = 'a' | 'b' | 'c'
    type res = Extract<u, 'a' | 'b'> // 'c'
}


