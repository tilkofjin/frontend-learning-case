(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{379:function(e,t,r){"use strict";r.r(t);var s=r(42),o=Object(s.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h2",{attrs:{id:"執行上下文介绍"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#執行上下文介绍"}},[e._v("#")]),e._v(" 執行上下文介绍")]),e._v(" "),r("p",[r("code",[e._v("Nest")]),e._v(" 提供了幾個實用程序類，可幫助您輕鬆編寫可在多個應用程序上下文中運行的應用程序(例如，基於 "),r("code",[e._v("Nest HTTP Server")]),e._v("，微服務和 "),r("code",[e._v("WebSockets")]),e._v(" 應用程序上下文)。這些實用程序提供有關當前執行上下文的信息，這些信息可用於構建可在廣泛的控制器，方法和執行上下文中工作的通用"),r("a",{attrs:{href:"https://docs.nestjs.com/guards",target:"_blank",rel:"noopener noreferrer"}},[e._v("守卫"),r("OutboundLink")],1),e._v("，"),r("a",{attrs:{href:"https://docs.nestjs.com/interceptors",target:"_blank",rel:"noopener noreferrer"}},[e._v("過濾器"),r("OutboundLink")],1),e._v("和"),r("a",{attrs:{href:"https://docs.nestjs.com/exception-filters",target:"_blank",rel:"noopener noreferrer"}},[e._v("攔截器"),r("OutboundLink")],1),e._v("。")]),e._v(" "),r("p",[e._v("在本章中，我們將介紹兩個此類："),r("code",[e._v("ArgumentsHost")]),e._v(" 和 "),r("code",[e._v("ExecutionContext")]),e._v("。")]),e._v(" "),r("h2",{attrs:{id:"宿主類"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#宿主類"}},[e._v("#")]),e._v(" 宿主類")]),e._v(" "),r("p",[r("code",[e._v("ArgumentsHost")]),e._v(" 類提供用於檢索傳遞給處理程序的參數的方法。它允許選擇適當的上下文(例如 "),r("code",[e._v("HTTP，RPC(微服務)")]),e._v(" 或 "),r("code",[e._v("WebSockets")]),e._v(")以從中檢索參數。該框架在您可能要訪問它的地方提供了 "),r("code",[e._v("ArgumentsHost")]),e._v(" 的實例，通常稱為主機參數。例如，使用 "),r("code",[e._v("ArgumentsHostinstance")]),e._v(" 調用異常過濾器的 "),r("code",[e._v("catch()")]),e._v(" 方法。")]),e._v(" "),r("p",[r("code",[e._v("ArgumentsHost")]),e._v(" 只是充當處理程序參數的抽象。例如，對於 "),r("code",[e._v("HTTP")]),e._v(" 服務器應用程序(使用 "),r("code",[e._v("@nestjs/platform-express")]),e._v(" 時)，宿主對象封裝了 "),r("code",[e._v("Express")]),e._v(" 的 "),r("code",[e._v("[request，response，next]")]),e._v(" 數組，其中 "),r("code",[e._v("request")]),e._v(" 是請求對象，"),r("code",[e._v("response")]),e._v(" 是響應對象，"),r("code",[e._v("next")]),e._v(" 是控制應用程序請求-響應週期的函數。另一方面，對於 "),r("font",{attrs:{color:"red",GraphQL:""}}),r("code",[e._v("應用程序，主機對象包含")]),e._v("[root，args，context，info]` 數組。")],1),e._v(" "),r("h2",{attrs:{id:"當前應用程序上下文"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#當前應用程序上下文"}},[e._v("#")]),e._v(" 當前應用程序上下文")])])}),[],!1,null,null,null);t.default=o.exports}}]);