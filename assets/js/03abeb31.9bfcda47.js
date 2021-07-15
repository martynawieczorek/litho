(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{184:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return g}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),s=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=s(n),d=r,g=p["".concat(i,".").concat(d)]||p[d]||b[d]||a;return n?o.a.createElement(g,c(c({ref:t},l),{},{components:n})):o.a.createElement(g,c({ref:t},l))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},248:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/remote-debugger-f547490a68de214c0d1896145fd31b95.png"},76:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return s}));var r=n(3),o=n(8),a=(n(0),n(184)),i={id:"debugging",title:"Debugging"},c={unversionedId:"debugging",id:"debugging",isDocsHomePage:!1,title:"Debugging",description:"Annotation Processor",source:"@site/../docs/debugging.md",slug:"/debugging",permalink:"/docs/debugging",editUrl:"https://github.com/facebook/litho/edit/master/website/../docs/debugging.md",version:"current"},u=[{value:"Annotation Processor",id:"annotation-processor",children:[]}],l={toc:u};function s(e){var t=e.components,i=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,i,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"annotation-processor"},"Annotation Processor"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"With Gradle")),Object(a.b)("p",null,"Debugging the annotation processor stage is a bit tricky as you are essentially debugging the Java Compiler (",Object(a.b)("inlineCode",{parentName:"p"},"javac"),").\nGradle, however, allows you to attach a debugger during the compilation stage by setting the property ",Object(a.b)("inlineCode",{parentName:"p"},"org.gradle.debug")," to true.\nTo start Gradle with that flag, figure out a target that invokes the annotation processor and start it like this:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"./gradlew --no-daemon -Dorg.gradle.debug=true :litho-widget:compileDebugJavaWithJavac\n")),Object(a.b)("p",null,"In this case we are compiling the ",Object(a.b)("inlineCode",{parentName:"p"},"litho-widget")," package."),Object(a.b)("p",null,'This will pause the execution during the "Starting Daemon" phase until you connect your debugger. This can be done by\nrunning a standard "Remote" target in IntelliJ which will look like this:'),Object(a.b)("p",null,Object(a.b)("img",{alt:"IntelliJ Remote Target",src:n(248).default})),Object(a.b)("p",null,"Now set a breakpoint at the right point, run your remote target and debug away!"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"With Buck")),Object(a.b)("p",null,"Buck doesn't have built-in support for suspending the compiler, but you can still attach a debugger by directly\ninstrumenting the JVM to open a debugging port."),Object(a.b)("p",null,"For that, first make sure to kill any previous instances of Buck which may still be running with old flags, then\nset the ",Object(a.b)("inlineCode",{parentName:"p"},"JAVA_TOOLS_OPTIONS")," to contain the JDWP options. Exporting the variable\nmake sure that this is also picked up by child processes spawned by buck.\nLimiting the number of threads will dramatically speed up the interactive\ndebugging performance as you won't have to wait for the scheduler to come around\nagain and hand you a time slice."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},'$ buck kill\n$ export JAVA_TOOL_OPTIONS="-agentlib:jdwp=transport=dt_socket,server=y,suspend=n,address=5005"\n$ buck build --num-threads 1 //litho-widget/...\n')),Object(a.b)("p",null,"Note that this won't pause the JVM (",Object(a.b)("inlineCode",{parentName:"p"},"suspend=n"),"), but as the process will continue to run you can choose to\nattach to the process at any time."))}s.isMDXComponent=!0}}]);