"use strict";(self.webpackChunkwhg_training_resources=self.webpackChunkwhg_training_resources||[]).push([[6997],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>y});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=s(n),m=a,y=c["".concat(l,".").concat(m)]||c[m]||d[m]||o;return n?r.createElement(y,i(i({ref:t},u),{},{components:n})):r.createElement(y,i({ref:t},u))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[c]="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},190:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:4},i="Python",p={unversionedId:"prerequisites/python",id:"prerequisites/python",title:"Python",description:"You shouldn't need to install python - both your base system, and your conda environment should have a version of python",source:"@site/docs/prerequisites/python.md",sourceDirName:"prerequisites",slug:"/prerequisites/python",permalink:"/whg-training-resources/prerequisites/python",draft:!1,editUrl:"https://github.com/whg-training/whg-training-resources/edit/main/docs/prerequisites/python.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"sidebar1",previous:{title:"The R `tidyverse`",permalink:"/whg-training-resources/prerequisites/tidyverse"},next:{title:"Julia",permalink:"/whg-training-resources/prerequisites/julia"}},l={},s=[{value:"ipython",id:"ipython",level:2},{value:"python for data sciecne",id:"python-for-data-sciecne",level:2},{value:"Next steps",id:"next-steps",level:2}],u={toc:s},c="wrapper";function d(e){let{components:t,...o}=e;return(0,a.kt)(c,(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"python"},"Python"),(0,a.kt)("p",null,"You shouldn't need to install python - both your base system, and your conda environment should have a version of python\ninstalled already.  Check by typing"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"python --version\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note.")," On an M1 Mac, the ",(0,a.kt)("inlineCode",{parentName:"p"},"python")," executable doesn't exist - you have to type ",(0,a.kt)("inlineCode",{parentName:"p"},"python3")," instead."),(0,a.kt)("p",null,"On my system this says: ",(0,a.kt)("inlineCode",{parentName:"p"},"Python 3.9.6")," if conda environment is ",(0,a.kt)("strong",{parentName:"p"},"not")," activated, and ",(0,a.kt)("inlineCode",{parentName:"p"},"Pythong 3.9.13")," if it is. This illustrates an important point: ",(0,a.kt)("strong",{parentName:"p"},"if you've installed conda you will have multiple python installations on your system"),".  Also, note that python comes in two similar but slightly different flavours (python 2 and python 3).  For the most part you should use python 3."),(0,a.kt)("p",null,"##\xa0Running python"),(0,a.kt)("p",null,"You can run python like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"python\n")),(0,a.kt)("p",null,"which takes you into the interactive python command prompt.  It looks something like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'Python 3.9.13 | packaged by conda-forge | (main, May 27 2022, 17:00:33) \n[Clang 13.0.1 ] on darwin\nType "help", "copyright", "credits" or "license" for more information.\n>>> \n')),(0,a.kt)("p",null,"Let's try it out, for example we could create a string variable:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'a = "Hello, this is a string"\n')),(0,a.kt)("p",null,"...split into words...."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"words = a.split( ' ' )\n")),(0,a.kt)("p",null,"...and compute their lengths:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"list( map( len, words )\n")),(0,a.kt)("p",null,"This little example already illustrates a bunch of stuff in python:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"split"),' is a string "method" (that is a function, but one which called in the form ',"<","object",">",".","<","method()",">",")  "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"split")," produces a ",(0,a.kt)("strong",{parentName:"li"},"list")," - an ordered list of objects."),(0,a.kt)("li",{parentName:"ul"},"We also used a so-called functional style: we applied ",(0,a.kt)("inlineCode",{parentName:"li"},"map()")," to apply a function (",(0,a.kt)("inlineCode",{parentName:"li"},"len()"),") to each element of our list.")),(0,a.kt)("h2",{id:"ipython"},"ipython"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"python")," interpreter is ok, and it's good for running python programs, but for interactive data analysis work you\nwill probably want to try out something more full-featured: ",(0,a.kt)("inlineCode",{parentName:"p"},"ipython"),".  Quit python (e.g. by typing ",(0,a.kt)("inlineCode",{parentName:"p"},"quit()")," or pressing\n",(0,a.kt)("inlineCode",{parentName:"p"},"ctrl-d"),") and install it:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"mamba install ipython\n")),(0,a.kt)("p",null,"And run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ipython\n")),(0,a.kt)("p",null,"It looks pretty much like before, but you'll have a prompt that says ",(0,a.kt)("inlineCode",{parentName:"p"},"In [1]")," instead of ",(0,a.kt)("inlineCode",{parentName:"p"},">>>"),".  It has helpful features like tab-completion of commands and filenames and syntax colouration.  "),(0,a.kt)("h2",{id:"python-for-data-sciecne"},"python for data sciecne"),(0,a.kt)("p",null,"To get a relaly good data science experience in python, we need a few packages.  The key ones are\n",(0,a.kt)("inlineCode",{parentName:"p"},"numpy")," (which provides good support for matrices, arrays, and numeric manipulation), ",(0,a.kt)("inlineCode",{parentName:"p"},"pandas"),"\n(which provides data frames), and ",(0,a.kt)("inlineCode",{parentName:"p"},"matplotlib")," which is a plotting library."),(0,a.kt)("p",null,"To install these, use conda:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"mamba install numpy pandas matplotlib\n")),(0,a.kt)("p",null,"Once installed, start a python session and let's try it out with some examples ",(0,a.kt)("a",{parentName:"p",href:"/whg-training-resources/prerequisites/R"},"similar to those we\nran in R"),".  First import the needed bits of libraries:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"from matplotlib import pyplot\nimport numpy\nimport math\n")),(0,a.kt)("p",null,"These statement import the libraries and set them so they can be used locally as ",(0,a.kt)("inlineCode",{parentName:"p"},"pd"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"np"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"plt")," etc."),(0,a.kt)("p",null,"Now, just like in R, we can make a simple plot:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'x = numpy.arange( 0, 2 * math.pi, 0.01 )\npyplot.plot( x, numpy.sin(x) )\npyplot.xlabel( "x" )\npyplot.ylabel( "sin(x)" )\npyplot.show()\n')),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"img",src:n(5635).Z,width:"1266",height:"946"})),(0,a.kt)("p",null,"Or generate and histogram a million samples from a Gaussian distribution:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'pyplot.hist(\n    numpy.random.randn(1000000),\n    bins = 100\n)\npyplot.xlabel( "x" )\npyplot.ylabel( "count" )\npyplot.show()\n')),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"img",src:n(6225).Z,width:"1274",height:"946"})),(0,a.kt)("h2",{id:"next-steps"},"Next steps"),(0,a.kt)("p",null,"To really make interactive python analyses fun, you're probably going to want to install JupyterLab. See ",(0,a.kt)("a",{parentName:"p",href:"/whg-training-resources/prerequisites/Jupyterlab"},"how to install Jupyterlab"),"."))}d.isMDXComponent=!0},6225:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/python_histogram-14fc6e9568c892c4aad8a5f33565861b.png"},5635:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/python_sin-dd73dd65760c33e41803e581ca09e1c6.png"}}]);