"use strict";(self.webpackChunkwhg_training_resources=self.webpackChunkwhg_training_resources||[]).push([[9257],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(n),u=i,h=m["".concat(s,".").concat(u)]||m[u]||c[u]||o;return n?a.createElement(h,r(r({ref:t},d),{},{components:n})):a.createElement(h,r({ref:t},d))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:i,r[1]=l;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9325:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(7462),i=(n(7294),n(3905));const o={sidebar_position:8},r="Working with files",l={unversionedId:"bioinformatics/command_line/working_with_files",id:"bioinformatics/command_line/working_with_files",title:"Working with files",description:"If you got this far, you've had a first look at moving aronud the filesystem and manipulating files. But the files we",source:"@site/docs/bioinformatics/401_command_line/07_working_with_files.md",sourceDirName:"bioinformatics/401_command_line",slug:"/bioinformatics/command_line/working_with_files",permalink:"/whg-training-resources/bioinformatics/command_line/working_with_files",draft:!1,editUrl:"https://github.com/whg-training/whg-training-resources/edit/main/docs/bioinformatics/401_command_line/07_working_with_files.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"sidebar2",previous:{title:"Some important facts about file names",permalink:"/whg-training-resources/bioinformatics/command_line/important_facts_about_filenames"},next:{title:"I/O redirection and pipelining",permalink:"/whg-training-resources/bioinformatics/command_line/pipelines"}},s={},p=[{value:"Using an editor",id:"using-an-editor",level:2},{value:"Redirecting output to a file",id:"redirecting-output-to-a-file",level:2},{value:"Dowloading some data",id:"dowloading-some-data",level:2},{value:"Viewing the contents of a file: <code>cat</code>, <code>less</code>, <code>head</code>, <code>tail</code>",id:"viewing-the-contents-of-a-file-cat-less-head-tail",level:2},{value:"Getting information about a file",id:"getting-information-about-a-file",level:2},{value:"Next steps",id:"next-steps",level:2}],d={toc:p},m="wrapper";function c(e){let{components:t,...n}=e;return(0,i.kt)(m,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"working-with-files"},"Working with files"),(0,i.kt)("p",null,"If you got this far, you've had a first look at moving aronud the filesystem and manipulating files. But the files we\nused were empty... how do you make files with useful data in?  And how do you see the contents? Here are three ways."),(0,i.kt)("h2",{id:"using-an-editor"},"Using an editor"),(0,i.kt)("p",null,"The simplest way to edit a file is to use an editor, such as ",(0,i.kt)("inlineCode",{parentName:"p"},"nano"),".    For example to edit\nour greeting:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"% nano greeting.txt\n")),(0,i.kt)("p",null,"You can edit the file as desired (for example, maybe you want your real name in there instead of your username?)"),(0,i.kt)("p",null,"When you want to quit, press ",(0,i.kt)("inlineCode",{parentName:"p"},"Ctrl-X")," (control then X).  It should ask if you want to save changes - press 'y' and then ",(0,i.kt)("inlineCode",{parentName:"p"},"<enter>")," to save them and quit.\n(You can also just save, without quitting, by using ",(0,i.kt)("inlineCode",{parentName:"p"},"Ctrl-o")," instead.)"),(0,i.kt)("p",null,"If you want to see again what's in the file, the ",(0,i.kt)("inlineCode",{parentName:"p"},"cat")," command will print it out:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"% cat greeting.txt\n")),(0,i.kt)("p",null,"(",(0,i.kt)("inlineCode",{parentName:"p"},"cat")," actually stands for 'concatenate' - it outputs the files you give it as arguments, one after the other.)"),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Actually the best editor is probably outside your terminal. For example - in JupyterHub you can create and edit files\nfrom the user interface (e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"File")," -> ",(0,i.kt)("inlineCode",{parentName:"p"},"New")," in the menu). Or on Windows or Mac OS you can use Notepad or TextEdit, or\nbetter still download an editor like Visual Studio Code."),(0,i.kt)("p",{parentName:"div"},"However in some situations, such as when working on a compute cluster, you won't be able to use these, and it's useful\nto be able to edit directly in the terminal window, so editrs like ",(0,i.kt)("inlineCode",{parentName:"p"},"nano")," are still useful."))),(0,i.kt)("h2",{id:"redirecting-output-to-a-file"},"Redirecting output to a file"),(0,i.kt)("p",null,"Another way to put data in a file is to capture or 'redirect' the output of another command to the file."),(0,i.kt)("p",null,"For example we've already seen that the echo command can print out a message:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'% echo "Hello there, $USER!"\nHello there, duncan!\n')),(0,i.kt)("p",null,"If we wanted this output in a file instead - we can redirect it there using ",(0,i.kt)("inlineCode",{parentName:"p"},">")," :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'% echo "Hello there, $USER!" > greeting2.txt\n')),(0,i.kt)("p",null,"You will notice a couple of things here:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"The command ",(0,i.kt)("strong",{parentName:"li"},"no longer")," prints the message to the screen - it's been redirected after all."),(0,i.kt)("li",{parentName:"ol"},"A new file ",(0,i.kt)("inlineCode",{parentName:"li"},"greeting2.txt")," will appear in the directory.")),(0,i.kt)("p",null,"Use ",(0,i.kt)("inlineCode",{parentName:"p"},"cat")," again to satisfy yourself that the file really contains the message."),(0,i.kt)("p",null,"Ok, so what if we want a longer greeting? Let's try to add a second line:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'% echo "This is the second line of our greeting" > greeting.txt\n')),(0,i.kt)("p",null,"Did it work?"),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Question")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Use ",(0,i.kt)("inlineCode",{parentName:"p"},"cat")," to see what the contents of ",(0,i.kt)("inlineCode",{parentName:"p"},"greeting.txt")," look like now.  Is it the correct greeting, on two lines?"))),(0,i.kt)("p",null,"This illustrates an important fact about the ",(0,i.kt)("inlineCode",{parentName:"p"},">")," redirect operator.  It ",(0,i.kt)("strong",{parentName:"p"},"overwrites the content")," of whatever you\nredirect into.  Like other commands, it doesn't ask for confirmation (or permission) - it just does it."),(0,i.kt)("p",null,"If you actually want to ",(0,i.kt)("strong",{parentName:"p"},"append")," data to the file, you can use ",(0,i.kt)("inlineCode",{parentName:"p"},">>")," instead of ",(0,i.kt)("inlineCode",{parentName:"p"},">"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'% echo "Hello there, $USER!" > greeting.txt\n% echo "This is the second line of our greeting" >> greeting.txt\n')),(0,i.kt)("p",null,"Again - check this is now the right message."),(0,i.kt)("h2",{id:"dowloading-some-data"},"Dowloading some data"),(0,i.kt)("p",null,"Finally another very useful way to get data - download it from somewhere else!\nYou can download from a url using the ",(0,i.kt)("inlineCode",{parentName:"p"},"wget")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"curl")," commands.  Let's download a file to experiment with now:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"wget https://www.well.ox.ac.uk/bioinformatics/training/msc_gm/2023/data/sonnet.txt\n")),(0,i.kt)("p",null,"or"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"curl -O https://www.well.ox.ac.uk/bioinformatics/training/msc_gm/2023/data/sonnet.txt\n")),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"You can use the copy button in the above to copy the command and paste it into your terminal.  Note that ",(0,i.kt)("inlineCode",{parentName:"p"},"wget")," doesn't\nwork on Mac OS X, but ",(0,i.kt)("inlineCode",{parentName:"p"},"curl")," should work everywhere."))),(0,i.kt)("h2",{id:"viewing-the-contents-of-a-file-cat-less-head-tail"},"Viewing the contents of a file: ",(0,i.kt)("inlineCode",{parentName:"h2"},"cat"),", ",(0,i.kt)("inlineCode",{parentName:"h2"},"less"),", ",(0,i.kt)("inlineCode",{parentName:"h2"},"head"),", ",(0,i.kt)("inlineCode",{parentName:"h2"},"tail")),(0,i.kt)("p",null,"Obviously you can view the content of a file with an editor like ",(0,i.kt)("inlineCode",{parentName:"p"},"nano"),", but then you're losing\nsome of the advantages of being on the command line."),(0,i.kt)("p",null,"As we saw above, the simplest way to see the contents of a file is with ",(0,i.kt)("inlineCode",{parentName:"p"},"cat"),", which just prints the contents of the\nfile to the screen and then returns you to the command prompt."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"% cat sonnet.txt \n")),(0,i.kt)("p",null,"You should see some Shakespeare, right there in your command-line!"),(0,i.kt)("p",null,"However, if the file you looked at was long, the start of it has probably disappeared off the top of the screen. If you\njust want to see the start of the file, you can use ",(0,i.kt)("inlineCode",{parentName:"p"},"head")," instead:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"% head -n 3 sonnet.txt \n")),(0,i.kt)("p",null,"which prints:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Shall I compare thee to a summer's day?\n Thou art more lovely and more temperate:\n Rough winds do shake the darling buds of May,\n")),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Use ",(0,i.kt)("inlineCode",{parentName:"p"},"man head")," to check what the ",(0,i.kt)("inlineCode",{parentName:"p"},"-n")," option does."))),(0,i.kt)("p",null,"Similarly, you can see the last few lines of the file with ",(0,i.kt)("inlineCode",{parentName:"p"},"tail"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"% tail -n 1 sonnet.txt \n")),(0,i.kt)("p",null,"If the file you're interested in is still getting new stuff added to its end (by another process), you can use ",(0,i.kt)("inlineCode",{parentName:"p"},"tail -f"),"\nto follow new content at the end of the file."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"% tail -f /var/log/dmesg")),(0,i.kt)("p",null,"You'll neet to type ",(0,i.kt)("inlineCode",{parentName:"p"},"ctrl-c")," to stop tailing the file."),(0,i.kt)("p",null,"All of these commands just print out the contents to the screen.  If instead you want to be able to move around inside a\nfile you're looking at, a good choice would be to use ",(0,i.kt)("inlineCode",{parentName:"p"},"less"),"."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"% less sonnet.txt")),(0,i.kt)("p",null,"You can then move around with the cursor keys and PageUp and PageDown. Press ",(0,i.kt)("inlineCode",{parentName:"p"},"q")," to return to the command line."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Using ",(0,i.kt)("inlineCode",{parentName:"p"},"less")," looks very similar to when you typed ",(0,i.kt)("inlineCode",{parentName:"p"},"man ls"),", doesn't it? That's because ",(0,i.kt)("inlineCode",{parentName:"p"},"man")," is using ",(0,i.kt)("inlineCode",{parentName:"p"},"less")," to show you\nthe manual page. Lots of command line tools use other tools to do part of their work. Being able to combine things like\nthis is what makes the command line great."))),(0,i.kt)("p",null,"Why is it called ",(0,i.kt)("inlineCode",{parentName:"p"},"less"),"? It's an improved version of an earlier command called ",(0,i.kt)("inlineCode",{parentName:"p"},"more"),", and less is more.\n(So why was it called ",(0,i.kt)("inlineCode",{parentName:"p"},"more"),"?  I don't know.  Many of the command names are historical, and you just have to learn them.)"),(0,i.kt)("h2",{id:"getting-information-about-a-file"},"Getting information about a file"),(0,i.kt)("p",null,"Finally what if you don't want to view the file, but just get some information about it?"),(0,i.kt)("p",null,"If you want a word or line count of a file, ",(0,i.kt)("inlineCode",{parentName:"p"},"wc")," will tell you the number of lines, words and characters:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"% wc sonnet.txt")),(0,i.kt)("p",null,"Often we want to know just the number of lines:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"% wc -l sonnet.txt")),(0,i.kt)("p",null,"If you want to know the size of a file, or when it was created/edited, or who owns it, ",(0,i.kt)("inlineCode",{parentName:"p"},"ls")," will tell you:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"% ls -lh sonnet.txt\n")),(0,i.kt)("p",null,"(so it's 654 bytes large)."),(0,i.kt)("h2",{id:"next-steps"},"Next steps"),(0,i.kt)("p",null,"Next, learn about ",(0,i.kt)("a",{parentName:"p",href:"/whg-training-resources/bioinformatics/command_line/pipelines"},"pipelining commands"),"."))}c.isMDXComponent=!0}}]);