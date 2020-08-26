// 变量是一种使用方便的占位符，用于引用计算机内存地址
// 可以把变量看作存储数据的容器

/**
 * var [变量名] : [类型] = 值;
 * var [变量名] : [类型];
 * var [变量名] = 值;
 * var [变量名]; // 默认初始值undefined
 */

//  TypeScript遵循强类型，如果将不同的类型赋值给变量则会编译错误

// 类型断言 TypeAssertion————允许变量从一种类型更改为另一种类型
// <类型>值   或   值as类型
// 类型断言之所以不称为类型转换 是因为转换意味着某种运行时的转换。
// 但是类型断言纯粹是一个编译时语法，同时，它也是一种为编译器提供关于如何分析代码的方法
// 如果毫无根据的断言，使用any

var str = '1';
var str2: number = <number> <any> str;
console.log(str2);

// 类型推断 —— 变量没有给出类型是，TypeScript编译器利用类型推断来推断类型

// 变量作用域————全局作用域、类作用域（字段）、局部作用域
var global_num = 12; // 全局变量
class Numbers {
    num_val = 13; // 实例变量——实例化后的对象访问
    static sval = 10; // 静态变量——类名.变量直接访问
    storeNum(): void {
        var local_num = 14; // 局部变量
    }
}

console.log('全局变量:'+global_num);
console.log('静态变量:'+Numbers.sval);
console.log('实例变量:'+new Numbers().num_val);

// 局部变量 外部不能访问
