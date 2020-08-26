// 模块、函数、变量、语句和表达式、注释
// 对象： 类的实例，有状态和行为
// 类：一个模版，描述一类对象的行为和状态
// 方法： 方法是类的操作的实现步骤
var Site = /** @class */ (function () {
    function Site() {
    }
    Site.prototype.name = function () {
        console.log("TypeScript 面向对象编程");
    };
    return Site;
}());
var obj = new Site();
obj.name();
