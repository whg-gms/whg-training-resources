"use strict";(self.webpackChunkwhg_training_resources=self.webpackChunkwhg_training_resources||[]).push([[5578],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>h});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=u(r),m=i,h=p["".concat(l,".").concat(m)]||p[m]||c[m]||o;return r?n.createElement(h,a(a({ref:t},d),{},{components:r})):n.createElement(h,a({ref:t},d))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:i,a[1]=s;for(var u=2;u<o;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7360:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var n=r(7462),i=(r(7294),r(3905));const o={sidebar_position:3},a="Getting a text editor",s={unversionedId:"prerequisites/editor",id:"prerequisites/editor",title:"Getting a text editor",description:"Whatever you do, you're going to want a good text editor.  There are many choices -",source:"@site/docs/prerequisites/editor.md",sourceDirName:"prerequisites",slug:"/prerequisites/editor",permalink:"/whg-training-resources/prerequisites/editor",draft:!1,editUrl:"https://github.com/whg-training/whg-training-resources/edit/main/docs/prerequisites/editor.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"sidebar1",previous:{title:"R and RStudio",permalink:"/whg-training-resources/prerequisites/R"},next:{title:"The R `tidyverse`",permalink:"/whg-training-resources/prerequisites/tidyverse"}},l={},u=[{value:"Installing Visual Studio Code",id:"installing-visual-studio-code",level:2},{value:"Running a terminal in VS Code",id:"running-a-terminal-in-vs-code",level:3}],d={toc:u},p="wrapper";function c(e){let{components:t,...r}=e;return(0,i.kt)(p,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"getting-a-text-editor"},"Getting a text editor"),(0,i.kt)("p",null,"Whatever you do, you're going to want a good text editor.  There are many choices -"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"On ",(0,i.kt)("strong",{parentName:"li"},"Mac OS X"),", try ",(0,i.kt)("a",{parentName:"li",href:"https://code.visualstudio.com"},"Visual Studio Code"),"choose ",(0,i.kt)("a",{parentName:"li",href:"https://www.textmate.org"},"TextMate"),", or ",(0,i.kt)("a",{parentName:"li",href:"https://www.sublimetext.com"},"Sublime Text"),", ."),(0,i.kt)("li",{parentName:"ul"},"On ",(0,i.kt)("strong",{parentName:"li"},"Linux"),", try ",(0,i.kt)("a",{parentName:"li",href:"https://code.visualstudio.com"},"Visual Studio Code")," or ",(0,i.kt)("a",{parentName:"li",href:"https://www.sublimetext.com"},"Sublime Text"),"."),(0,i.kt)("li",{parentName:"ul"},"On ",(0,i.kt)("strong",{parentName:"li"},"Windows"),", ",(0,i.kt)("a",{parentName:"li",href:"https://code.visualstudio.com"},"Visual Studio Code")," is a good choice.")),(0,i.kt)("p",null,"You also get other text editors around - for if you edit a text or markdown file inside\n",(0,i.kt)("a",{parentName:"p",href:"/whg-training-resources/prerequisites/Jupyterlab"},"Jupyter Lab"),", that's a text editor, similarly ",(0,i.kt)("a",{parentName:"p",href:"/whg-training-resources/prerequisites/R"},"Rstudio")," has its own editor."),(0,i.kt)("h2",{id:"installing-visual-studio-code"},"Installing Visual Studio Code"),(0,i.kt)("p",null,"If you are on Windows in particular you will almost certainly want Visual Studio Code installed, in\nparticular because it is set up to work well with your ",(0,i.kt)("a",{parentName:"p",href:"/whg-training-resources/prerequisites/UNIX"},"Windows Subsystem for Linux")," system.  It works like this:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"visit the (Visual Studio Code website)","[https://code.visualstudio.com]",", download and install it."),(0,i.kt)("li",{parentName:"ol"},"Start Visual Studio Code and enter the extensions manager (one of the icons on the left)."),(0,i.kt)("li",{parentName:"ol"},"Search for 'WSL' and click on the 'WSL' extension and install it.")),(0,i.kt)("p",null,"At this point something neat happens: you'll see an extra icon called 'Remote Explorer' appear in\nthe icon tray on the left. Click it and you'll see a folder called 'Ubuntu' with your home folder\ninside. ",(0,i.kt)("strong",{parentName:"p"},"This is now pointing at your UNIX home folder"),", and it gives you a seamless way to edit\nfiles that work with your UNIX command-line."),(0,i.kt)("p",null,"Going the other way is also easy: start your UNIX terminal and find a file or fodler you'd like to edit.\nFor example we could make one like this"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"echo 'This is a test file' > test.txt\n")),(0,i.kt)("p",null,"You can now edit the file in VS Code like so:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"code ./text.txt\n")),(0,i.kt)("p",null,"VS Code should magically appear and open your file."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"You can also 'open' a whole folder:"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre"},"code ./\n")),(0,i.kt)("p",{parentName:"div"},"which is usually nicer, as it gives you a file explorer on the left where you can pick what you want to edit."))),(0,i.kt)("h3",{id:"running-a-terminal-in-vs-code"},"Running a terminal in VS Code"),(0,i.kt)("p",null,"It's also possible to get your UNIX terminal directly in VS Code. From the window above, go to the\n",(0,i.kt)("inlineCode",{parentName:"p"},"Terminal")," menu and choose 'New Terminal'.  The window that opens is a UNIX terminal pointing at the same folder as your file."))}c.isMDXComponent=!0}}]);