"use strict";(self.webpackChunkwhg_training_resources=self.webpackChunkwhg_training_resources||[]).push([[1316],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),m=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=m(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=m(n),d=o,f=p["".concat(s,".").concat(d)]||p[d]||u[d]||i;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,a[1]=l;for(var m=2;m<i;m++)a[m]=n[m];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1803:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var r=n(7462),o=(n(7294),n(3905));const i={sidebar_position:1},a="Getting started with the command line",l={unversionedId:"bioinformatics/command_line/README",id:"bioinformatics/command_line/README",title:"Getting started with the command line",description:"Welcome!  The UNIX command-line interface (sometimes also called \u201ccommand prompt\u201d or \u201cterminal\u201d) is a way of",source:"@site/docs/bioinformatics/401_command_line/README.md",sourceDirName:"bioinformatics/401_command_line",slug:"/bioinformatics/command_line/",permalink:"/whg-training-resources/bioinformatics/command_line/",draft:!1,editUrl:"https://github.com/whg-training/whg-training-resources/edit/main/docs/bioinformatics/401_command_line/README.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"sidebar2",previous:{title:"Bioinformatics tutorials",permalink:"/whg-training-resources/bioinformatics/"},next:{title:"Starting a terminal",permalink:"/whg-training-resources/bioinformatics/command_line/starting"}},s={},m=[{value:"Why should we learn to use the command line?",id:"why-should-we-learn-to-use-the-command-line",level:2}],c={toc:m},p="wrapper";function u(e){let{components:t,...i}=e;return(0,o.kt)(p,(0,r.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"getting-started-with-the-command-line"},"Getting started with the command line"),(0,o.kt)("p",null,"Welcome!  The UNIX ",(0,o.kt)("strong",{parentName:"p"},"command-line")," interface (sometimes also called \u201c",(0,o.kt)("strong",{parentName:"p"},"command prompt"),"\u201d or \u201c",(0,o.kt)("strong",{parentName:"p"},"terminal"),"\u201d) is a way of\ninteracting with the computer using only the keyboard.  If you haven't seen one before, it looks something like this:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"img",src:n(4920).Z,width:"750",height:"316"})),(0,o.kt)("p",null,"Many of the programs and tools used in bioinformatics are designed to work only from command-line, so for genomic\nanalysis it\u2019s very important to get familiar with how the terminal works."),(0,o.kt)("h2",{id:"why-should-we-learn-to-use-the-command-line"},"Why should we learn to use the command line?"),(0,o.kt)("p",null,"Here are some reasons:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"For many tasks it\u2019s faster than using a GUI (Graphic User Interface)."),(0,o.kt)("li",{parentName:"ul"},"It's flexible: you can combine multiple programs, making the output of one the input of the next in a pipeline."),(0,o.kt)("li",{parentName:"ul"},"Most bioinformatics tools are made for the command-line."),(0,o.kt)("li",{parentName:"ul"},"It can efficiently handle big files that gui based tools might struggle to open."),(0,o.kt)("li",{parentName:"ul"},"The command line has lots of powerful commands for parsing text files."),(0,o.kt)("li",{parentName:"ul"},"High-performance computing: compute clusters don't usually have a GUI!"),(0,o.kt)("li",{parentName:"ul"},"Some binary files (e.g. BAM or CRAM) can only be handled with dedicated command-line software (for example ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/samtools"},"samtools"),").")),(0,o.kt)("p",null,"To get started you need a terminal window."),(0,o.kt)("p",null,"When you're ready to start - go and start ",(0,o.kt)("a",{parentName:"p",href:"/whg-training-resources/bioinformatics/command_line/starting"},"a terminal"),"."))}u.isMDXComponent=!0},4920:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/terminal-1d952f6a9681ac4c22aa92c2c6c97634.png"}}]);