"use strict";(self.webpackChunkwhg_training_resources=self.webpackChunkwhg_training_resources||[]).push([[8762],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),p=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,g=d["".concat(l,".").concat(m)]||d[m]||u[m]||r;return n?i.createElement(g,o(o({ref:t},c),{},{components:n})):i.createElement(g,o({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<r;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5464:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var i=n(7462),a=(n(7294),n(3905));const r={sidebar_position:1},o="Getting setup",s={unversionedId:"genome_wide_association_studies/genome_wide_association_analysis/getting_setup",id:"genome_wide_association_studies/genome_wide_association_analysis/getting_setup",title:"Getting setup",description:"In this practical we will run command-line programs to perform the analyses, and R to interpret them. If you haven't",source:"@site/docs/genome_wide_association_studies/genome_wide_association_analysis/getting_setup.md",sourceDirName:"genome_wide_association_studies/genome_wide_association_analysis",slug:"/genome_wide_association_studies/genome_wide_association_analysis/getting_setup",permalink:"/whg-training-resources/genome_wide_association_studies/genome_wide_association_analysis/getting_setup",draft:!1,editUrl:"https://github.com/whg-training/whg-training-resources/edit/main/docs/genome_wide_association_studies/genome_wide_association_analysis/getting_setup.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"sidebar8",previous:{title:"Genome-wide association study practical",permalink:"/whg-training-resources/genome_wide_association_studies/genome_wide_association_analysis/"},next:{title:"Plink warm-up",permalink:"/whg-training-resources/genome_wide_association_studies/genome_wide_association_analysis/allele_frequencies"}},l={},p=[{value:"Moving to the right folder",id:"moving-to-the-right-folder",level:2},{value:"Downloading the data",id:"downloading-the-data",level:2},{value:"Downloading plink",id:"downloading-plink",level:2},{value:"Setting up R",id:"setting-up-r",level:2}],c={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"getting-setup"},"Getting setup"),(0,a.kt)("p",null,"In this practical we will run command-line programs to perform the analyses, and R to interpret them. If you haven't\ninstalled these already, visit the ",(0,a.kt)("a",{parentName:"p",href:"/prerequisites"},"prerequisites section")," for a guide."),(0,a.kt)("p",null,"To get set up, you need"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"the datasets from the practical folder."),(0,a.kt)("li",{parentName:"ul"},"the command-line programs we'll use")),(0,a.kt)("h2",{id:"moving-to-the-right-folder"},"Moving to the right folder"),(0,a.kt)("p",null,"Before starting please check your terminal is in the right folder.  A good choice is your home folder:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"cd ~\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"However")," if you are using Ubuntu for Windows, you should instead change to your main Desktop folder (this is so that the\nresults work well with RStudio):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"cd /mnt/c/Users/<your user name>/Desktop/\n")),(0,a.kt)("h2",{id:"downloading-the-data"},"Downloading the data"),(0,a.kt)("p",null,"To get the data, download and extract the tarball from\n",(0,a.kt)("a",{parentName:"p",href:"https://www.well.ox.ac.uk/~gav/projects/whg-training-resources/data/genome_wide_association_studies/genome_wide_association_analysis/"},"this folder"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"curl -O https://www.well.ox.ac.uk/~gav/projects/whg-training-resources/data/genome_wide_association_studies/genome_wide_association_analysis/gwas_practical.tgz\n")),(0,a.kt)("p",null,"This might take a minute or two.  Once the download has completed, extract the tarball and cd into the newly-created directory:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"tar -xzf gwas_practical.tgz\ncd gwas_practical\n")),(0,a.kt)("p",null,"If you explore this directory, you should see there are a number of files and a ",(0,a.kt)("inlineCode",{parentName:"p"},"resources")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"scripts")," folder:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ ls\nchr19-example.pca      chr19-example.vcf.gz  resources  snp-example.samples\nchr19-example.samples  plink_versions        scripts    snp-example.vcf\n")),(0,a.kt)("h2",{id:"downloading-plink"},"Downloading plink"),(0,a.kt)("p",null,"Next let's get the plink program we need.  There are two ways to get this:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"plink_versions/")," folder contains Mac OS and Linux versions of the plink executable. To get that, move the appopriate\nversion into this folder:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"mv plink_versions/plink_linux/plink ./\n")),(0,a.kt)("p",null,"or"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"mv plink_versions/plink_mac/plink ./\n")),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"If you are using Ubuntu for Windows, the appropriate version is the 'Linux 64 bit' version."))),(0,a.kt)("p",null,"Alternatively, you can download the appropriate version ",(0,a.kt)("a",{parentName:"p",href:"https://www.cog-genomics.org/plink/"},"from the plink website"),". Extract\nthe archive and move the ",(0,a.kt)("inlineCode",{parentName:"p"},"plink")," executable into this folder."),(0,a.kt)("p",null,"When all is set up you should now be able to run plink like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"./plink \u2013-version\n")),(0,a.kt)("p",null,"Plink will tell you its version, and when it was last updated.  "),(0,a.kt)("h2",{id:"setting-up-r"},"Setting up R"),(0,a.kt)("p",null,"Make sure your RStudio session is also pointing at the ",(0,a.kt)("inlineCode",{parentName:"p"},"gwas_practical")," folder (use ",(0,a.kt)("inlineCode",{parentName:"p"},"setwd()")," or the ",(0,a.kt)("inlineCode",{parentName:"p"},"Session->Set Working\nDirectory")," menu to do this."))}u.isMDXComponent=!0}}]);