# PHP trait

https://wiki.php.net/rfc/traits  
https://secure.php.net/manual/zh/language.oop5.traits.php  

自 PHP 5.4.0 起，PHP 实现了一种代码复用的方法，称为 trait。  

Trait 是为类似 PHP 的单继承语言而准备的一种代码复用机制。  
Trait 为了减少单继承语言的限制，使开发人员能够自由地在不同层次结构内独立的类中复用 method。  
Trait 和 Class 组合的语义定义了一种减少复杂性的方式，避免传统多继承和 Mixin 类相关典型问题。 

Trait 和 Class 相似，但仅仅旨在用细粒度和一致的方式来组合功能。 无法通过 trait 自身来实例化。  
它为传统继承增加了水平特性的组合；也就是说，应用的几个 Class 之间不需要继承。  

优先级  
从基类继承的成员会被 trait 插入的成员所覆盖。  
优先顺序是来自当前类的成员覆盖了 trait 的方法，而 trait 则覆盖了被继承的方法。  

多个 trait  
通过逗号分隔，在 use 声明列出多个 trait，可以都插入到一个类中。  
  
冲突的解决  
如果两个 trait 都插入了一个同名的方法，如果没有明确解决冲突将会产生一个致命错误。  
为了解决多个 trait 在同一个类中的命名冲突，需要使用 insteadof 操作符来明确指定使用冲突方法中的哪一个。  
以上方式仅允许排除掉其它方法，as 操作符可以将其中一个冲突的方法以另一个名称来引入。  

修改方法的访问控制  
使用 as 语法还可以用来调整方法的访问控制。  

从 trait 来组成 trait  
正如 class 能够使用 trait 一样，其它 trait 也能够使用 trait。  
在 trait 定义时通过使用一个或多个 trait，能够组合其它 trait 中的部分或全部成员。  

Trait 的抽象成员  
为了对使用的类施加强制要求，trait 支持抽象方法的使用。  

Trait 的静态成员  
Traits 可以被静态成员静态方法定义。  

属性  
Trait 同样可以定义属性。  
如果 trait 定义了一个属性，那类将不能定义同样名称的属性，否则会产生一个错误。  
如果该属性在类中的定义与在 trait 中的定义兼容（同样的可见性和初始值）则错误的级别是 E_STRICT，否则是一个致命错误。  
