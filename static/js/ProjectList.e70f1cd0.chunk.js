/*! For license information please see ProjectList.e70f1cd0.chunk.js.LICENSE.txt */
(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[671],{2186:(t,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>l});var n=r(8820),i=r(5736),o=(r(2791),r(184));const l=function(t){let{ProjectListVal:e}=t;return(0,o.jsx)("div",{children:e&&e.sort(((t,e)=>t.title>e.title?1:t.title<e.title?-1:0)).map(((t,e)=>(0,o.jsx)("a",{href:t.projectRoute,className:"project_list_item_link",children:(0,o.jsxs)("div",{style:{background:"linear-gradient(120deg,"+t.initialColor+","+t.finalColor+")"},className:"project_list_item",children:[(0,o.jsxs)("h3",{children:[t.title,t.githubUrl&&(0,o.jsx)("a",{href:t.githubUrl,children:(0,o.jsx)(n.RrF,{className:"projectGithubIcon"})})]}),Object.keys(t.badgeTitle).map(((e,r)=>(0,o.jsx)(i.Z,{pill:!0,variant:"primary",className:"chip",children:t.badgeTitle[e]},r))),(0,o.jsx)("p",{children:t.description})]})},"project-list-item-".concat(e))))})}},1694:(t,e)=>{var r;!function(){"use strict";var n={}.hasOwnProperty;function i(){for(var t=[],e=0;e<arguments.length;e++){var r=arguments[e];if(r){var o=typeof r;if("string"===o||"number"===o)t.push(r);else if(Array.isArray(r)){if(r.length){var l=i.apply(null,r);l&&t.push(l)}}else if("object"===o){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){t.push(r.toString());continue}for(var s in r)n.call(r,s)&&r[s]&&t.push(s)}}}return t.join(" ")}t.exports?(i.default=i,t.exports=i):void 0===(r=function(){return i}.apply(e,[]))||(t.exports=r)}()},162:(t,e,r)=>{"use strict";r.d(e,{SC:()=>f,pi:()=>u,vE:()=>c,zG:()=>p});var n=r(2791);r(184);const i=["xxl","xl","lg","md","sm","xs"],o="xs",l=n.createContext({prefixes:{},breakpoints:i,minBreakpoint:o}),{Consumer:s,Provider:a}=l;function c(t,e){const{prefixes:r}=(0,n.useContext)(l);return t||r[e]||e}function u(){const{breakpoints:t}=(0,n.useContext)(l);return t}function p(){const{minBreakpoint:t}=(0,n.useContext)(l);return t}function f(){const{dir:t}=(0,n.useContext)(l);return"rtl"===t}},9983:(t,e,r)=>{"use strict";r.d(e,{w_:()=>c});var n=r(2791),i={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o=n.createContext&&n.createContext(i),l=function(){return l=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var i in e=arguments[r])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t},l.apply(this,arguments)},s=function(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(t);i<n.length;i++)e.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(t,n[i])&&(r[n[i]]=t[n[i]])}return r};function a(t){return t&&t.map((function(t,e){return n.createElement(t.tag,l({key:e},t.attr),a(t.child))}))}function c(t){return function(e){return n.createElement(u,l({attr:l({},t.attr)},e),a(t.child))}}function u(t){var e=function(e){var r,i=t.attr,o=t.size,a=t.title,c=s(t,["attr","size","title"]),u=o||e.size||"1em";return e.className&&(r=e.className),t.className&&(r=(r?r+" ":"")+t.className),n.createElement("svg",l({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},e.attr,i,c,{className:r,style:l(l({color:t.color||e.color},e.style),t.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),a&&n.createElement("title",null,a),t.children)};return void 0!==o?n.createElement(o.Consumer,null,(function(t){return e(t)})):e(i)}}}]);
//# sourceMappingURL=ProjectList.e70f1cd0.chunk.js.map