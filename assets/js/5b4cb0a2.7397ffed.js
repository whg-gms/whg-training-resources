"use strict";(self.webpackChunkwhg_training_resources=self.webpackChunkwhg_training_resources||[]).push([[3086],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),m=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=m(e.components);return r.createElement(s.Provider,{value:t},e.children)},l="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),l=m(n),d=i,g=l["".concat(s,".").concat(d)]||l[d]||u[d]||o;return n?r.createElement(g,a(a({ref:t},p),{},{components:n})):r.createElement(g,a({ref:t},p))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[l]="string"==typeof e?e:i,a[1]=c;for(var m=2;m<o;m++)a[m]=n[m];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3803:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>m});var r=n(7462),i=(n(7294),n(3905));const o={sidebar_position:0},a="The emergency exit",c={unversionedId:"bioinformatics/command_line/appendices/emergency_brake",id:"bioinformatics/command_line/appendices/emergency_brake",title:"The emergency exit",description:"If you get stuck - for example if you don't seem to see a command prompt, or can't seem to run a",source:"@site/docs/bioinformatics/401_command_line/appendices/emergency_brake.md",sourceDirName:"bioinformatics/401_command_line/appendices",slug:"/bioinformatics/command_line/appendices/emergency_brake",permalink:"/whg-training-resources/bioinformatics/command_line/appendices/emergency_brake",draft:!1,editUrl:"https://github.com/whg-training/whg-training-resources/edit/main/docs/bioinformatics/401_command_line/appendices/emergency_brake.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"sidebar2",previous:{title:"Advanced topics",permalink:"/whg-training-resources/bioinformatics/command_line/appendices/"},next:{title:"Navigating history",permalink:"/whg-training-resources/bioinformatics/command_line/appendices/navigating_history"}},s={},m=[],p={toc:m},l="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(l,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"the-emergency-exit"},"The emergency exit"),(0,i.kt)("p",null,"If you get stuck - for example if you don't seem to see a command prompt, or can't seem to run a\ncommand - you can try pressing the emergency exit key combination ",(0,i.kt)("inlineCode",{parentName:"p"},"ctrl-c"),".  (I.e. ",(0,i.kt)("inlineCode",{parentName:"p"},"<control>"),"\ntogether with ",(0,i.kt)("inlineCode",{parentName:"p"},"c"),".)  This should do the following things:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If there's a command running it should quit it and return to the prompt."),(0,i.kt)("li",{parentName:"ul"},"If you're stuck 'in the middle of a command, this should cancel it and return to the shell.")),(0,i.kt)("p",null,"This can happen for example, if you mismatch quotes.  For example imagine you are trying to use\n",(0,i.kt)("inlineCode",{parentName:"p"},"echo")," to print a message, but accidentally forget to put a closing quote matching an opening one:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"% echo 'This is a message\n")),(0,i.kt)("p",null,"You will probably note see another prompt, but instead will see something like"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"quote>\n")),(0,i.kt)("p",null,"or just"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},">\n")),(0,i.kt)("p",null,"This means that the command-line is waiting for you to finish the command.  Pressing ",(0,i.kt)("inlineCode",{parentName:"p"},"ctrl-c")," will\ncancel this and get you back to the prompt."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Altenatively, you can finish the command by closing the quote (here ",(0,i.kt)("inlineCode",{parentName:"p"},"'"),").  It will print out the\nmessage and lots of newlines!"))))}u.isMDXComponent=!0}}]);