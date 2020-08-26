/**
 * any 任意类型
 * number 数字类型
 * string 字符串类型
 * boolean 布尔类型
 * [] 数组类型
 * x: [string, number] 元祖
 * enum 枚举类型
 * void 标识方法返回值的类型
 * null 表示对象缺失
 * undefined 用于初始化变量为一个未定义的值
 * never never是其它类型（包括null、undefined）的自类型，代表从不会出现的值
 */

//  使用null、undefined只能被赋值给void或本身对应的类型————Typescript启用严格的空校验（strictNullChecks)

// never类型的变量只能被never类型所赋值 在函数中通常表现为抛出异常或无法执行到终止点（例如无限循环)