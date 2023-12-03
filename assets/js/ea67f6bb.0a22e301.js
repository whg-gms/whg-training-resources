"use strict";(self.webpackChunkwhg_training_resources=self.webpackChunkwhg_training_resources||[]).push([[85],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},m="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),u=a,h=m["".concat(l,".").concat(u)]||m[u]||g[u]||r;return n?o.createElement(h,i(i({ref:t},c),{},{components:n})):o.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4364:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>g,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var o=n(7462),a=(n(7294),n(3905));const r={sidebar_position:1},i="Introduction",s={unversionedId:"programming/programming_with_gene_annotations3/Introduction",id:"programming/programming_with_gene_annotations3/Introduction",title:"Introduction",description:"Up to table of contents / Go to next page.",source:"@site/docs/programming/programming_with_gene_annotations3/001_Introduction.md",sourceDirName:"programming/programming_with_gene_annotations3",slug:"/programming/programming_with_gene_annotations3/Introduction",permalink:"/whg-training-resources/programming/programming_with_gene_annotations3/Introduction",draft:!1,editUrl:"https://github.com/whg-training/whg-training-resources/edit/main/docs/programming/programming_with_gene_annotations3/001_Introduction.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"sidebar5",previous:{title:"Learn to program with gene annotations!",permalink:"/whg-training-resources/programming/programming_with_gene_annotations3/"},next:{title:"What gene annotation data looks like",permalink:"/whg-training-resources/programming/programming_with_gene_annotations3/What_gene_annotation_data_looks_like"}},l={},p=[{value:"Plan of attack",id:"plan-of-attack",level:2},{value:"Coding for success",id:"coding-for-success",level:2},{value:"What gene annotation data look like",id:"what-gene-annotation-data-look-like",level:2}],c={toc:p},m="wrapper";function g(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/whg-training-resources/programming/programming_with_gene_annotations3/"},"Up to table of contents")," / ",(0,a.kt)("a",{parentName:"p",href:"What_gene_annotation_data_looks_like.md"},"Go to next page"),"."),(0,a.kt)("p",null,"One of the amazing achievements of the last 100 years is the identification and mapping of genes -\nDNA sequences that encode proteins or other functional molecules - across many hundreds of species.\nFor example, the ",(0,a.kt)("a",{parentName:"p",href:"http://ftp.ensembl.org/pub/current_gff3/"},"Ensembl ftp site")," holds gene annotation\nfiles for over 300 species, everything from ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Spiny_chromis"},(0,a.kt)("em",{parentName:"a"},"Acanthochromis\nPolyacanthus"))," to ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Silvereye"},(0,a.kt)("em",{parentName:"a"},"Zosterops\nLateralis")),".  Other sites, such as ",(0,a.kt)("a",{parentName:"p",href:"https://ensemblgenomes.org"},"Ensembl\nGenomes")," hold genes for other organisms such as the ",(0,a.kt)("a",{parentName:"p",href:"https://plasmodb.org/plasmo/app/downloads/Current_Release/"},(0,a.kt)("em",{parentName:"a"},"Plasmodium"),"\nparasites")," that cause malaria.  And many\nmore species are ",(0,a.kt)("a",{parentName:"p",href:"https://www.darwintreeoflife.org"},"being mapped"),"."),(0,a.kt)("p",null,"So that's a lot of data to digest - all of it available for us to get and analyse?  For any given\nspecies lots of questions immediately spring to mind:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"How many genes are there?"),(0,a.kt)("li",{parentName:"ul"},"How big are they?"),(0,a.kt)("li",{parentName:"ul"},"How complex are they - how many exons?  How many different transcripts?"),(0,a.kt)("li",{parentName:"ul"},"How much of the genome is in genes (and what's in the rest of it?)"),(0,a.kt)("li",{parentName:"ul"},"How much of these genes actually codes for proteins - and how much is untranslated?"),(0,a.kt)("li",{parentName:"ul"},"Do these patterns differ across species?  Across cell types?  How?")),(0,a.kt)("p",null,"You can probably think many others!"),(0,a.kt)("p",null,"You can probably guess, or may know, some of the answers, but a great thing is that we don't have to\nguess!  In this practical we will write some code that can process gene annotation files, as a way\nto start figuring out these questions."),(0,a.kt)("h2",{id:"plan-of-attack"},"Plan of attack"),(0,a.kt)("p",null,"This problem is typical of bioinformatics problems: there is some data available (like those in the\nabove FTP sites) that comes in specific file formats (that somebody else has invented). And we have\na set of slightly vague scientific questions in mind we're interested in. To answer them, we have to\nunderstand the data files, write some code to process it, and come up with some sort of quantitative\nanalyses."),(0,a.kt)("h2",{id:"coding-for-success"},"Coding for success"),(0,a.kt)("p",null,"As outlined above we're going to focus on two things at once in this tutorial. One focus will be on\nanswering the scientific questions above. And the other focus will be on figuring out how to write\ngood, re-useable code to do this."),(0,a.kt)("p",null,"There are lots of ways to define 'good code' and lots of ways to write it. Here are some simple\nthings we could aim for:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"the code ought to work"),(0,a.kt)("li",{parentName:"ol"},"it ought to not take too long to do it, or use too much memory"),(0,a.kt)("li",{parentName:"ol"},"it ought to be obvious what the code does")),(0,a.kt)("p",null,"The third point is really the most important one here and is the one we'll focus on first. This is because, if\nyou can figure out what the code does, then you're in a good position to fix any problems with it, making it\nwork better and faster and so on. But if you can't figure it out, you'll end up throwing it away and starting\nagain. So that's what we'll focus on."),(0,a.kt)("h2",{id:"what-gene-annotation-data-look-like"},"What gene annotation data look like"),(0,a.kt)("p",null,"When you've had enough coding philosophy, ",(0,a.kt)("a",{parentName:"p",href:"What_gene_annotation_data_looks_like.md"},"go and see what gene annotation data looks like"),"."))}g.isMDXComponent=!0}}]);