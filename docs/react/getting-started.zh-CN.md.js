webpackJsonp([93,206],{

/***/ 1743:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  "content": ["article", {}, ["p", "在开始之前，推荐先学习 ", ["a", {
	    "title": null,
	    "href": "http://facebook.github.io/react/"
	  }, "React"], " 和 ", ["a", {
	    "title": null,
	    "href": "http://babeljs.io/docs/learn-es2015/"
	  }, "ES2015"], "。"], ["h2", "第一个例子"], ["p", "最简单的使用方式参照以下 CodePen 演示，也推荐 Fork 本例来进行 ", ["code", "Bug Report"], "，注意不要在实际项目中这样使用。"], ["ul", ["li", ["p", ["a", {
	    "title": null,
	    "href": "http://codepen.io/benjycui/pen/KgPZrE?editors=001"
	  }, "antd CodePen"]]]], ["h2", "标准开发"], ["p", "实际项目开发中，你会需要对 ES2015 和 JSX 代码的构建、调试、代理、打包部署等一系列工程化的需求。\n我们提供了一套 ", ["code", "npm"], " + ", ["code", "webpack"], " 的开发工具链来辅助开发，下面我们用一个简单的实例来说明。"], ["h3", "1. 安装脚手架工具"], ["blockquote", ["p", "使用 ", ["code", "antd-init"], " 前，务必确认 ", ["a", {
	    "title": null,
	    "href": "https://nodejs.org/en/"
	  }, "Node.js"], " 已经升级到 v4.x 或以上。"]], ["pre", {
	    "lang": "bash",
	    "highlighted": "$ <span class=\"token function\">npm</span> <span class=\"token function\">install</span> antd-init -g"
	  }, ["code", "$ npm install antd-init -g"]], ["p", "更多功能请参考 ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/antd-init/"
	  }, "脚手架工具"], " 和 ", ["a", {
	    "title": null,
	    "href": "http://ant-tool.github.io/"
	  }, "开发工具文档"], "。"], ["blockquote", ["p", "除了官方提供的脚手架，您也可以使用社区提供的脚手架和范例："], ["ul", ["li", ["p", ["a", {
	    "title": null,
	    "href": "https://github.com/JasonBai007/reactSPA"
	  }, "reactSPA"]]], ["li", ["p", ["a", {
	    "title": null,
	    "href": "https://github.com/Justin-lu/react-redux-antd"
	  }, "react-redux-antd by Justin-lu"]]], ["li", ["p", ["a", {
	    "title": null,
	    "href": "https://github.com/okoala/react-redux-antd"
	  }, "react-redux-antd by okoala"]]], ["li", ["p", ["a", {
	    "title": null,
	    "href": "https://github.com/fireyy/react-antd-admin"
	  }, "react-antd-admin"]]], ["li", ["p", ["a", {
	    "title": null,
	    "href": "https://github.com/yuzhouisme/react-antd-redux-router-starter"
	  }, "react-antd-redux-router-starter"]]], ["li", ["p", ["a", {
	    "title": null,
	    "href": "https://github.com/BetaRabbit/react-redux-antd-starter"
	  }, "react-redux-antd-starter"]]], ["li", ["p", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/129"
	  }, "更多"]]]]], ["h3", "2. 创建一个项目"], ["p", "使用命令行进行初始化。"], ["pre", {
	    "lang": "bash",
	    "highlighted": "$ <span class=\"token function\">mkdir</span> antd-demo <span class=\"token operator\">&amp;&amp;</span> <span class=\"token function\">cd</span> antd-demo\n$ antd-init"
	  }, ["code", "$ mkdir antd-demo && cd antd-demo\n$ antd-init"]], ["p", "antd-init 会自动安装 npm 依赖，若有问题则可自行安装。"], ["p", "若安装缓慢报错，可尝试用 ", ["code", "cnpm"], " 或别的镜像源自行安装：", ["code", "rm -rf node_modules && cnpm install"], "。"], ["h3", "3. 使用组件"], ["p", "脚手架会生成一个 Todo 应用实例（一个很有参考价值的 React 上手示例），先不管它，我们用来测试组件。"], ["p", "直接用下面的代码替换 ", ["code", "index.js"], " 的内容，用 React 的方式直接使用 antd 组件。"], ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token keyword\">import</span> React <span class=\"token keyword\">from</span> <span class=\"token string\">'react'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> ReactDOM <span class=\"token keyword\">from</span> <span class=\"token string\">'react-dom'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> DatePicker<span class=\"token punctuation\">,</span> message <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">class</span> <span class=\"token class-name\">App</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">React<span class=\"token punctuation\">.</span>Component</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token function\">constructor</span><span class=\"token punctuation\">(</span>props<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">super</span><span class=\"token punctuation\">(</span>props<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n      date<span class=\"token punctuation\">:</span> <span class=\"token string\">''</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n  <span class=\"token function\">handleChange</span><span class=\"token punctuation\">(</span>date<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    message<span class=\"token punctuation\">.</span><span class=\"token function\">info</span><span class=\"token punctuation\">(</span><span class=\"token string\">'您选择的日期是: '</span> <span class=\"token operator\">+</span> date<span class=\"token punctuation\">.</span><span class=\"token function\">toString</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> date <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> width<span class=\"token punctuation\">:</span> <span class=\"token number\">400</span><span class=\"token punctuation\">,</span> margin<span class=\"token punctuation\">:</span> <span class=\"token string\">'100px auto'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>DatePicker</span> <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>value <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">handleChange</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> marginTop<span class=\"token punctuation\">:</span> <span class=\"token number\">20</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>当前日期：<span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>date<span class=\"token punctuation\">.</span><span class=\"token function\">toString</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>App</span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> document<span class=\"token punctuation\">.</span><span class=\"token function\">getElementById</span><span class=\"token punctuation\">(</span><span class=\"token string\">'root'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
	  }, ["code", "import React from 'react';\nimport ReactDOM from 'react-dom';\nimport { DatePicker, message } from 'antd';\n\nclass App extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      date: '',\n    };\n  }\n  handleChange(date) {\n    message.info('您选择的日期是: ' + date.toString());\n    this.setState({ date });\n  }\n  render() {\n    return (\n      <div style={{ width: 400, margin: '100px auto' }}>\n        <DatePicker onChange={value => this.handleChange(value)} />\n        <div style={{ marginTop: 20 }}>当前日期：{this.state.date.toString()}</div>\n      </div>\n    );\n  }\n}\n\nReactDOM.render(<App />, document.getElementById('root'));"]], ["blockquote", ["p", "你可以在左侧菜单选用更多组件。"]], ["h3", "4. 开发调试"], ["p", "一键启动调试，访问 ", ["a", {
	    "title": null,
	    "href": "http://127.0.0.1:8000"
	  }, "http://127.0.0.1:8000"], " 查看效果。"], ["pre", {
	    "lang": "bash",
	    "highlighted": "$ <span class=\"token function\">npm</span> start"
	  }, ["code", "$ npm start"]], ["h3", "5. 构建和部署"], ["pre", {
	    "lang": "bash",
	    "highlighted": "$ <span class=\"token function\">npm</span> run build"
	  }, ["code", "$ npm run build"]], ["p", "入口文件会构建到 ", ["code", "dist"], " 目录中，你可以自由部署到不同环境中进行引用。"], ["blockquote", ["p", "上述例子用于帮助你理解 Ant Design React 的使用流程，并非真实的开发过程，你可以根据自己的项目开发流程进行接入。"]], ["h2", "兼容性"], ["p", "Ant Design React 支持所有的现代浏览器和 IE9+。"], ["p", "对于 IE 系列浏览器，需要提供 ", ["a", {
	    "title": null,
	    "href": "https://github.com/es-shims/es5-shim"
	  }, "es5-shim"], " 和 ", ["a", {
	    "title": null,
	    "href": "https://github.com/paulmillr/es6-shim"
	  }, "es6-shim"], " 等 Polyfills 的支持。如果你使用了 babel，强烈推荐使用 ", ["a", {
	    "title": null,
	    "href": "https://babeljs.io/docs/usage/polyfill/"
	  }, "babel-polyfill"], " 和 ", ["a", {
	    "title": null,
	    "href": "https://babeljs.io/docs/plugins/transform-runtime/"
	  }, "babel-plugin-transform-runtime"], "。"], ["pre", {
	    "lang": "html",
	    "highlighted": "<span class=\"token doctype\">&lt;!DOCTYPE html></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>html</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>head</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>meta</span> <span class=\"token attr-name\">charset</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>utf-8<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token comment\" spellcheck=\"true\">&lt;!-- 引入样式 --></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>link</span> <span class=\"token attr-name\">rel</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>stylesheet<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>/index.css<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token comment\" spellcheck=\"true\">&lt;!-- Polyfills --></span>\n    <span class=\"token comment\" spellcheck=\"true\">&lt;!--[if lt IE 10]>\n    &lt;script src=\"https://as.alipayobjects.com/g/component/??console-polyfill/0.2.2/index.js,es5-shim/4.5.7/es5-shim.min.js,es5-shim/4.5.7/es5-sham.min.js,es6-shim/0.35.1/es6-sham.min.js,es6-shim/0.35.1/es6-shim.min.js,html5shiv/3.7.2/html5shiv.min.js,media-match/2.0.2/media.match.min.js\">&lt;/script>\n    &lt;![endif]--></span>\n    <span class=\"token comment\" spellcheck=\"true\">&lt;!--[if lte IE 11]>\n    &lt;script src=\"https://as.alipayobjects.com/g/component/??es6-shim/0.35.1/es6-sham.min.js,es6-shim/0.35.1/es6-shim.min.js\">&lt;/script>\n    &lt;![endif]--></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>head</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>body</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>body</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token comment\" spellcheck=\"true\">&lt;!-- 引入公用文件 --></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>script</span> <span class=\"token attr-name\">src</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>/common.js<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>script</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token comment\" spellcheck=\"true\">&lt;!-- 引入入口文件 --></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>script</span> <span class=\"token attr-name\">src</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>/index.js<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>script</span><span class=\"token punctuation\">></span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>html</span><span class=\"token punctuation\">></span></span>"
	  }, ["code", "<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset=\"utf-8\">\n    <!-- 引入样式 -->\n    <link rel=\"stylesheet\" href=\"/index.css\">\n    <!-- Polyfills -->\n    <!--[if lt IE 10]>\n    <script src=\"https://as.alipayobjects.com/g/component/??console-polyfill/0.2.2/index.js,es5-shim/4.5.7/es5-shim.min.js,es5-shim/4.5.7/es5-sham.min.js,es6-shim/0.35.1/es6-sham.min.js,es6-shim/0.35.1/es6-shim.min.js,html5shiv/3.7.2/html5shiv.min.js,media-match/2.0.2/media.match.min.js\"></script>\n    <![endif]-->\n    <!--[if lte IE 11]>\n    <script src=\"https://as.alipayobjects.com/g/component/??es6-shim/0.35.1/es6-sham.min.js,es6-shim/0.35.1/es6-shim.min.js\"></script>\n    <![endif]-->\n  </head>\n  <body>\n  </body>\n  <!-- 引入公用文件 -->\n  <script src=\"/common.js\"></script>\n  <!-- 引入入口文件 -->\n  <script src=\"/index.js\"></script>\n</html>"]], ["h4", "IE8 note"], ["blockquote", ["p", ["code", "antd@2.0"], " 之后将不再支持 IE8。"]], ["p", "IE8 需要配合使用 ", ["a", {
	    "title": null,
	    "href": "https://facebook.github.io/react/blog/2016/01/12/discontinuing-ie8-support.html"
	  }, "react@0.14.x"], " 版本。"], ["p", "另外，由于 ", ["code", "babel@6.x"], " 对 IE8 的支持不佳，你可能会遇到类似 ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-tool/atool-build/issues/28"
	  }, "#28"], " 和 ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/858"
	  }, "#858"], " 的 default 报错的问题，你也可以参照这个 ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/antd-init/blob/f5fb9479ca973fade51fd6754e50f8b3fafbb1df/boilerplate/webpack.config.js#L4-L8"
	  }, "webpack 配置"], " 来解决。"], ["blockquote", ["p", "更多 IE8 下使用 React 的相关问题可以参考：", ["a", {
	    "title": null,
	    "href": "https://github.com/xcatliu/react-ie8"
	  }, "https://github.com/xcatliu/react-ie8"]]], ["h2", "自行构建"], ["p", "如果想自己维护工作流，我们推荐使用 ", ["a", {
	    "title": null,
	    "href": "http://webpack.github.io/"
	  }, "webpack"], " 进行构建和调试。理论上你可以利用 React 生态圈中的 ", ["a", {
	    "title": null,
	    "href": "https://github.com/enaqx/awesome-react#boilerplates"
	  }, "各种脚手架"], " 进行开发，如果遇到问题可参考我们所使用的 ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-tool/atool-build/blob/master/src/getWebpackCommonConfig.js"
	  }, "webpack 配置"], " 进行 ", ["a", {
	    "title": null,
	    "href": "http://ant-tool.github.io/webpack-config.html"
	  }, "定制"], "。"], ["p", "目前社区也有很多基于 antd 定制的 ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/ant-design/issues/129"
	  }, "脚手架"], "，欢迎进行试用和贡献。"], ["h2", "按需加载"], ["p", "通过 ", ["code", "import { Button } from 'antd';"], " 引入会加载 antd 下所有的模块，如果要按需加载可以通过以下的写法来引用。"], ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token keyword\">import</span> Button <span class=\"token keyword\">from</span> <span class=\"token string\">'antd/lib/button'</span><span class=\"token punctuation\">;</span>"
	  }, ["code", "import Button from 'antd/lib/button';"]], ["p", "如果你使用 babel，我们推荐使用 ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/babel-plugin-import"
	  }, "babel-plugin-import"], " 来进行按需加载，加入这个插件后。你可以仍然这么写："], ["pre", {
	    "lang": "jsx",
	    "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Button <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>"
	  }, ["code", "import { Button } from 'antd';"]], ["p", "插件会帮你转换成上面的写法。另外此插件配合 ", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/babel-plugin-import#usage"
	  }, "style"], " 属性可以做到模块样式的按需自动加载。"], ["h2", "配置主题和字体"], ["ul", ["li", ["p", ["a", {
	    "title": null,
	    "href": "/docs/react/customize-theme"
	  }, "改变主题"]]], ["li", ["p", ["a", {
	    "title": null,
	    "href": "https://github.com/ant-design/antd-init/tree/master/examples/local-iconfont"
	  }, "使用本地字体"]]]], ["h2", "小甜点"], ["ul", ["li", ["p", "你可以享用 ", ["code", "npm"], " 生态圈里的所有模块。"]], ["li", ["p", "我们使用了 ", ["code", "babel"], "，试试用 ", ["a", {
	    "title": null,
	    "href": "http://babeljs.io/blog/2015/06/07/react-on-es6-plus"
	  }, "ES2015"], " 的写法来提升编码的愉悦感。"]]]],
	  "meta": {
	    "order": 1,
	    "title": "快速上手",
	    "filename": "docs/react/getting-started.zh-CN.md"
	  },
	  "description": ["section", ["p", "Ant Design React 致力于提供给程序员", ["strong", "愉悦"], "的开发体验。"]],
	  "toc": ["ul", ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#第一个例子"
	  }, "第一个例子"]], ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#标准开发"
	  }, "标准开发"]], ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#兼容性"
	  }, "兼容性"]], ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#自行构建"
	  }, "自行构建"]], ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#按需加载"
	  }, "按需加载"]], ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#配置主题和字体"
	  }, "配置主题和字体"]], ["li", ["a", {
	    "className": "bisheng-toc-h2",
	    "href": "#小甜点"
	  }, "小甜点"]]]
	};

/***/ }

});