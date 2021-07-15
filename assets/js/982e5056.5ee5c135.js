(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{136:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return d}));var o=n(3),r=n(8),a=(n(0),n(184)),i=n(185),s=n(193),c={id:"event-handler-testing",title:"Event Handler Testing"},l={unversionedId:"testing/event-handler-testing",id:"testing/event-handler-testing",isDocsHomePage:!1,title:"Event Handler Testing",description:"This page was moved from the old website without any change and might be updated",source:"@site/../docs/testing/event-handler-testing.mdx",slug:"/testing/event-handler-testing",permalink:"/docs/testing/event-handler-testing",editUrl:"https://github.com/facebook/litho/edit/master/website/../docs/testing/event-handler-testing.mdx",version:"current",sidebar:"mainSidebar",previous:{title:"Matching @InjectProp",permalink:"/docs/testing/injectprop-matching"},next:{title:"Testing Sections",permalink:"/docs/testing/sections-testing"}},p=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"What to test for",id:"what-to-test-for",children:[]},{value:"Testing handler presence",id:"testing-handler-presence",children:[]},{value:"Next",id:"next",children:[]}],u={toc:p};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(a.b)("div",{parentName:"div",className:"admonition-heading"},Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",{parentName:"h5",className:"admonition-icon"},Object(a.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(a.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Content will be updated")),Object(a.b)("div",{parentName:"div",className:"admonition-content"},Object(a.b)("p",{parentName:"div"},"This page was moved from the old website without any change and might be updated"))),Object(a.b)("p",null,"This document provides a quick example of how to write tests for your event\nhandlers. You should be familiar with ",Object(a.b)("a",{parentName:"p",href:"subcomponent-testing"},"TestSpecs"),"\nbefore diving into this topic."),Object(a.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(a.b)("p",null,"The package is shipped as a separate module. It is available via maven as\n",Object(a.b)("inlineCode",{parentName:"p"},"com.facebook.litho:litho-testing"),". To include it in your gradle build, add this\nline to your ",Object(a.b)("inlineCode",{parentName:"p"},"dependencies")," block:"),Object(a.b)(s.a,{language:"groovy",code:"\ntestImplementation 'com.facebook.litho:litho-testing:{{site.lithoVersion}}'\n",mdxType:"VersionedCodeBlock"}),Object(a.b)("h2",{id:"what-to-test-for"},"What to test for"),Object(a.b)("p",null,"We are going to work with this spec in our example:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-java"},'@LayoutSpec\npublic class LearningStateComponentSpec {\n\n  @PropDefault static final boolean canClick = true;\n\n  @OnCreateInitialState\n  static void onCreateInitialState(\n    ComponentContext c,\n    StateValue<Integer> count) {\n\n    count.set(0);\n  }\n\n  @OnCreateLayout\n  static Component onCreateLayout(\n    ComponentContext c,\n    @Prop(optional = true) boolean canClick,\n    @State Integer count) {\n\n    return Text.create(c)\n        .text("Clicked " + count + " times.")\n        .textSizeDip(50)\n        .clickHandler(canClick ? LearningStateComponent.onClick(c) : null)\n        .backgroundRes(android.R.color.holo_blue_light)\n        .alignSelf(STRETCH)\n        .paddingDip(BOTTOM, 20)\n        .paddingDip(TOP, 40)\n        .build();\n  }\n\n  @OnUpdateState\n  static void incrementClickCount(StateValue<Integer> count) {\n    count.set(count.get() + 1);\n  }\n\n  @OnEvent(ClickEvent.class)\n  static void onClick(ComponentContext c) {\n    LearningStateComponent.incrementClickCount(c);\n  }\n}\n')),Object(a.b)("video",{loop:"true",autoplay:"true",class:"video",width:"300px"},Object(a.b)("source",{type:"video/mp4",src:Object(i.a)("/videos/state_taps.mp4")})),Object(a.b)("p",null,"When testing event handlers, it is important to remember what you actually want\nto validate in your unit test. You may be getting this inkling to ensure that a\nclick event you issue triggers the callback you pass in as your prop. ",Object(a.b)("em",{parentName:"p"},"When you\ndo this, you are actually testing the framework.")," This is not what you want to\nspend your time on. While writing high-level end-to-end tests ensuring that your\ntouch events have the right effects, this is not what you should concern\nyourself with for unit tests."),Object(a.b)("h2",{id:"testing-handler-presence"},"Testing handler presence"),Object(a.b)("p",null,"Instead, let's focus on the actual logic that we have in our spec. Whether or\nnot we have a click handler depends on the prop ",Object(a.b)("inlineCode",{parentName:"p"},"canClick"),". It is very common\nfor handlers to be set conditionally based on a prop. In our test, we are going\nto limit ourselves to checking if a handler is set or not. For that we can use\nthe TestSpec matchers we have learned about before."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-java"},"@RunWith(LithoTestRunner.class)\npublic class LearningStateComponentSpecTest {\n  @Rule public ComponentsRule mComponentsRule = new ComponentsRule();\n\n  @Test\n  public void testComponentOnClick() {\n    final ComponentContext c = mComponentsRule.getContext();\n    final Component component = LearningStateComponent.create(\n        c)\n        .canClick(true)\n        .build();\n\n    LithoAssertions.assertThat(c, component).has(\n        SubComponentExtractor.subComponentWith(\n          c,\n          TestText.matcher(c)\n            .clickHandler(IsNull.<EventHandler<ClickEvent>>notNullValue(null)).build())\n    );\n  }\n\n  @Test\n  public void testNoComponentOnClick() {\n    final ComponentContext c = mComponentsRule.getContext();\n    final Component component = LearningStateComponent.create(\n        c)\n        .canClick(false)\n        .build();\n\n    LithoAssertions.assertThat(c, component).has(\n        SubComponentExtractor.subComponentWith(\n          c,\n          TestText.matcher(c)\n            .clickHandler(IsNull.<EventHandler<ClickEvent>>nullValue(null)).build())\n    );\n  }\n}\n")),Object(a.b)("p",null,"As you can see here, we can match against a click handler just like any other\nprop set on a sub-component. Matching against a specific instance of an\n",Object(a.b)("inlineCode",{parentName:"p"},"EventHandler")," is currently not supported."),Object(a.b)("h2",{id:"next"},"Next"),Object(a.b)("p",null,"Either head back to the ",Object(a.b)("a",{parentName:"p",href:"testing-overview"},"testing overview")," or\ncontinue with the next section, ",Object(a.b)("a",{parentName:"p",href:"espresso-testing"},"Espresso"),"."))}d.isMDXComponent=!0},184:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return y}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},g=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(n),g=o,y=u["".concat(i,".").concat(g)]||u[g]||d[g]||a;return n?r.a.createElement(y,s(s({ref:t},l),{},{components:n})):r.a.createElement(y,s({ref:t},l))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=g;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},185:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return i}));var o=n(10),r=n(186);function a(){var e=Object(o.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,o){var a=void 0===o?{}:o,i=a.forcePrependBaseUrl,s=void 0!==i&&i,c=a.absolute,l=void 0!==c&&c;if(!n)return n;if(n.startsWith("#"))return n;if(Object(r.b)(n))return n;if(s)return t+n;var p=n.startsWith(t)?n:t+n.replace(/^\//,"");return l?e+p:p}(a,n,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},186:function(e,t,n){"use strict";function o(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!o(e)}n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return r}))},189:function(e,t,n){"use strict";var o=n(0),r=n(190);t.a=function(){var e=Object(o.useContext)(r.a);if(null==e)throw new Error("`useThemeContext` is used outside of `Layout` Component. See https://v2.docusaurus.io/docs/api/themes/configuration#usethemecontext.");return e}},190:function(e,t,n){"use strict";var o=n(0),r=n.n(o).a.createContext(void 0);t.a=r},192:function(e,t,n){"use strict";n.d(t,"b",(function(){return i}));var o=n(23),r={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},a=n(0),i={Prism:o.a,theme:r};function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var l=/\r\n|\r|\n/,p=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},u=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},d=function(e,t){var n=e.plain,o=Object.create(null),r=e.styles.reduce((function(e,n){var o=n.languages,r=n.style;return o&&!o.includes(t)||n.types.forEach((function(t){var n=c({},e[t],r);e[t]=n})),e}),o);return r.root=n,r.plain=c({},n,{backgroundColor:null}),r};function g(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&-1===t.indexOf(o)&&(n[o]=e[o]);return n}var y=function(e){function t(){for(var t=this,n=[],o=arguments.length;o--;)n[o]=arguments[o];e.apply(this,n),s(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?d(e.theme,e.language):void 0;return t.themeDict=n})),s(this,"getLineProps",(function(e){var n=e.key,o=e.className,r=e.style,a=c({},g(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),i=t.getThemeDict(t.props);return void 0!==i&&(a.style=i.plain),void 0!==r&&(a.style=void 0!==a.style?c({},a.style,r):r),void 0!==n&&(a.key=n),o&&(a.className+=" "+o),a})),s(this,"getStyleForToken",(function(e){var n=e.types,o=e.empty,r=n.length,a=t.getThemeDict(t.props);if(void 0!==a){if(1===r&&"plain"===n[0])return o?{display:"inline-block"}:void 0;if(1===r&&!o)return a[n[0]];var i=o?{display:"inline-block"}:{},s=n.map((function(e){return a[e]}));return Object.assign.apply(Object,[i].concat(s))}})),s(this,"getTokenProps",(function(e){var n=e.key,o=e.className,r=e.style,a=e.token,i=c({},g(e,["key","className","style","token"]),{className:"token "+a.types.join(" "),children:a.content,style:t.getStyleForToken(a),key:void 0});return void 0!==r&&(i.style=void 0!==i.style?c({},i.style,r):r),void 0!==n&&(i.key=n),o&&(i.className+=" "+o),i})),s(this,"tokenize",(function(e,t,n,o){var r={code:t,grammar:n,language:o,tokens:[]};e.hooks.run("before-tokenize",r);var a=r.tokens=e.tokenize(r.code,r.grammar,r.language);return e.hooks.run("after-tokenize",r),a}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,o=e.code,r=e.children,a=this.getThemeDict(this.props),i=t.languages[n];return r({tokens:function(e){for(var t=[[]],n=[e],o=[0],r=[e.length],a=0,i=0,s=[],c=[s];i>-1;){for(;(a=o[i]++)<r[i];){var d=void 0,g=t[i],y=n[i][a];if("string"==typeof y?(g=i>0?g:["plain"],d=y):(g=u(g,y.type),y.alias&&(g=u(g,y.alias)),d=y.content),"string"==typeof d){var b=d.split(l),m=b.length;s.push({types:g,content:b[0]});for(var h=1;h<m;h++)p(s),c.push(s=[]),s.push({types:g,content:b[h]})}else i++,t.push(g),n.push(d),o.push(0),r.push(d.length)}i--,t.pop(),n.pop(),o.pop(),r.pop()}return p(s),c}(void 0!==i?this.tokenize(t,o,i,n):[o]),className:"prism-code language-"+n,style:void 0!==a?a.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(a.Component);t.a=y},193:function(e,t,n){"use strict";var o=n(3),r=n(0),a=n.n(r),i=n(192),s={plain:{color:"rgb(36, 41, 46)",backgroundColor:"#f6f8fa"},styles:[{types:["prolog"],style:{color:"rgb(0, 0, 128)"}},{types:["comment"],style:{color:"rgb(106, 153, 85)"}},{types:["builtin","changed","keyword"],style:{color:"rgb(215, 58, 73)",color:"#e3116c"}},{types:["inserted-sign","inserted"],style:{backgroundColor:"rgb(240, 255, 244)",color:"rgb(34, 134, 58)"}},{types:["constant"],style:{color:"rgb(100, 102, 149)"}},{types:["attr-name","variable"],style:{color:"rgb(156, 220, 254)"}},{types:["deleted-sign","deleted"],style:{backgroundColor:"rgb(255, 238, 240)",color:"rgb(179, 29, 40)"}},{types:["selector"],style:{color:"rgb(215, 186, 125)"}},{types:["tag"],style:{color:"rgb(78, 201, 176)"}},{types:["tag"],languages:["markup"],style:{color:"rgb(86, 156, 214)"}},{types:["punctuation","operator"],style:{color:"rgb(36, 41, 46)"}},{types:["operator"],style:{color:"rgb(0, 92, 197)"}},{types:["boolean"],style:{color:"rgb(0, 92, 197)"}},{types:["punctuation"],languages:["markup"],style:{color:"#808080"}},{types:["function"],style:{color:"rgb(111, 66, 193)"}},{types:["class-name"],style:{color:"rgb(78, 201, 176)"}},{types:["known-class-name","class-name"],style:{color:"rgb(227, 98, 9)"}},{types:["char"],style:{color:"rgb(209, 105, 105)"}},{types:["property-access"],style:{color:"rgb(0, 92, 197)"}},{types:["method","function","property-access"],style:{color:"rgb(111, 66, 193)"}},{languages:["json"],types:["property"],style:{color:"rgb(3, 47, 98)"}},{languages:["json"],types:["string"],style:{color:"rgb(3, 47, 98)"}},{languages:["json"],types:["number"],style:{color:"rgb(0, 92, 197)"}},{languages:["json"],types:["comment"],style:{backgroundColor:"rgb(179, 29, 40)",color:"rgb(250, 251, 252)"}}]},c={plain:{color:"#F8F8F2",backgroundColor:"#282A36"},styles:[{types:["prolog","constant","builtin"],style:{color:"rgb(189, 147, 249)"}},{types:["inserted","function"],style:{color:"rgb(80, 250, 123)"}},{types:["deleted"],style:{color:"rgb(255, 85, 85)"}},{types:["changed"],style:{color:"rgb(255, 184, 108)"}},{types:["punctuation","symbol"],style:{color:"rgb(248, 248, 242)"}},{types:["string","char","tag","selector"],style:{color:"rgb(255, 121, 198)"}},{types:["keyword","variable"],style:{color:"rgb(189, 147, 249)",fontStyle:"italic"}},{types:["comment"],style:{color:"rgb(98, 114, 164)"}},{types:["attr-name"],style:{color:"rgb(241, 250, 140)"}}]},l="0.40.0",p="0.40.1-SNAPSHOT",u="0.9.0",d="0.46.0",g=n(189);t.a=function(e){var t=e.language,n=e.code.replace(/{{site.lithoVersion}}/g,l).replace(/{{site.soloaderVersion}}/g,u).replace(/{{site.lithoSnapshotVersion}}/g,p).replace(/{{site.flipperVersion}}/g,d).trim(),r=Object(g.a)().isDarkTheme?c:s;return a.a.createElement(i.a,Object(o.a)({},i.b,{code:n,language:t,theme:r}),(function(e){var t=e.className,n=e.style,o=e.tokens,r=e.getLineProps,i=e.getTokenProps;return a.a.createElement("pre",{className:t,style:n},o.map((function(e,t){return a.a.createElement("div",r({line:e,key:t}),e.map((function(e,t){return a.a.createElement("span",i({token:e,key:t}))})))})))}))}}}]);