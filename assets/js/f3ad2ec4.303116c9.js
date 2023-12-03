"use strict";(self.webpackChunkwhg_training_resources=self.webpackChunkwhg_training_resources||[]).push([[4395],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(n),g=i,m=c["".concat(l,".").concat(g)]||c[g]||u[g]||r;return n?a.createElement(m,o(o({ref:t},d),{},{components:n})):a.createElement(m,o({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:i,o[1]=s;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},2249:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=n(7462),i=(n(7294),n(3905));const r={sidebar_position:8},o="Reordering values",s={unversionedId:"data_visualisation/data_visualisation_with_ggplot2/reordering",id:"data_visualisation/data_visualisation_with_ggplot2/reordering",title:"Reordering values",description:"To make this plot easier to read, let's order the plots by median GDP per capita.",source:"@site/docs/data_visualisation/data_visualisation_with_ggplot2/006_reordering.md",sourceDirName:"data_visualisation/data_visualisation_with_ggplot2",slug:"/data_visualisation/data_visualisation_with_ggplot2/reordering",permalink:"/whg-training-resources/data_visualisation/data_visualisation_with_ggplot2/reordering",draft:!1,editUrl:"https://github.com/whg-training/whg-training-resources/edit/main/docs/data_visualisation/data_visualisation_with_ggplot2/006_reordering.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"sidebar3",previous:{title:"Adding summary statistics",permalink:"/whg-training-resources/data_visualisation/data_visualisation_with_ggplot2/summary_statistics"},next:{title:"Is gdp related to life expectancy?",permalink:"/whg-training-resources/data_visualisation/data_visualisation_with_ggplot2/gdp_life_expectancy"}},l={},p=[],d={toc:p},c="wrapper";function u(e){let{components:t,...r}=e;return(0,i.kt)(c,(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"reordering-values"},"Reordering values"),(0,i.kt)("p",null,"To make this plot easier to read, let's order the plots by median GDP per capita."),(0,i.kt)("p",null,"To do this in ggplot takes a bit of data manipulation - essentially, we tell ggplot what order we\nwant continents in by ordering them in the data itself. To do this we will ",(0,i.kt)("em",{parentName:"p"},"reorder the levels of\nthe ",(0,i.kt)("inlineCode",{parentName:"em"},"continent")," variable"),". This works because ",(0,i.kt)("inlineCode",{parentName:"p"},"continent")," is actually a ",(0,i.kt)("strong",{parentName:"p"},"factor")," - discrete\nvalues with a specific set of levels.  You can see them using the ",(0,i.kt)("inlineCode",{parentName:"p"},"levels")," function:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"levels(d$continent)\n")),(0,i.kt)("p",null,"Right now they are in alphabetical order. Let's use ",(0,i.kt)("inlineCode",{parentName:"p"},"dplyr")," to add a new column with the same\ncontinent in, but now ordered by per capita gdp:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"d$orderedContinent = reorder( d$continent, d$gdpPercap, FUN = median )\n")),(0,i.kt)("p",null,"You should see something like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"# A tibble: 1,704 \xd7 7\n   country     continent  year lifeExp      pop gdpPercap orderedContinent\n   <fct>       <fct>     <int>   <dbl>    <int>     <dbl> <fct>           \n 1 Afghanistan Asia       1952    28.8  8425333      779. Asia            \n 2 Afghanistan Asia       1957    30.3  9240934      821. Asia            \n 3 Afghanistan Asia       1962    32.0 10267083      853. Asia            \n 4 Afghanistan Asia       1967    34.0 11537966      836. Asia            \n 5 Afghanistan Asia       1972    36.1 13079460      740. Asia            \n 6 Afghanistan Asia       1977    38.4 14880372      786. Asia            \n 7 Afghanistan Asia       1982    39.9 12881816      978. Asia            \n 8 Afghanistan Asia       1987    40.8 13867957      852. Asia            \n 9 Afghanistan Asia       1992    41.7 16317921      649. Asia            \n10 Afghanistan Asia       1997    41.8 22227415      635. Asia            \n# \u2026 with 1,694 more rows\n# \u2139 Use `print(n = ...)` to see more rows\n")),(0,i.kt)("p",null,"Importantly the new variable is in a different order:\n$ levels(d$orderedContinent)\n","[1]",' "Africa"   "Americas" "Asia"     "Europe"   "Oceania" '),(0,i.kt)("p",null,"So let's plot - don't forget to update to use the new ",(0,i.kt)("inlineCode",{parentName:"p"},"orderedContinent")," variable:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-{r",metastring:"gapminder_ordered_violins}","gapminder_ordered_violins}":!0},'  ggplot(\n    data = d,\n    mapping = aes(\n      x = orderedContinent,\n      y = gdpPercap,\n      color = orderedContinent,\n      fill = orderedContinent)\n  ) +\n  geom_violin() +\n  geom_boxplot( width = 0.1, color = "black", fill = "white" ) +\n  scale_y_continuous(trans = "log10",\n                     breaks = c(0, 1000, 5000, 10000, 50000, 150000)) +\n  scale_color_brewer(palette = "Dark2") +\n  scale_fill_brewer(palette = "Dark2") +\n  labs(x = "Continent", y = "GDP per capita") +\n  theme(legend.position = "none")\n')),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"img",src:n(278).Z,width:"400",height:"300"})),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"A fancier way to make these data manipulations is to use ",(0,i.kt)("inlineCode",{parentName:"p"},"dplyr"),' to "pipe" the data through\nmutating functions. The ',(0,i.kt)("inlineCode",{parentName:"p"},"%>%")," syntax is used for this (kindof similar to how the ",(0,i.kt)("inlineCode",{parentName:"p"},"|")," character is\nused in the UNIX shell).  Mutating the dataframe on the fly would look like this:"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-R"},"d %>% mutate(\n    orderedContinent = reorder(continent, gdpPercap, FUN = median)\n)\n")),(0,i.kt)("p",{parentName:"div"},"It's also possible to pipe the output straight into ggplot - in this case we skip the ",(0,i.kt)("inlineCode",{parentName:"p"},"data"),"\nargument as the data is piped in:"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-R"},"d %>% mutate(\n    orderedContinent = reorder(continent, gdpPercap, FUN = median)\n) %>% ggplot(\n  mapping = aes( ... )\n  ...(etc.)\n")),(0,i.kt)("p",{parentName:"div"},"Whether this is clearer or not is a matter of personal preference - it certainly can make for\nshorter code."))))}u.isMDXComponent=!0},278:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/gdp_violin_by_continent_3-eef40ee7c82b728c4fe0e5cc94c238a3.png"}}]);