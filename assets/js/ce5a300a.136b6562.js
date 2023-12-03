"use strict";(self.webpackChunkwhg_training_resources=self.webpackChunkwhg_training_resources||[]).push([[7865],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var g=a.createContext({}),l=function(e){var t=a.useContext(g),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=l(e.components);return a.createElement(g.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,g=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),p=l(n),d=r,h=p["".concat(g,".").concat(d)]||p[d]||c[d]||s;return n?a.createElement(h,o(o({ref:t},m),{},{components:n})):a.createElement(h,o({ref:t},m))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=d;var i={};for(var g in t)hasOwnProperty.call(t,g)&&(i[g]=t[g]);i.originalType=e,i[p]="string"==typeof e?e:r,o[1]=i;for(var l=2;l<s;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6635:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>o,default:()=>c,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var a=n(7462),r=(n(7294),n(3905));const s={sidebar_position:1},o="Gene length",i={unversionedId:"programming/analysing_genes_across_species/extreme_genes/long_genes_1",id:"programming/analysing_genes_across_species/extreme_genes/long_genes_1",title:"Gene length",description:"To find the longest genes as measured by length on the genome, a good place to start would be to histogram gene",source:"@site/docs/programming/analysing_genes_across_species/extreme_genes/001_long_genes_1.md",sourceDirName:"programming/analysing_genes_across_species/extreme_genes",slug:"/programming/analysing_genes_across_species/extreme_genes/long_genes_1",permalink:"/whg-training-resources/programming/analysing_genes_across_species/extreme_genes/long_genes_1",draft:!1,editUrl:"https://github.com/whg-training/whg-training-resources/edit/main/docs/programming/analysing_genes_across_species/extreme_genes/001_long_genes_1.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"sidebar5",previous:{title:"Extreme genes!",permalink:"/whg-training-resources/programming/analysing_genes_across_species/extreme_genes/"},next:{title:"Computing coding length",permalink:"/whg-training-resources/programming/analysing_genes_across_species/extreme_genes/long_genes_2"}},g={},l=[],m={toc:l},p="wrapper";function c(e){let{components:t,...s}=e;return(0,r.kt)(p,(0,a.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"gene-length"},"Gene length"),(0,r.kt)("p",null,"To find the longest genes ",(0,r.kt)("em",{parentName:"p"},"as measured by length on the genome"),", a good place to start would be to histogram gene\nlength.  Here is a basic version:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-r"},'genes$length = end - start + 1\np = (\n    ggplot( data = genes )\n    + geom_histogram(\n        aes( x = length ),\n        bins = 100\n    )\n    + xlab( "Length of gene on chromosome" )\n    + theme_minimal()\n)\nprint(p)\n')),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Gene lengths vary so widely that this can be a bit hard to read.  Try transforming the x axis to a ",(0,r.kt)("a",{parentName:"p",href:"https://ggplot2.tidyverse.org/reference/scale_continuous.html"},"log10 scale")," to see the distribution better.  You might end up with something like this:"),(0,r.kt)("p",{parentName:"div"},(0,r.kt)("img",{alt:"img",src:n(9236).Z,width:"3329",height:"1624"})),(0,r.kt)("p",{parentName:"div"},"You could also ",(0,r.kt)("a",{parentName:"p",href:"https://ggplot2.tidyverse.org/reference/facet_wrap.html"},"facet by dataset")," (add ",(0,r.kt)("inlineCode",{parentName:"p"},"facet_wrap( ~dataset\n)"),") to separate the species."))),(0,r.kt)("p",null,"Another option is to plot gene length against number of transcripts, coloured by dataset, say - is this revealing?"),(0,r.kt)("p",null,"Either way, from your plots you should now be able to read off the length of the longest and shortest gene lengths.  "),(0,r.kt)("p",null,"To actually find those genes - try using ",(0,r.kt)("inlineCode",{parentName:"p"},"arrange()")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"filter()")," to pull them out.  For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-r"},"genes %>% arrange( desc(length)) %>% head(20)\n")),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Explore these genes now using the genome browsers or web searches.\nAre the longest genes similar across different species?  Are different genes among the longest biologically similar - what aspects of biology are they involved in?"))),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Is there anything odd about the histogram of gene lengths?  Use your detective skills to investigate."))),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Look for the shortest genes as well - what are they?"),(0,r.kt)("p",{parentName:"div"},"In humans, the shortest annotated genes seem to be tiny - only a few tens of basepairs long!  Look them up on the genome\nbrowsers - is there anything unusual about them?  Do all short genes look similar?"))))}c.isMDXComponent=!0},9236:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/gene_length-e93ee7466d3872020b5be0aa8d537fd8.png"}}]);