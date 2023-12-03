"use strict";(self.webpackChunkwhg_training_resources=self.webpackChunkwhg_training_resources||[]).push([[7536],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),u=r,g=m["".concat(l,".").concat(u)]||m[u]||d[u]||i;return n?a.createElement(g,o(o({ref:t},c),{},{components:n})):a.createElement(g,o({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4232:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:2},o="Refactor for better readability",s={unversionedId:"programming/programming_with_gene_annotations3/appendices/refactoring",id:"programming/programming_with_gene_annotations3/appendices/refactoring",title:"Refactor for better readability",description:"If you've followed the main tutorial, your parsegff3todataframe() function will have",source:"@site/docs/programming/programming_with_gene_annotations3/appendices/refactoring.md",sourceDirName:"programming/programming_with_gene_annotations3/appendices",slug:"/programming/programming_with_gene_annotations3/appendices/refactoring",permalink:"/whg-training-resources/programming/programming_with_gene_annotations3/appendices/refactoring",draft:!1,editUrl:"https://github.com/whg-training/whg-training-resources/edit/main/docs/programming/programming_with_gene_annotations3/appendices/refactoring.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"sidebar5",previous:{title:"Reading results from a sqlite file in any language",permalink:"/whg-training-resources/programming/programming_with_gene_annotations3/appendices/sqlite_access"},next:{title:"Analysing genes across species",permalink:"/whg-training-resources/programming/analysing_genes_across_species/"}},l={},p=[],c={toc:p},m="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"refactor-for-better-readability"},"Refactor for better readability"),(0,r.kt)("p",null,"If you've followed the ",(0,r.kt)("a",{parentName:"p",href:"/whg-training-resources/programming/programming_with_gene_annotations3/testing_it_out"},"main tutorial"),", your ",(0,r.kt)("inlineCode",{parentName:"p"},"parse_gff3_to_dataframe()")," function will have\nsomething like... 20 or 30 lines in it.  It's quite complicated, but really it's very simple and only does a couple of\nthings:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Reads in the data"),(0,r.kt)("li",{parentName:"ul"},"extracts some attributes")),(0,r.kt)("p",null,"So really it should look much simpler, like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-r"},"parse_gff3_to_dataframe = function( filename ) {\n    result = read_gff_data( filename )\n    add_attributes( result )\n    return( result )\n}\n")),(0,r.kt)("p",null,"This form is ",(0,r.kt)("strong",{parentName:"p"},"much better")," because it is very easy to see what it does."),(0,r.kt)("p",null,"Rewriting code like this is known as a ",(0,r.kt)("strong",{parentName:"p"},"refactor"),".  It makes it easier to read, and often ends up making it easier to\ntest and to alter as well.   After a refactor you may also find you don't need any code comments any more - so delete\nthem!  This is because the function names (if you get them right) will document themselves."),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Of course, this doesn't change the fact that the code still has to do the same things - you'll still need all the bits\nyou had previously.  However, you push the details down into smaller, named units (functions) so that it's obvious what\nthe high-level code does.  "))),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"You can indeed undertake this challenge in the python version."),(0,r.kt)("p",{parentName:"div"},(0,r.kt)("strong",{parentName:"p"},"Unfortunately"),", however, this is difficult to do fully in R.  This is because R doesn't pass function arguments 'by\nreference', meaning that those sub-functions can't really alter the 'result' dataframe.  In many situations this is\nfine, i.e. we could just have the function return the updated data like this:"),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-r"},"result = add_attributes( result )\n")),(0,r.kt)("p",{parentName:"div"},"However, because our data frame is really large (remember it took up ~2.5Gb of RAM!) we also have to be really careful\nabout making copies of it.  (A hidden factor of writing the code as above, is that you end up making a copy of result,\nmodify it, and then store it back into result - while that's happening your program is using 5Gb.)"),(0,r.kt)("p",{parentName:"div"},"A solution to this might rely on R's ",(0,r.kt)("a",{parentName:"p",href:"http://adv-r.had.co.nz/OO-essentials.html#rc"},"reference classes"),", but is beyond\nthe scope of this tutorial."),(0,r.kt)("p",{parentName:"div"},"Nevertheless you can get some of the way there, e.g. yu can certainly implement this line:"),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre"},"result = read_gff_data( filename )\n")),(0,r.kt)("p",{parentName:"div"},"which would already substantially reduce the length / complexity of the function."),(0,r.kt)("p",{parentName:"div"},"In ",(0,r.kt)("strong",{parentName:"p"},"python")," things are easier because python passes its arguments in a way that lets them be modified."))))}d.isMDXComponent=!0}}]);