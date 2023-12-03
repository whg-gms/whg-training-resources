"use strict";(self.webpackChunkwhg_training_resources=self.webpackChunkwhg_training_resources||[]).push([[8786],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>d});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=a.createContext({}),c=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},l=function(e){var n=c(e.components);return a.createElement(p.Provider,{value:n},e.children)},m="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=c(t),u=i,d=m["".concat(p,".").concat(u)]||m[u]||g[u]||r;return t?a.createElement(d,o(o({ref:n},l),{},{components:t})):a.createElement(d,o({ref:n},l))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=u;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s[m]="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},2695:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>g,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=t(7462),i=(t(7294),t(3905));const r={sidebar_position:7},o="Counting genes",s={unversionedId:"bioinformatics/exploring_gene_annotations_in_bash/counting",id:"bioinformatics/exploring_gene_annotations_in_bash/counting",title:"Counting genes",description:"Quit less if you are in it (by pressing q) and let's generate some basic statistics.",source:"@site/docs/bioinformatics/exploring_gene_annotations_in_bash/counting.md",sourceDirName:"bioinformatics/exploring_gene_annotations_in_bash",slug:"/bioinformatics/exploring_gene_annotations_in_bash/counting",permalink:"/whg-training-resources/bioinformatics/exploring_gene_annotations_in_bash/counting",draft:!1,editUrl:"https://github.com/whg-training/whg-training-resources/edit/main/docs/bioinformatics/exploring_gene_annotations_in_bash/counting.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"sidebar2",previous:{title:"Viewing gene records",permalink:"/whg-training-resources/bioinformatics/exploring_gene_annotations_in_bash/viewing"},next:{title:"Counting genes again",permalink:"/whg-training-resources/bioinformatics/exploring_gene_annotations_in_bash/counting2"}},p={},c=[],l={toc:c},m="wrapper";function g(e){let{components:n,...t}=e;return(0,i.kt)(m,(0,a.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"counting-genes"},"Counting genes"),(0,i.kt)("p",null,"Quit ",(0,i.kt)("inlineCode",{parentName:"p"},"less")," if you are in it (by pressing ",(0,i.kt)("inlineCode",{parentName:"p"},"q"),") and let's generate some basic statistics. "),(0,i.kt)("p",null,"First, how many genes and other things are in the file? For this, we can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"cut")," command to cut out the\nthird column (which contains the ",(0,i.kt)("inlineCode",{parentName:"p"},"type"),"). Then we'll ",(0,i.kt)("em",{parentName:"p"},"pipe the output")," into the sort command (which sorts the\nrows).  And finally we will ask the ",(0,i.kt)("inlineCode",{parentName:"p"},"uniq")," command to count:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"cut -f3 gencode.v41.annotation.gff3 | sort | uniq -c\n")),(0,i.kt)("p",null,"This will take a minute or two to run - it's a big file!"),(0,i.kt)("p",null,"Ok - the output is not really useful because of all the metadata.  Let's use ",(0,i.kt)("inlineCode",{parentName:"p"},"grep -v")," to get rid of it:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"grep -v '#' gencode.v41.annotation.gff3 | cut -f3 | sort | uniq -c\n")),(0,i.kt)("p",null,"This ",(0,i.kt)("strong",{parentName:"p"},"finds lines")," that don't contain ",(0,i.kt)("inlineCode",{parentName:"p"},"#"),", ",(0,i.kt)("strong",{parentName:"p"},"extracts the third column")," from them, ",(0,i.kt)("strong",{parentName:"p"},"sorts them"),", and ",(0,i.kt)("strong",{parentName:"p"},"counts\nthe unique values"),"."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Picking apart the pipeline")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If this command isn't making sense to you, a good idea is to look at what each step does.\nTry running these commands one by one to parse it apart:"),(0,i.kt)("p",{parentName:"div"},"View the whole file:"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"less -S gencode.v41.annotation.gff3\n")),(0,i.kt)("p",{parentName:"div"},"Just the data rows:"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"grep -v '#' gencode.v41.annotation.gff3 | less -S\n")),(0,i.kt)("p",{parentName:"div"},"Just the third column of the data rows:"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"grep -v '#' gencode.v41.annotation.gff3 | cut -f3 | less -S\n")),(0,i.kt)("p",{parentName:"div"},"The third column sorted:"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"grep -v '#' gencode.v41.annotation.gff3 | cut -f3 | sort | less -S\n")),(0,i.kt)("p",{parentName:"div"},"The sorted unique values in the third column...."),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"grep -v '#' gencode.v41.annotation.gff3 | cut -f3 | sort | uniq | less -S\n")),(0,i.kt)("p",{parentName:"div"},"...and the same thing with counts:"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"grep -v '#' gencode.v41.annotation.gff3 | cut -f3 | sort | uniq -c | less -S\n")),(0,i.kt)("p",{parentName:"div"},"Hopefully by this point it is clear(er) what each step is doing."))),(0,i.kt)("p",null,"It prints:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"872459 CDS\n1625321 exon\n171599 five_prime_UTR\n 61852 gene\n 97009 start_codon\n 90749 stop_codon\n   119 stop_codon_redefined_as_selenocysteine\n203260 three_prime_UTR\n251236 transcript\n")),(0,i.kt)("p",null,"So - there are 1.6 million exons in the file and... ",(0,i.kt)("em",{parentName:"p"},"wait a moment"),", are there really 60,000 genes in the human genome?"),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Question")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The number 60,000 is way too big - why?"))))}g.isMDXComponent=!0}}]);