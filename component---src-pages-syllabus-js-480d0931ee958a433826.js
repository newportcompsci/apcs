(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{662:function(t,e,n){"use strict";n.r(e),n.d(e,"query",function(){return i});var r=n(1),o=(n(0),n(671)),c=n(670),a=n(149);e.default=function(t){var e=t.data;return Object(r.jsx)(c.a,null,Object(r.jsx)(a.a,{level:1},"Syllabus"),Object(r.jsx)(o.MDXRenderer,null,e.mdx.body))};var i="724536509"},668:function(t,e,n){"use strict";n(7),n(4),n(5),n(2),n(6);var r=n(54),o=n(1),c=(n(0),n(17)),a=n.n(c),i=n(89);function u(){return(u=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}var l=function(t){var e=t.children,n=t.to,r=t.activeClassName,c=t.partiallyActive,a=t.forceExternal,l=void 0!==a&&a,s=function(t,e){if(null==t)return{};var n,r,o={},c=Object.keys(t);for(r=0;r<c.length;r++)n=c[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,["children","to","activeClassName","partiallyActive","forceExternal"]),f=/^\/(?!\/)/.test(n);return l||!f?Object(o.jsx)("a",u({href:n},s),e):Object(o.jsx)(i.Link,u({to:n,activeClassName:r,partiallyActive:c},s),e)},s=Object(r.a)(l,{target:"et2daya0"})("transition:all 0.3s;color:",function(t){return t.theme.colors.black},";&:hover{color:",function(t){return t.theme.colors.primary},";cursor:pointer;}");s.propTypes={to:a.a.string.isRequired,activeClassName:a.a.string,partiallyActive:a.a.bool,forceExternal:a.a.bool},e.a=s},669:function(t,e,n){var r=n(9),o=n(74),c=n(56),a=n(21),i=n(24),u=n(25),l=n(215),s=(n(18).Reflect||{}).construct,f=u(function(){function t(){}return!(s(function(){},[],t)instanceof t)}),p=!u(function(){s(function(){})});r(r.S+r.F*(f||p),"Reflect",{construct:function(t,e){c(t),a(e);var n=arguments.length<3?t:c(arguments[2]);if(p&&!f)return s(t,e,n);if(t==n){switch(e.length){case 0:return new t;case 1:return new t(e[0]);case 2:return new t(e[0],e[1]);case 3:return new t(e[0],e[1],e[2]);case 4:return new t(e[0],e[1],e[2],e[3])}var r=[null];return r.push.apply(r,e),new(l.apply(t,r))}var u=n.prototype,b=o(i(u)?u:Object.prototype),y=Function.apply.call(t,b,e);return i(y)?y:b}})},670:function(t,e,n){"use strict";var r=n(54),o=n(1),c=n(0),a=n.n(c),i=n(148),u=n(88),l=(n(19),n(668));var s={name:"2cspzy",styles:"box-shadow:0 3px 2px rgba(0,0,0,0.2);"},f=Object(r.a)("li",{target:"emy597m0"})({name:"1r12575",styles:"padding:1.5em;"}),p=Object(r.a)("ul",{target:"emy597m1"})({name:"kmkx9k",styles:"display:flex;margin:0;justify-content:flex-end;list-style-type:none;padding:0;"}),b=function(t){var e,n;function r(){return t.apply(this,arguments)||this}return n=t,(e=r).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,r.prototype.render=function(){var t=this.props.links.map(function(t){return Object(o.jsx)(l.a,{to:t.url,key:t.name},Object(o.jsx)(f,null,t.name))});return Object(o.jsx)("nav",{css:s},Object(o.jsx)(p,null,t))},r}(a.a.Component),y=n(673);function j(){var t=function(t,e){e||(e=t.slice(0));return t.raw=e,t}(["\n  color: ",";\n"]);return j=function(){return t},t}var m=function(t){return Object(o.css)("background-color:",t.colors.black,";color:",t.colors.white,";padding:1em;font-size:2em;text-align:center;")},O=Object(r.a)(l.a)(j(),function(t){return t.theme.colors.white}),d=function(t){return Object(o.jsx)("footer",{css:m},Object(o.jsx)(O,{to:"https://github.com"},Object(o.jsx)(y.a,null)))},v=n(674),h=n.n(v),x=function(t){return Object(o.css)(h.a," @import url(",u.a,");body,html{font-size:18px;font-family:",t.fonts.body,";color:",t.colors.black,";}*{line-height:1.5em;box-sizing:border-box;}a{color:",t.colors.black,";text-decoration:none;}")},g=function(){return Object(o.jsx)(o.Global,{styles:x})},w=[{name:"Home",url:"/"},{name:"Units",url:"/units"},{name:"Syllabus",url:"/syllabus"}],k=Object(r.a)("main",{target:"e11ygk010"})({name:"nm3whp",styles:"max-width:900px;margin:auto;min-height:100vh;margin-top:2em;padding:1em;"});e.a=function(t){var e=t.children,n=t.header;return Object(o.jsx)(i.a,{theme:u.b},Object(o.jsx)(g,null),Object(o.jsx)(b,{links:w}),n,Object(o.jsx)(k,null,e),Object(o.jsx)(d,null))}},671:function(t,e,n){var r=n(672);t.exports={MDXRenderer:r}},672:function(t,e,n){function r(t,e,n){return(r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}()?Reflect.construct:function(t,e,n){var r=[null];r.push.apply(r,e);var c=new(Function.bind.apply(t,r));return n&&o(c,n.prototype),c}).apply(null,arguments)}function o(t,e){return(o=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function c(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(n,!0).forEach(function(e){u(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}function u(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n(20),n(5),n(6),n(55),n(73),n(40),n(11),n(4),n(214),n(36),n(2),n(669),n(669),n(214),n(55),n(73),n(36),n(40),n(20),n(11),n(4),n(5),n(2),n(6);var l=n(0),s=n(65),f=s.useMDXComponents,p=s.mdx,b=n(150).useMDXScope;t.exports=function(t){var e=t.scope,n=t.components,o=t.children,a=function(t,e){if(null==t)return{};var n,r,o={},c=Object.keys(t);for(r=0;r<c.length;r++)n=c[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,["scope","components","children"]),u=f(n),s=b(e),y=l.useMemo(function(){if(!o)return null;var t=i({React:l,mdx:p},s),e=Object.keys(t),n=e.map(function(e){return t[e]});return r(Function,["_fn"].concat(c(e),[""+o])).apply(void 0,[{}].concat(c(n)))},[o,e]);return l.createElement(y,i({components:u},a))}}}]);
//# sourceMappingURL=component---src-pages-syllabus-js-480d0931ee958a433826.js.map