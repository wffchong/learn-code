// in用于取联合类型的值。主要用于数组和对象的构造。
type name = 'firstName' | 'lastName'

// 但切记不要用于 interface，否则会出错
type TName = {
    [key in name]: string
}
