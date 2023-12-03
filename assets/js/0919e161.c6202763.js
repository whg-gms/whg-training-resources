"use strict";(self.webpackChunkwhg_training_resources=self.webpackChunkwhg_training_resources||[]).push([[1019],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),f=p(n),m=i,d=f["".concat(l,".").concat(m)]||f[m]||u[m]||a;return n?r.createElement(d,o(o({ref:t},c),{},{components:n})):r.createElement(d,o({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[f]="string"==typeof e?e:i,o[1]=s;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4536:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=n(7462),i=(n(7294),n(3905));const a={sidebar_position:2},o="List contents of an FTP site",s={unversionedId:"bioinformatics/tips_and_tricks/recursive_ftp",id:"bioinformatics/tips_and_tricks/recursive_ftp",title:"List contents of an FTP site",description:"The tool lftp can be used to quickly list contents of an FTP site. lftp calls itself a 'sophisticated file",source:"@site/docs/bioinformatics/tips_and_tricks/recursive_ftp.md",sourceDirName:"bioinformatics/tips_and_tricks",slug:"/bioinformatics/tips_and_tricks/recursive_ftp",permalink:"/whg-training-resources/bioinformatics/tips_and_tricks/recursive_ftp",draft:!1,editUrl:"https://github.com/whg-training/whg-training-resources/edit/main/docs/bioinformatics/tips_and_tricks/recursive_ftp.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"sidebar2",previous:{title:"Tips and tricks",permalink:"/whg-training-resources/bioinformatics/tips_and_tricks/"},next:{title:"Introduction to snakemake",permalink:"/whg-training-resources/bioinformatics/pipelining_with_snakemake/"}},l={},p=[{value:"Example",id:"example",level:2},{value:"Alternatives",id:"alternatives",level:2}],c={toc:p},f="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(f,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"list-contents-of-an-ftp-site"},"List contents of an FTP site"),(0,i.kt)("p",null,"The tool ",(0,i.kt)("inlineCode",{parentName:"p"},"lftp")," can be used to quickly list contents of an FTP site. ",(0,i.kt)("a",{parentName:"p",href:"https://lftp.yar.ru"},"lftp")," calls itself a 'sophisticated file\ntransfer program' and it is! On most platforms, ",(0,i.kt)("inlineCode",{parentName:"p"},"lftp")," can be installed from the ",(0,i.kt)("inlineCode",{parentName:"p"},"conda-forge")," conda channel:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"mamba install -c conda-forge lftp\n")),(0,i.kt)("p",null,"For example: here is how to list all FASTA files on the ",(0,i.kt)("a",{parentName:"p",href:"http://ftp.ensembl.org/pub/"},"ensembl ftp site"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"lftp -c 'open ftp://ftp.ensembl.org/pub/current_fasta; find'\n")),(0,i.kt)("p",null,"You can then redirect the output into a file."),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,"For example here is some BASH code to download all the chromosome-level\n",(0,i.kt)("a",{parentName:"p",href:"/bioinformatics/exploring_gene_annotations_in_bash/"},"GFF files")," from the Ensembl FTP site:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'echo "Getting file list..."\nlftp -c \'open ftp://ftp.ensembl.org/pub/current_gff3; find\' > all_files.txt\ngrep \'.chr.gff3.gz\' all_files.txt > gff3_files.txt\necho "Ok, `cat gff3_files.txt | wc -l` files to download..."\nfor f in `cat gff3_files.txt`; do\n  echo "Downloading ${f}..."\n  curl -O ftp://ftp.ensembl.org/pub/current_gff3/${f}\ndone\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Warning.")," This will take a while and at the time of writing uses up about 2Gb of disk space!"),(0,i.kt)("h2",{id:"alternatives"},"Alternatives"),(0,i.kt)("p",null,"An alternative is to use ",(0,i.kt)("a",{parentName:"p",href:"https://www.ncftp.com"},"ncftp"),". Specifically ",(0,i.kt)("inlineCode",{parentName:"p"},"ncftpls -R")," will recursively list contents of an FTP\nsite.  (However I find it less useful as it prints out directory names and filename seperately)."))}u.isMDXComponent=!0}}]);