"use strict";(self.webpackChunkwhg_training_resources=self.webpackChunkwhg_training_resources||[]).push([[1490],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>h});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=c(r),d=a,h=m["".concat(p,".").concat(d)]||m[d]||u[d]||o;return r?n.createElement(h,i(i({ref:t},l),{},{components:r})):n.createElement(h,i({ref:t},l))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[m]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9565:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:6},i="Some other data types",s={unversionedId:"programming/introduction_to_R/data_types",id:"programming/introduction_to_R/data_types",title:"Some other data types",description:"Strings and numbers are just two of the data types R can work with.  What else?  Well, there are",source:"@site/docs/programming/introduction_to_R/data_types.md",sourceDirName:"programming/introduction_to_R",slug:"/programming/introduction_to_R/data_types",permalink:"/whg-training-resources/programming/introduction_to_R/data_types",draft:!1,editUrl:"https://github.com/whg-training/whg-training-resources/edit/main/docs/programming/introduction_to_R/data_types.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"sidebar5",previous:{title:"Storing values in variables",permalink:"/whg-training-resources/programming/introduction_to_R/variables"},next:{title:"Functions",permalink:"/whg-training-resources/programming/introduction_to_R/functions"}},p={},c=[],l={toc:c},m="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"some-other-data-types"},"Some other data types"),(0,a.kt)("p",null,"Strings and numbers are just two of the data types R can work with.  What else?  Well, there are\n",(0,a.kt)("em",{parentName:"p"},"lists"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'> list( "This", "list", "has", 5, "entries" )\n')),(0,a.kt)("p",null,"As you can see, a ",(0,a.kt)("inlineCode",{parentName:"p"},"list")," is just a list of things, and the things can be of different types."),(0,a.kt)("p",null,"There are also ",(0,a.kt)("em",{parentName:"p"},"vector types"),", which we've seen already - they are a kind of list where all the\nentries have the same type.  The ",(0,a.kt)("inlineCode",{parentName:"p"},"c()")," (for 'concatenate') function can be used to stick things\ntogether into a vector:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'> c( "This", "vector", "has", "5", "entries" )\n')),(0,a.kt)("p",null,"You can also create ",(0,a.kt)("strong",{parentName:"p"},"matrixes"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"> matrix( 1:6, nrow = 2 )\n")),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Question")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Did this matrix get filled ",(0,a.kt)("em",{parentName:"p"},"row-wise")," (along rows) or ",(0,a.kt)("em",{parentName:"p"},"column-wise")," with the numbers 1 to 6?"))),(0,a.kt)("p",null,"And multidimensional arrays - for example here's a ",(0,a.kt)("inlineCode",{parentName:"p"},"25 x 2 x 2")," array:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"> array( 1:40, dim = c( 10, 2, 2 ))\n")),(0,a.kt)("p",null,"There's also another very useful type, the ",(0,a.kt)("strong",{parentName:"p"},"data frame"),", which is often used to store scientific\ndata.  We'll come back to it a bit later."))}u.isMDXComponent=!0}}]);