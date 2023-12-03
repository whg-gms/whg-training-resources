"use strict";(self.webpackChunkwhg_training_resources=self.webpackChunkwhg_training_resources||[]).push([[7116],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(g,i(i({ref:t},c),{},{components:n})):a.createElement(g,i({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2217:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:3},i="Overview of the practical",l={unversionedId:"population_genetics/principal_components_analysis/overview",id:"population_genetics/principal_components_analysis/overview",title:"Overview of the practical",description:"Up to the table of contents / Back to the setup page / Forward to the page on LD pruning",source:"@site/docs/population_genetics/principal_components_analysis/overview.md",sourceDirName:"population_genetics/principal_components_analysis",slug:"/population_genetics/principal_components_analysis/overview",permalink:"/whg-training-resources/population_genetics/principal_components_analysis/overview",draft:!1,editUrl:"https://github.com/whg-training/whg-training-resources/edit/main/docs/population_genetics/principal_components_analysis/overview.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"sidebar7",previous:{title:"Getting set up",permalink:"/whg-training-resources/population_genetics/principal_components_analysis/getting_setup"},next:{title:"Removing highly-correlated SNPs",permalink:"/whg-training-resources/population_genetics/principal_components_analysis/ld_pruning"}},s={},p=[{value:"A note on quality control",id:"a-note-on-quality-control",level:2},{value:"Preparing data for PCA",id:"preparing-data-for-pca",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"overview-of-the-practical"},"Overview of the practical"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"Introduction.md"},"Up to the table of contents")," / ",(0,r.kt)("a",{parentName:"p",href:"/whg-training-resources/population_genetics/principal_components_analysis/getting_setup"},"Back to the setup page")," / ",(0,r.kt)("a",{parentName:"p",href:"/whg-training-resources/population_genetics/principal_components_analysis/ld_pruning"},"Forward to the page on LD pruning")),(0,r.kt)("p",null,"In this practical we will use ",(0,r.kt)("inlineCode",{parentName:"p"},"plink")," to do several things to the data:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"to remove closely-related samples"),(0,r.kt)("li",{parentName:"ul"},"to compute principal components"),(0,r.kt)("li",{parentName:"ul"},"and to compute the SNP weights or loadings that tell us how principal components are weighted across the genome.")),(0,r.kt)("p",null,"We'll also use R to inspect and plot results."),(0,r.kt)("h2",{id:"a-note-on-quality-control"},"A note on quality control"),(0,r.kt)("p",null,"Before carrying out a genetic analysis like PCA, it's important to have a good-quality dataset, and\nthis typically means carrying out careful quality control (QC) first. On this course we'll cover QC\nin later lectures and practicals. For this practical we'll use an already-cleaned dataset contained\nin the file ",(0,r.kt)("inlineCode",{parentName:"p"},"chr19-clean.vcf.gz"),". You can look at the data in this file by typing"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"less -S chr19-clean.vcf.gz\n")),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If you are using Mac OS X, you will need to use ",(0,r.kt)("inlineCode",{parentName:"p"},"zless")," instead of ",(0,r.kt)("inlineCode",{parentName:"p"},"less")," because the file is gzipped."))),(0,r.kt)("p",null,"This file is a ",(0,r.kt)("a",{parentName:"p",href:"https://samtools.github.io/hts-specs/VCFv4.2.pdf"},"Variant Call Format")," file.  It consists of some metadata, followed by genotype calls at different sites (rows) for different samples (columns).  Feel free to look at the data by scrolling around. When you've finished, press the 'q' key to quit back to the terminal prompt."),(0,r.kt)("h2",{id:"preparing-data-for-pca"},"Preparing data for PCA"),(0,r.kt)("p",null,"Before computing PCs we will need to do some pruning of the data.  We will:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"remove SNPs that are highly correlated to each other (i.e. 'in linkage disequilibrium' (LD)).  This is to avoid confounding the analysis by local LD patterns."),(0,r.kt)("li",{parentName:"ul"},"remove samples that are too closely related (so that our PCs.  This is so that our PCs reflect the majority of our data.")),(0,r.kt)("p",null,"When you're ready, ",(0,r.kt)("a",{parentName:"p",href:"/whg-training-resources/population_genetics/principal_components_analysis/ld_pruning"},"go here to start pruning"),"."))}d.isMDXComponent=!0}}]);