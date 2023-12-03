"use strict";(self.webpackChunkwhg_training_resources=self.webpackChunkwhg_training_resources||[]).push([[6645],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},g="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),g=p(a),c=r,m=g["".concat(l,".").concat(c)]||g[c]||d[c]||i;return a?n.createElement(m,o(o({ref:t},u),{},{components:a})):n.createElement(m,o({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[g]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},1079:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const i={sidebar_position:2,author:"Samvida S. Venkatesh",date:"2021-10-21"},o="More data visualisation in R",s={unversionedId:"data_visualisation/data_visualisation_with_ggplot2/README",id:"data_visualisation/data_visualisation_with_ggplot2/README",title:"More data visualisation in R",description:"Authors: Samvida Venkatesh.",source:"@site/docs/data_visualisation/data_visualisation_with_ggplot2/README.md",sourceDirName:"data_visualisation/data_visualisation_with_ggplot2",slug:"/data_visualisation/data_visualisation_with_ggplot2/",permalink:"/whg-training-resources/data_visualisation/data_visualisation_with_ggplot2/",draft:!1,editUrl:"https://github.com/whg-training/whg-training-resources/edit/main/docs/data_visualisation/data_visualisation_with_ggplot2/README.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,author:"Samvida S. Venkatesh",date:"2021-10-21"},sidebar:"sidebar3",previous:{title:"Getting information about your R session",permalink:"/whg-training-resources/data_visualisation/visualising_rna-seq_data/appendices/getting_session_info"},next:{title:"A first look at Gapminder data",permalink:"/whg-training-resources/data_visualisation/data_visualisation_with_ggplot2/gapminder"}},l={},p=[{value:"Getting set up",id:"getting-set-up",level:2}],u={toc:p},g="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(g,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"more-data-visualisation-in-r"},"More data visualisation in R"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Authors"),": Samvida Venkatesh."),(0,r.kt)("p",null,"Welcome!  In this tutorial we will further explore ways to visualise data using the R packages\n",(0,r.kt)("a",{parentName:"p",href:"https://dplyr.tidyverse.org"},(0,r.kt)("inlineCode",{parentName:"a"},"dplyr"))," and ",(0,r.kt)("a",{parentName:"p",href:"https://ggplot2.tidyverse.org"},(0,r.kt)("inlineCode",{parentName:"a"},"ggplot2")),". "),(0,r.kt)("h2",{id:"getting-set-up"},"Getting set up"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"dplyr")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"ggplot2")," are part of ",(0,r.kt)("a",{parentName:"p",href:"https://www.tidyverse.org"},"tidyverse"),". If you followed the\n",(0,r.kt)("a",{parentName:"p",href:"/whg-training-resources/prerequisites/tidyverse"},"tidyverse installation section")," you'll have this already - if not let's install\nit now:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-R"},'install.packages("tidyverse") \n')),(0,r.kt)("p",null,"We'll use real data on population size, life expectancy and GDP from\n",(0,r.kt)("a",{parentName:"p",href:"https://www.gapminder.org"},"gapminder.org"),", and ecological data from\n",(0,r.kt)("a",{parentName:"p",href:"https://allisonhorst.github.io/palmerpenguins/"},"palmerpenguins"),", so let's install those packages\ntoo:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-R"},'install.packages("gapminder")\ninstall.packages("palmerpenguins")\n')),(0,r.kt)("p",null,"Lastly to make good-looking plots we need cool colour palettes - ",(0,r.kt)("a",{parentName:"p",href:"https://colorbrewer2.org"},"Color\nBrewer")," is one of these so let's install:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-R"},'install.packages("RColorBrewer")\n')),(0,r.kt)("p",null,"Load these into a running R session:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"library(ggplot2)\nlibrary(dplyr)\nlibrary(RColorBrewer)\n")),(0,r.kt)("p",null,"As a last step we are going to default to a 'bw' style of plots, so let's set out ",(0,r.kt)("inlineCode",{parentName:"p"},"ggplot2")," theme now:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ggplot2::theme_set(theme_bw())\n")))}d.isMDXComponent=!0}}]);