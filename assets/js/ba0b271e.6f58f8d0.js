"use strict";(self.webpackChunkwhg_training_resources=self.webpackChunkwhg_training_resources||[]).push([[6194],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},_=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),_=r,g=p["".concat(s,".").concat(_)]||p[_]||d[_]||i;return n?a.createElement(g,o(o({ref:t},u),{},{components:n})):a.createElement(g,o({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=_;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}_.displayName="MDXCreateElement"},4969:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:1},o="Getting the data",l={unversionedId:"sequence_data_analysis/variant_calling_and_imputation/Prerequisites",id:"sequence_data_analysis/variant_calling_and_imputation/Prerequisites",title:"Getting the data",description:"To get the data download and unzip this tarball:",source:"@site/docs/sequence_data_analysis/variant_calling_and_imputation/Prerequisites.md",sourceDirName:"sequence_data_analysis/variant_calling_and_imputation",slug:"/sequence_data_analysis/variant_calling_and_imputation/Prerequisites",permalink:"/whg-training-resources/sequence_data_analysis/variant_calling_and_imputation/Prerequisites",draft:!1,editUrl:"https://github.com/whg-training/whg-training-resources/edit/main/docs/sequence_data_analysis/variant_calling_and_imputation/Prerequisites.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"sidebar9",previous:{title:"Variant calling, phasing and imputation",permalink:"/whg-training-resources/sequence_data_analysis/variant_calling_and_imputation/"},next:{title:"Variant calling with bcftools",permalink:"/whg-training-resources/sequence_data_analysis/variant_calling_and_imputation/Variant_calling"}},s={},c=[],u={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"getting-the-data"},"Getting the data"),(0,r.kt)("p",null,"To get the data download and unzip this tarball:"),(0,r.kt)("p",null,"Change dir to the root and download:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"cd ~\nwget https://www.well.ox.ac.uk/~gav/projects/oxford_statgen_summer_school/day_one_afternoon.tgz\n")),(0,r.kt)("p",null,"Extract:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"tar -xzf day_one_afternoon.tgz\n")),(0,r.kt)("p",null,"You should now have a folder called ",(0,r.kt)("inlineCode",{parentName:"p"},"variant_calling_and_imputation"),".  Let's delete the tarball and change into it:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"rm day_one_afternoon.tgz\ncd variant_calling_and_imputation\n")),(0,r.kt)("p",null,"When you're ready, head on to ",(0,r.kt)("a",{parentName:"p",href:"/whg-training-resources/sequence_data_analysis/variant_calling_and_imputation/"},"the practical itself"),"."))}d.isMDXComponent=!0}}]);