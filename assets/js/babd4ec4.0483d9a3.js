"use strict";(self.webpackChunkwhg_training_resources=self.webpackChunkwhg_training_resources||[]).push([[7150],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>h});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(t),g=a,h=m["".concat(l,".").concat(g)]||m[g]||p[g]||o;return t?r.createElement(h,s(s({ref:n},u),{},{components:t})):r.createElement(h,s({ref:n},u))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=g;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[m]="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=t[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},2360:(e,n,t)=>{t.d(n,{Z:()=>s});var r=t(7294),a=t(6010);const o={tabItem:"tabItem_OmH5"};function s(e){let{children:n,hidden:t,className:s}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o.tabItem,s),hidden:t},n)}},9877:(e,n,t)=>{t.d(n,{Z:()=>p});var r=t(7462),a=t(7294),o=t(2389),s=t(7392),i=t(7094),l=t(2466),c=t(6010);const u={tabList:"tabList_uSqn",tabItem:"tabItem_LplD"};function m(e){const{lazy:n,block:t,defaultValue:o,values:m,groupId:p,className:g}=e,h=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),d=m??h.map((e=>{let{props:{value:n,label:t,attributes:r}}=e;return{value:n,label:t,attributes:r}})),f=(0,s.l)(d,((e,n)=>e.value===n.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===o?o:o??h.find((e=>e.props.default))?.props.value??h[0]?.props.value;if(null!==b&&!d.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${d.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:_,setTabGroupChoices:y}=(0,i.U)(),[v,w]=(0,a.useState)(b),k=[],{blockElementScrollPositionUntilNextRender:E}=(0,l.o5)();if(null!=p){const e=_[p];null!=e&&e!==v&&d.some((n=>n.value===e))&&w(e)}const O=e=>{const n=e.currentTarget,t=k.indexOf(n),r=d[t].value;r!==v&&(E(n),w(r),null!=p&&y(p,r))},N=e=>{let n=null;switch(e.key){case"ArrowRight":{const t=k.indexOf(e.currentTarget)+1;n=k[t]||k[0];break}case"ArrowLeft":{const t=k.indexOf(e.currentTarget)-1;n=k[t]||k[k.length-1];break}}n?.focus()};return a.createElement("div",{className:(0,c.Z)("tabs-container",u.tabList)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":t},g)},d.map((e=>{let{value:n,label:t,attributes:o}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:v===n?0:-1,"aria-selected":v===n,key:n,ref:e=>k.push(e),onKeyDown:N,onFocus:O,onClick:O},o,{className:(0,c.Z)("tabs__item",u.tabItem,o?.className,{"tabs__item--active":v===n})}),t??n)}))),n?(0,a.cloneElement)(h.filter((e=>e.props.value===v))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},h.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==v})))))}function p(e){const n=(0,o.Z)();return a.createElement(m,(0,r.Z)({key:String(n)},e))}},3234:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=t(7462),a=(t(7294),t(3905));t(9877),t(2360);const o={sidebar_position:10},s="How much of the genome is in genes?",i={unversionedId:"programming/analysing_genes_across_species/how_much_in_genes/README",id:"programming/analysing_genes_across_species/how_much_in_genes/README",title:"How much of the genome is in genes?",description:"If you've followed so far you should have:",source:"@site/docs/programming/analysing_genes_across_species/how_much_in_genes/README.md",sourceDirName:"programming/analysing_genes_across_species/how_much_in_genes",slug:"/programming/analysing_genes_across_species/how_much_in_genes/",permalink:"/whg-training-resources/programming/analysing_genes_across_species/how_much_in_genes/",draft:!1,editUrl:"https://github.com/whg-training/whg-training-resources/edit/main/docs/programming/analysing_genes_across_species/how_much_in_genes/README.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"sidebar5",previous:{title:"Getting chromosome lengths",permalink:"/whg-training-resources/programming/analysing_genes_across_species/getting_chromosomes"},next:{title:"A naive approach",permalink:"/whg-training-resources/programming/analysing_genes_across_species/how_much_in_genes/naive_approach"}},l={},c=[],u={toc:c},m="wrapper";function p(e){let{components:n,...t}=e;return(0,a.kt)(m,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"how-much-of-the-genome-is-in-genes"},"How much of the genome is in genes?"),(0,a.kt)("p",null,"If you've followed so far you should have:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"a table ",(0,a.kt)("inlineCode",{parentName:"li"},"genes")," of genes (with some statistics from the ",(0,a.kt)("a",{parentName:"li",href:"/whg-training-resources/programming/analysing_genes_across_species/extreme_genes/canonical_transcripts"},"'canonical' transcript"),")."),(0,a.kt)("li",{parentName:"ul"},"a table ",(0,a.kt)("inlineCode",{parentName:"li"},"regions")," of regions including chromosomes or other contigs, describing the assembly."),(0,a.kt)("li",{parentName:"ul"},"and you should have (or know how to get) other things like a dataframe of ",(0,a.kt)("inlineCode",{parentName:"li"},"transcripts")," and an ",(0,a.kt)("inlineCode",{parentName:"li"},"exons"),".")),(0,a.kt)("p",null,"Let's use this to try to figure out how much of the genome is actually covered by genes."))}p.isMDXComponent=!0}}]);