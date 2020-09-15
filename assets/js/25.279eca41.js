(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{380:function(t,s,e){"use strict";e.r(s);var a=e(42),r=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"介绍"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[t._v("#")]),t._v(" 介绍")]),t._v(" "),e("p",[t._v("在这一组文章中, 您将了解 "),e("code",[t._v("Nest")]),t._v(" 的核心基础知识。为了了解基本的 "),e("code",[t._v("nest")]),t._v(" 应用程序构建模块，我们将构建一个基本的 "),e("code",[t._v("CRUD")]),t._v(" 应用程序, 其中的涵盖了大量的基础功能。")]),t._v(" "),e("h2",{attrs:{id:"语言"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#语言"}},[t._v("#")]),t._v(" 语言")]),t._v(" "),e("p",[t._v("我们爱上了 "),e("font",{attrs:{color:"red"}},[t._v(" TypeScript ")]),t._v("，但最重要的是，我们喜欢 "),e("font",{attrs:{color:"red"}},[t._v("Node.js")]),t._v("。 这就是为什么 "),e("code",[t._v("Nest")]),t._v(" 兼容 "),e("code",[t._v("TypeScript")]),t._v(" 和原生 "),e("code",[t._v("JavaScript")]),t._v("。"),e("code",[t._v("Nest")]),t._v(" 正利用最新的语言功能，所以要使用原生的 "),e("code",[t._v("JavaScript")]),t._v(" 框架，我们需要一个 "),e("font",{attrs:{color:"red"}},[t._v("Babel")]),t._v(" 编译器。")],1),t._v(" "),e("p",[t._v("在文章中，我们主要使用 "),e("code",[t._v("TypeScript")]),t._v(" ，但是当它包含一些 "),e("code",[t._v("Typescript")]),t._v(" 特定的表达式时，总是可以将代码片段切换到 "),e("code",[t._v("JavaScript")]),t._v(" 版本。")]),t._v(" "),e("h2",{attrs:{id:"先决条件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#先决条件"}},[t._v("#")]),t._v(" 先决条件")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),e("p",[t._v("请确保您的操作系统上已安装 "),e("a",{attrs:{href:"https://nodejs.org/en/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Node.js"),e("OutboundLink")],1),t._v("（> = 10.13.0）。")])]),t._v(" "),e("h2",{attrs:{id:"创建"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#创建"}},[t._v("#")]),t._v(" 创建")]),t._v(" "),e("p",[t._v("安装 "),e("code",[t._v("npm")]),t._v(" 后，您可以在OS终端中使用以下命令创建新的 "),e("code",[t._v("Nest")]),t._v(" 项目：")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" i -g @nestjs/cli\n$ nest new project-name\n")])])]),e("p",[t._v("将创建项目目录，安装节点模块和其他一些样板文件，并创建 "),e("code",[t._v("src")]),t._v("/目录，并填充几个核心文件。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("src\n├── app.controller.ts\n├── app.module.ts\n└── main.ts\n")])])]),e("p",[t._v("以下是这些核心文件的简要概述：")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("文件名")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("概述")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("app.controller.ts")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("单一路径的基本控制器样本。")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("app.module.ts")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("应用程序根模块。")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("main.ts")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("使用核心功能 "),e("code",[t._v("NestFactory")]),t._v(" 创建 "),e("code",[t._v("Nest")]),t._v(" 应用程序实例的应用程序的入口文件。")])])])]),t._v(" "),e("p",[e("code",[t._v("main.ts")]),t._v(" 包含一个异步函数，它将引导我们的应用程序：")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("官方示例")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("main.ts\n")])])])]),t._v(" "),e("div",{staticClass:"language-typescript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-typescript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" NestFactory "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@nestjs/core'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" AppModule "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./app.module'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("bootstrap")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" app "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" NestFactory"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("create")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("AppModule"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" app"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("listen")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("3000")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("bootstrap")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("要创建一个 "),e("code",[t._v("Nest")]),t._v(" 应用程序实例，我们使用核心的 "),e("code",[t._v("NestFactory")]),t._v(" 类。"),e("code",[t._v("NestFactory")]),t._v(" 公开了一些允许创建应用程序实例的静态方法。"),e("code",[t._v("create()")]),t._v(" 方法返回一个应用程序对象，该对象满足 "),e("code",[t._v("INestApplication")]),t._v(" 接口。该对象提供了一组方法，这些方法将在接下来的章节中进行介绍。在上面的 "),e("code",[t._v("main.ts")]),t._v(" 示例中，我们只需启动 "),e("code",[t._v("HTTP")]),t._v(" 侦听器，即可让应用程序等待入站 "),e("code",[t._v("HTTP")]),t._v(" 请求。")]),t._v(" "),e("p",[t._v("请注意，使用 "),e("code",[t._v("Nest CLI")]),t._v(" 搭建的项目会创建一个初始项目结构，鼓励开发人员遵循将每个模块保留在其专用目录中的约定。")]),t._v(" "),e("h2",{attrs:{id:"平台"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#平台"}},[t._v("#")]),t._v(" 平台")]),t._v(" "),e("p",[e("code",[t._v("Nest")]),t._v(" 的目标是成为一个与平台无关的框架。平台独立性使创建可重用的逻辑部分成为可能，开发人员可以在多种不同类型的应用程序中利用这些逻辑部分。从技术上讲，一旦创建了适配器，"),e("code",[t._v("Nest")]),t._v(" 便可以使用任何 "),e("code",[t._v("Node HTTP")]),t._v(" 框架。现成支持两种HTTP平台："),e("a",{attrs:{href:"https://expressjs.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Express"),e("OutboundLink")],1),t._v(" 和 "),e("a",{attrs:{href:"https://www.fastify.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Fastify"),e("OutboundLink")],1),t._v("。您可以选择最适合您需求的。")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("平台")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("描述")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("platform-express")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("a",{attrs:{href:"https://expressjs.com/",target:"_blank",rel:"noopener noreferrer"}},[e("font",{attrs:{color:"red"}},[t._v("Express")]),e("OutboundLink")],1),t._v("是众所周知的 "),e("code",[t._v("nodejs")]),t._v("的 "),e("code",[t._v("Web")]),t._v(" 框架。这是一个经过测试的，可投入生产的框架，拥有大量社区资源。默认情况下使用 "),e("code",[t._v("@nestjs/platform-express")]),t._v(" 软件包。")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("platform-fastify")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("a",{attrs:{href:"https://www.fastify.io/",target:"_blank",rel:"noopener noreferrer"}},[e("font",{attrs:{color:"red"}},[t._v("Fastify")]),e("OutboundLink")],1),t._v("是一个高性能，低开销的框架，高度专注于提供最大的效率和速度。")])])])]),t._v(" "),e("p",[t._v("无论使用哪种平台，它都会暴露自己的程序接口。这些分别被视为 "),e("code",[t._v("NestExpressApplication")]),t._v(" 和 "),e("code",[t._v("NestFastifyApplication")]),t._v("。")]),t._v(" "),e("p",[t._v("当您将类型传递给 "),e("code",[t._v("NestFactory.create()")]),t._v(" 方法时。如下例所示，"),e("code",[t._v("app")]),t._v(" 对象将具有专门用于该特定平台的方法。但请注意，除非您确实要访问基础平台 "),e("code",[t._v("API")]),t._v("，否则无需指定类型。")]),t._v(" "),e("div",{staticClass:"language-typescript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-typescript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" app "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" NestFactory"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("create"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("NestExpressApplication"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("AppModule"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("h2",{attrs:{id:"运行应用程序"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#运行应用程序"}},[t._v("#")]),t._v(" 运行应用程序")]),t._v(" "),e("p",[t._v("安装过程完成后，您可以在OS命令提示符下运行以下命令，以启动应用程序以侦听入站 "),e("code",[t._v("HTTP")]),t._v(" 请求：")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run start\n")])])]),e("p",[t._v("此命令使用 "),e("code",[t._v("HTTP")]),t._v(" 服务器启动应用程序，以侦听 "),e("code",[t._v("src/main.ts")]),t._v(" 文件中定义的端口。应用程序运行后，打开浏览器并导航到 "),e("code",[t._v("http://localhost:3000/")]),t._v("。您应该已近看到 "),e("code",[t._v("Hello World！")]),t._v(" 信息了。")])])}),[],!1,null,null,null);s.default=r.exports}}]);