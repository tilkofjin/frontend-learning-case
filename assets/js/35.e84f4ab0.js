(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{390:function(t,s,a){"use strict";a.r(s);var n=a(42),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"提供者介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#提供者介绍"}},[t._v("#")]),t._v(" 提供者介绍")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://docs.nestjs.com/assets/Components_1.png",alt:"img",title:"提供者"}}),t._v("\n控制器应处理 "),a("code",[t._v("HTTP")]),t._v(" 请求并将更复杂的任务委托给 "),a("code",[t._v("Providers")]),t._v("。"),a("code",[t._v("Providers")]),t._v(" 只是一个用 "),a("code",[t._v("@Injectable()")]),t._v(" 装饰器注释的类，是纯粹的 "),a("code",[t._v("JavaScript")]),t._v(" 类。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("强烈建议")]),t._v(" "),a("p",[t._v("由于 "),a("code",[t._v("Nest")]),t._v(" 可以以更多的面向对象方式设计和组织依赖性,因此请按照官方建议，强烈推荐按照"),a("a",{attrs:{href:"https://zh.wikipedia.org/wiki/SOLID_(%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%E8%AE%BE%E8%AE%A1)",target:"_blank",rel:"noopener noreferrer"}},[t._v("SOLID(单一功能、开闭原则、里氏替换、接口隔离以及依赖反转)"),a("OutboundLink")],1),t._v("原则。")])]),t._v(" "),a("h2",{attrs:{id:"服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#服务"}},[t._v("#")]),t._v(" 服务")]),t._v(" "),a("p",[t._v("创建一个简单的服务示例，该服务将负责数据存储和检索，由其使用 "),a("code",[t._v("CatsController")]),t._v("，因此它被定义为 "),a("code",[t._v("Provider")]),t._v(" ，我们用这个类来装饰 "),a("code",[t._v("@Injectable()")]),t._v("。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("官方示例")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("cats.service.ts\n")])])])]),t._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Injectable "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@nestjs/common'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Cat "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./interfaces/cat.interface'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n@"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Injectable")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CatsService")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("readonly")]),t._v(" cats"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Cat"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("create")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("cat"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Cat")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cats"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cat"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("findAll")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Cat"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cats"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[t._v("若要使用 "),a("code",[t._v("CLI")]),t._v(" 创建服务类，只需输入命令 "),a("code",[t._v("$ nest g service cats")]),t._v("。")])]),t._v(" "),a("p",[a("code",[t._v("CatsService")]),t._v(" 是具有一个属性和两个方法的基本类。唯一的新特点是它使用 "),a("code",[t._v("@Injectable()")]),t._v(" 装饰器。该 "),a("code",[t._v("@Injectable()")]),t._v(" 附加有元数据，因此 Nest 知道这个类是一个 "),a("code",[t._v("Nest Provider")]),t._v("。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[t._v("示例中的 "),a("code",[t._v("Cat")]),t._v(" 接口如下")])]),t._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Cat")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  age"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  breed"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("我们现在有了一个服务类来检索 "),a("code",[t._v("cats")]),t._v(",在 "),a("code",[t._v("CatsController")]),t._v(" 里使用如下")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("cats.controller.ts\n")])])])]),t._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Controller"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Get"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Post"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Body "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@nestjs/common'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" CreateCatDto "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./dto/create-cat.dto'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" CatsService "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./cats.service'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Cat "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./interfaces/cat.interface'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n@"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Controller")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'cats'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CatsController")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("constructor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" catsService"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" CatsService")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  @"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Post")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("create")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("@"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Body")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" createCatDto"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" CreateCatDto")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("catsService"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("create")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("createCatDto"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  @"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("findAll")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Promise")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Cat"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("catsService"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("findAll")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("通过类构造函数注入 "),a("code",[t._v("CatsService")]),t._v(", 注意这里的 "),a("code",[t._v("private")]),t._v(" 语法，意味着我们已经在同一位置创建并初始化了 "),a("code",[t._v("catsService")]),t._v(" 成员。")]),t._v(" "),a("h2",{attrs:{id:"依赖注入"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#依赖注入"}},[t._v("#")]),t._v(" 依赖注入")]),t._v(" "),a("p",[a("code",[t._v("Nest")]),t._v(" 围绕着"),a("strong",[t._v("依赖注入")]),t._v("构建，这是一种非常优秀的设计模式，关于"),a("strong",[t._v("依赖注入")]),t._v("的相关文档官方建议参考\n"),a("a",{attrs:{href:"https://angular.io/guide/dependency-injection",target:"_blank",rel:"noopener noreferrer"}},[t._v("Aunglar"),a("OutboundLink")],1),t._v("\n借助 "),a("code",[t._v("typescript")]),t._v(" 的一些优秀的能力，管理依赖项变得很容易，因为它们按类型解析，以下示例 "),a("code",[t._v("nest")]),t._v(" 将展示通过创建并返回 "),a("code",[t._v("CatsService")]),t._v(" 的实例来解析 "),a("code",[t._v("catsService")]),t._v("(在单例模式下，如果现有实例在其他地方被请求，则返回该实例)。解析此依赖关系并将其传递给控制器的构造函数(或分配给指定的属性)。")]),t._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("constructor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" catsService"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" CatsService")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"作用域"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#作用域"}},[t._v("#")]),t._v(" 作用域")]),t._v(" "),a("p",[a("code",[t._v("Providers")]),t._v(" 通常具有与应用程序同步的生命周期("),a("code",[t._v("作用域")]),t._v(")，程序启动时，每个依赖都必须被解析，因此，所有 "),a("code",[t._v("Provider")]),t._v(" 都要实例化，同样，当程序关闭时，每个 "),a("code",[t._v("Provider")]),t._v(" 都要销毁掉，但是有些方法可以改变 "),a("code",[t._v("provider")]),t._v(" 生命周期的请求范围，这里有相关详细"),a("a",{attrs:{href:"https://docs.nestjs.com/fundamentals/injection-scopes",target:"_blank",rel:"noopener noreferrer"}},[t._v("文档 📚"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"自定义的-providers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自定义的-providers"}},[t._v("#")]),t._v(" 自定义的 Providers")]),t._v(" "),a("p",[a("code",[t._v("Nest")]),t._v(" 有一个内置的反转控制容器( "),a("code",[t._v("IoC")]),t._v(" ),可以解决 "),a("code",[t._v("Providers")]),t._v(" 之间的关系，此功能是上述"),a("strong",[t._v("依赖项注")]),t._v("入功能的基础，但实际远比上述强大得多，"),a("code",[t._v("@Injectable()")]),t._v(" 装饰器仅仅是冰山一角，并不是定义 "),a("code",[t._v("Providers")]),t._v(" 的唯一方法，你可以使用普通的值、类、异步或同步工厂。更多的示例"),a("a",{attrs:{href:"https://docs.nestjs.com/fundamentals/dependency-injection",target:"_blank",rel:"noopener noreferrer"}},[t._v("文档 📚"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"可选-providers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#可选-providers"}},[t._v("#")]),t._v(" 可选 Providers")]),t._v(" "),a("p",[t._v("有时，可能需要解决一些依赖项，例如，你的类可能取决于配置对象，如果没有传递，应使用默认值，这种情况下，依赖关系为可选，"),a("code",[t._v("provider")]),t._v(" 不会因为缺少配置导致错误。\n要指示 "),a("code",[t._v("provider")]),t._v(" 是可选的,在 "),a("code",[t._v("constructor")]),t._v(" 中使用 "),a("code",[t._v("@Optional()")]),t._v(" 装饰器。")]),t._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Injectable"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Optional"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Inject "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@nestjs/common'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n@"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Injectable")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HttpService")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("T")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("constructor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("@"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Optional")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" @"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Inject")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'HTTP_OPTIONS'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" httpClient"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("T")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("上面的示例中我们使用了自定的 "),a("code",[t._v("provider")]),t._v(" ,这是我们包含自定义 "),a("code",[t._v("HTTP_OPTIONS")]),t._v(" "),a("strong",[t._v("token")]),t._v("的原因，前面的示例显示了基于构造函数的注入，该注入通过依赖函数的类进行依赖，更多的自定义 "),a("code",[t._v("Providers")]),t._v(" 和相关 "),a("strong",[t._v("tokens")]),t._v("信息 "),a("a",{attrs:{href:"https://docs.nestjs.com/fundamentals/custom-providers",target:"_blank",rel:"noopener noreferrer"}},[t._v("📚"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"基于属性的注入"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基于属性的注入"}},[t._v("#")]),t._v(" 基于属性的注入")]),t._v(" "),a("p",[a("code",[t._v("Nest")]),t._v(" 到目前为止使用基于构造函数注入的技术，即通过构造函数的方法注入 "),a("code",[t._v("providers")]),t._v(" ,在一些特殊的场景，基于属性的注入方式变得更好用。例如，如果顶级类依赖与一个或多个 "),a("code",[t._v("providers")]),t._v(",通过从构造函数中调用子类的 "),a("code",[t._v("super()")]),t._v(" 来传递它们就显得非常繁琐，为了避免这种情况，可以在属性上使用 "),a("code",[t._v("@Inject()")]),t._v(" 装饰器。示例如下：")]),t._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Injectable"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Inject "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@nestjs/common'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n@"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Injectable")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HttpService")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("T")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  @"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Inject")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'HTTP_OPTIONS'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("readonly")]),t._v(" httpClient"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("T")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),a("p",[t._v("如果你的类没有其他 "),a("code",[t._v("provider")]),t._v(" 扩展，那你应该一直使用"),a("strong",[t._v("基于构造函数")]),t._v("的注入方式。")])]),t._v(" "),a("h2",{attrs:{id:"注册-provider"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注册-provider"}},[t._v("#")]),t._v(" 注册 Provider")]),t._v(" "),a("p",[t._v("现在我们已经有了一个自定义的提供者"),a("code",[t._v("(CatsService)")]),t._v(",同时我们有这个服务的使用者 "),a("code",[t._v("(CatsController)")]),t._v(",我们需要向 "),a("code",[t._v("Nest")]),t._v(" 注册该服务，已便能执行注入，我们可以编辑模块文件 "),a("code",[t._v("(app.module.ts)")]),t._v(" , 然后将服务添加至 "),a("code",[t._v("@Module()")]),t._v(" 装饰器的 "),a("code",[t._v("providers")]),t._v(" 数组中。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("官方示例")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("app.module.ts\n")])])])]),t._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Module "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@nestjs/common'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" CatsController "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./cats/cats.controller'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" CatsService "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./cats/cats.service'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n@"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Module")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  controllers"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("CatsController"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  providers"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("CatsService"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AppModule")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("code",[t._v("Nest")]),t._v(" 现在可以解析 "),a("code",[t._v("CatsController")]),t._v(" 类的依赖关系了。以下是现在的目录结构:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("    src\n    ├── cats\n    │    ├──dto\n    │    │   └──create-cat.dto.ts\n    │    ├── interfaces\n    │    │       └──cat.interface.ts\n    │    ├──cats.service.ts\n    │    └──cats.controller.ts\n    ├──app.module.ts\n    └──main.ts\n")])])]),a("h2",{attrs:{id:"手动实例化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#手动实例化"}},[t._v("#")]),t._v(" 手动实例化")]),t._v(" "),a("p",[t._v("迄今，已近讨论了 "),a("code",[t._v("Nest")]),t._v(" 是如何自动处理并解析依赖项的大部分细节。在某些情况下，可能需要跳出内置的依赖注入系统，并手动检索或实例化提供程序，我们在下面简要讨论两个这样的主题。")]),t._v(" "),a("p",[t._v("要获取现有实例或动态的实例提供程序，可以使用 "),a("a",{attrs:{href:"https://docs.nestjs.com/fundamentals/module-ref",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("Module reference")]),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("p",[t._v("在 "),a("code",[t._v("bootstrap()")]),t._v(" 函数中获取提供程序(例如，对于没有控制器的独立应用程序,或在引导过程中使用配置服务),请查看"),a("a",{attrs:{href:"https://docs.nestjs.com/standalone-applications",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("Standalone applications")]),a("OutboundLink")],1),t._v("。")])])}),[],!1,null,null,null);s.default=e.exports}}]);