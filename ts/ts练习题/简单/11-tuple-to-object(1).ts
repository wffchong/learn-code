// 传入一个元组类型，将这个元组类型转换为对象类型，这个对象类型的键/值都是从元组中遍历出来。

const tuple = ['tesla', 'model 3', 'model X', 'model Y', 1] as const

type result = TupleToObject<typeof tuple>
// expected { tesla: 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}

// (string | number)[] 中的number代表的是number类型
type TupleToObject<T extends readonly (string | number)[]> = {
    // T中的number代表索引
    [key in T[number]]: key
}
