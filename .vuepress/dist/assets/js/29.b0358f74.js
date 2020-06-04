(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{273:function(a,n,t){"use strict";t.r(n);var s=t(28),e=Object(s.a)({},(function(){var a=this,n=a.$createElement,t=a._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"_7-2-数据抽象-做什么-重于-怎么做"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-2-数据抽象-做什么-重于-怎么做"}},[a._v("#")]),a._v(" 7.2 数据抽象——“做什么”重于“怎么做”")]),a._v(" "),t("h2",{attrs:{id:"概念"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#概念"}},[a._v("#")]),a._v(" 概念")]),a._v(" "),t("div",{staticClass:"language-md extra-class"},[t("pre",{pre:!0,attrs:{class:"language-md"}},[t("code",[a._v("过程抽象的结果是函数，数据抽象的结果是数据类型。\n\n如果一个数据类型依赖于具体实现，他就是具体的，反之是抽象的。\n拿通信地址为例，他的所有域省、市、街道和邮编对于客户都应该是透明公开的\n——至于是通过getter、setter还是直接访问并无本质区别，\n如此用户才能有针对性的进行数据存取、传递和获取。\n\n如果对该类型进行修改，比如增加一个代表国家的域或减少一个邮编的域，必须知会用户，否则毫无意义。\n显然这种类型和实现细节密切相关，因而是具体的。\n\n作为抽象数据结构的例子，队列是一种非常基本的数据接口，广泛应用于OS、网络和现实生活中，\n一般包括类似数据库的CRUD（增删改查），建队、撤队、入队、出队、查询长度和队首等。\n\n队列的抽象所在——用户不应该知道也不必知道他的具体实现，只能通过指定接口来进行‘暗箱操作’。\n无论是用数组来实现，还是链表，用户根本不需关心。\n这样经过数据抽象，队列的本质特征由API展现，非本质特征则屏蔽于客户的视野之外。\n")])])]),t("h2",{attrs:{id:"具体数据类型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#具体数据类型"}},[a._v("#")]),a._v(" 具体数据类型")]),a._v(" "),t("div",{staticClass:"language-md extra-class"},[t("pre",{pre:!0,attrs:{class:"language-md"}},[t("code",[a._v("数据类型和数据运算是程序语言的基本要素，除了内建的类型和运算外，\n程序语言还提供了用户定义（user-defined）的扩展机制，以提高编程者的效率\n正如函数是一些运算的复合，自定义类型通常是一些基本类型的复合。\n不过单纯的复合类型并不是真正意义上的数据抽象，我们关注的是抽象数据类型（ADT）。\n\n数据类型强调具体实现，多从实现者和维护者的角度来考虑\n比如：栈、队列、表、集合、二叉树等作为数据结构，人们关心的是如何利用它们来有效地组织数据\n\n具体数据类型主要用于数据存储，除了getter和setter外没有其他实质性的运算\n例如省、市、街道和邮编组成的通信地址便是一个典型的具体类型，\n定义这种类型可以绑定省、市、街道和邮编这4个相关数据，便于统一管理，包括创建、复制、作为参数传递、作为函数返回值。\n\nJava EE中常用一种设计模式：\n数据传输对象（Data Transfer Object， DTO），又称值对象（Value Object， VO），\n这类对象不含任何业务逻辑，仅仅作为简单的数据容器，实质上也属于具体数据类型。\n\n既然具体数据类型只是单纯作为数据存取用，基本不具备行为能力，因此更多地体现出被动的特征。\n")])])]),t("h2",{attrs:{id:"抽象数据类型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#抽象数据类型"}},[a._v("#")]),a._v(" 抽象数据类型")]),a._v(" "),t("div",{staticClass:"language-md extra-class"},[t("pre",{pre:!0,attrs:{class:"language-md"}},[t("code",[a._v("抽象数据类型强调抽象接口，多从设计者和使用者的角度来考虑\n作为抽象数据类型，人们更关心的是类型的接口、逻辑行为及背后的数学模型\n\n参数抽象使得数据接口普适化，规范抽象使得数据接口契约化\n一个完整的数据抽象除了对每个接口做规范说明外，还需对该数据类型做整体规范说明，OOP中的类注释文档即作此用。\n特别地，契约式设计中的类不变量便是一种整体的规范。\n有了整体的规范描述，一个抽象数据类型才能真正在客户头脑中抽象化和概念化。\n\n从某种层度上来说，整型也属于一种ADT。\n它的抽象之处在于，用户不须知道一个整数的底层究竟是如何表示的，以及整数运算是如何实现的，\n只须知道整型代表着数学概念上的整数，支持加减乘除运算即可。\n\n例如由于Java中基本数据类型int和long有精度的局限，\n因此引入了BigInteger，以解决任意大小的整数值的表示和运算问题。如果说BigInteger是ADT，肯定毫无异议。\n如果不考虑性能，它和int在用户眼里并无概念上的差异，至多是使用方式略有不同而已——一个调用类的方法，一个利用运算符。\n\n如果采用化学的语言，基本类型好比单质，抽象数据类型好比化合物，具体数据类型好比混合物。\n\n甚至我们可以推而广之地说，抽象数据类型的目的就是为了把自定义的复合类型当作基本类型来看待和运用。\n与之相对地，另一种自定义类型——具体数据类型则无法胜任此职。\n")])])]),t("h2",{attrs:{id:"在程序设计中的应用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#在程序设计中的应用"}},[a._v("#")]),a._v(" 在程序设计中的应用")]),a._v(" "),t("div",{staticClass:"language-md extra-class"},[t("pre",{pre:!0,attrs:{class:"language-md"}},[t("code",[a._v("Programming to an Interface, Not an Implementation.\n接口是纲，实现是目。纲若不举，目无以张。\n\n不同的内部数据结构，导致不同的算法实现。\n正是注意到这一点，OOP提倡以数据为中心来组织算法逻辑，以增强系统的可维护性。\n\n‘以接口为中心’是就设计而言的，强调对象的行为，\n以及对象的交互，不关心底层的实现细节，更多地属于OOD的范畴；\n\n‘以数据为中心’是就实现而言的，强调算法对数据的依赖性，\n以别于过程变成‘以算法为中心’的风格，更多地属于OOP的范畴。\n")])])]),t("ul",[t("li",[a._v("总之")])]),a._v(" "),t("div",{staticClass:"language-md extra-class"},[t("pre",{pre:!0,attrs:{class:"language-md"}},[t("code",[a._v("分析阶段的主要目的是描述问题而非解决问题，因此OOA的关键是从问题领域中抽象出对象为基础的概念模型\n最宏观最抽象的OOA以对象而非过程为中心，\n\n数据结构重在实现，关键是属性的数据表示（representation）\n最微观最具体的OOP以数据而非算法为中心，\n\n抽象数据类型重在设计，关键是行为的抽象接口\n介乎其中的OOD以接口而非实现为中心。\n")])])]),t("ul",[t("li",[a._v("好处")])]),a._v(" "),t("div",{staticClass:"language-md extra-class"},[t("pre",{pre:!0,attrs:{class:"language-md"}},[t("code",[a._v("这便是抽象带给使用者的好处：\n可以摆脱数据类型的底层细节，通过高层接口来操纵对象，保证了客户代码的可读性和稳定性。\n\n开发者同样从中受益\n接口与实现的分离，有利于开发时间的分离（开发人员可以推迟在不同实现方式中做最后抉择）\n开发人员的分离（代码的修改和维护不局限于原作者）。\n")])])]),t("h2",{attrs:{id:"在语言中的实现与应用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#在语言中的实现与应用"}},[a._v("#")]),a._v(" 在语言中的实现与应用")]),a._v(" "),t("div",{staticClass:"language-md extra-class"},[t("pre",{pre:!0,attrs:{class:"language-md"}},[t("code",[a._v("可以将OOP中的类理解为具有继承和多态机制的ADT\n但严格来说，并不是所有的类都具有抽象性，比如仅作存储用的对象所属的类\n\n在C#中有值类型和引用类型之分，分别用struct和class关键字指明。\n选择时，可以把ADT作为一个参考原则：是ADT则采用引用类型，否则采用值类型。\n\nC++中struct和class在机制上没有区别，只是前者默认是public而后者默认是private。\n但习惯上也是前者作具体类型，后者作抽象类型。\n这非常自然，既然是具体类型，其域成员大都没有隐藏的必要。\n\nJava和C中没有类似的区分，一个只支持Class，一个只支持Struct。\n")])])]),t("h2",{attrs:{id:"总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[a._v("#")]),a._v(" 总结")]),a._v(" "),t("div",{staticClass:"language-md extra-class"},[t("pre",{pre:!0,attrs:{class:"language-md"}},[t("code",[a._v("作为一个合格的程序员，写出的代码不仅要合法，还要合理：\n合法指合乎语法，合理指合乎语义。\n\n例如法律只是维护社会秩序的最低限度的规范，一个只遵守法律而不遵守通用规范的人必定与社会格格不入。\n现实中存在很多不合理但合法的情况，不合理是指实现者违背了规范抽象的承诺，\n合法是指编译器无法之别这种违约行为。\n")])])]),t("div",{staticClass:"language-md extra-class"},[t("pre",{pre:!0,attrs:{class:"language-md"}},[t("code",[a._v("抽象——接口与实现相分离；\n数据——以数据中心组织逻辑；\n类型——单纯而定义良好的概念。\n抽象——尤其是数据抽象——才是OOP的核心和起源。\n\n没有抽象作为基础，封装、继承、和多态尽皆无本之木。\n只有贯彻了ADT思想，设计出来的类才会是‘万人迷’：\n有优雅的外形——抽象；有丰富的内涵——数据；有鲜明的个性——类型。\n")])])])])}),[],!1,null,null,null);n.default=e.exports}}]);