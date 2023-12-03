"use strict";(self.webpackChunkwhg_training_resources=self.webpackChunkwhg_training_resources||[]).push([[8274],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>d});var n=a(7294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,i=e.originalType,l=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=p(a),u=s,d=c["".concat(l,".").concat(u)]||c[u]||h[u]||i;return a?n.createElement(d,r(r({ref:t},m),{},{components:a})):n.createElement(d,r({ref:t},m))}));function d(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=a.length,r=new Array(i);r[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[c]="string"==typeof e?e:s,r[1]=o;for(var p=2;p<i;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},7589:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=a(7462),s=(a(7294),a(3905));const i={sidebar_position:3},r="Step 1: What's in the fastq files?",o={unversionedId:"sequence_data_analysis/introduction_to_next_generation_sequencing_data_analysis/Inspecting_the_fastqs",id:"sequence_data_analysis/introduction_to_next_generation_sequencing_data_analysis/Inspecting_the_fastqs",title:"Step 1: What's in the fastq files?",description:"Using UNIX to inspect the fastqs",source:"@site/docs/sequence_data_analysis/introduction_to_next_generation_sequencing_data_analysis/Inspecting_the_fastqs.md",sourceDirName:"sequence_data_analysis/introduction_to_next_generation_sequencing_data_analysis",slug:"/sequence_data_analysis/introduction_to_next_generation_sequencing_data_analysis/Inspecting_the_fastqs",permalink:"/whg-training-resources/sequence_data_analysis/introduction_to_next_generation_sequencing_data_analysis/Inspecting_the_fastqs",draft:!1,editUrl:"https://github.com/whg-training/whg-training-resources/edit/main/docs/sequence_data_analysis/introduction_to_next_generation_sequencing_data_analysis/Inspecting_the_fastqs.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"sidebar9",previous:{title:"Practical outline",permalink:"/whg-training-resources/sequence_data_analysis/introduction_to_next_generation_sequencing_data_analysis/Pipeline_outline"},next:{title:"Step 2: Inspecting sequence data quality",permalink:"/whg-training-resources/sequence_data_analysis/introduction_to_next_generation_sequencing_data_analysis/Quality_control"}},l={},p=[{value:"Using UNIX to inspect the fastqs",id:"using-unix-to-inspect-the-fastqs",level:3},{value:"Warmup questions",id:"warmup-questions",level:3},{value:"Questions hints",id:"questions-hints",level:4},{value:"More details on the FASTQ format",id:"more-details-on-the-fastq-format",level:2},{value:"Structure",id:"structure",level:3},{value:"The read header",id:"the-read-header",level:3},{value:"The read sequence",id:"the-read-sequence",level:3},{value:"The base qualities",id:"the-base-qualities",level:4},{value:"Next steps",id:"next-steps",level:2}],m={toc:p},c="wrapper";function h(e){let{components:t,...a}=e;return(0,s.kt)(c,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"step-1-whats-in-the-fastq-files"},"Step 1: What's in the fastq files?"),(0,s.kt)("h3",{id:"using-unix-to-inspect-the-fastqs"},"Using UNIX to inspect the fastqs"),(0,s.kt)("p",null,"The simplest thing to do is look at the data in the terminal. The command ",(0,s.kt)("inlineCode",{parentName:"p"},"less")," will do this for\nus - actually we'll use ",(0,s.kt)("inlineCode",{parentName:"p"},"zless")," because the data is compressed).  Try it now:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"zless -S malaria/QG0033-C_Illumina-HiSeq_read1.fastq.gz\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Note"),". You ought to be able to copy/paste the above into your terminal, or else type it\ndirectly. (Use ","<","tab",">"," to auto-complete filenames.) The ",(0,s.kt)("inlineCode",{parentName:"p"},"-S")," option tells ",(0,s.kt)("inlineCode",{parentName:"p"},"zless")," to stretch\nlong lines off to the right of the screen. You can navigate using the arrow keys. You can also quit\nany time by pressing ",(0,s.kt)("inlineCode",{parentName:"p"},"q"),"."),(0,s.kt)("p",null,"Look at the structure of the fastq file. ",(0,s.kt)("strong",{parentName:"p"},"Each read occupies four lines in the file"),".  For example the\nfirst read in the above file looks like:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"@ERR377582.7615542 HS23_10792:2:2307:6524:31920#15/1\nAAAAATCCATTTATATCTTTTATGGTTAGTATTATTTATACCT...\n+\nB@DECEFEEGFEEHFGGEFFFFFEFFEEFEGHHGGGFFFAEFF...\n...\n")),(0,s.kt)("p",null,"In the above:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"The first line is a header line that identifies the read."),(0,s.kt)("li",{parentName:"ul"},"The second line is the read itself"),(0,s.kt)("li",{parentName:"ul"},"the third line is just a ",(0,s.kt)("inlineCode",{parentName:"li"},"+")),(0,s.kt)("li",{parentName:"ul"},'the fourth line contains base qualities in "PHRED" encoding.')),(0,s.kt)("p",null,"(More details on what this all means are given below, but this is the basic idea.)"),(0,s.kt)("h3",{id:"warmup-questions"},"Warmup questions"),(0,s.kt)("p",null,"Here are some basic questions to ask about the FASTQ files.  Can you answer them? (Fear not - hints are below):"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Question 1")," How does the header differ between the ",(0,s.kt)("em",{parentName:"li"},"first read in the read1 file")," and the\n",(0,s.kt)("em",{parentName:"li"},"first read in the read2 file"),"?"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Question 2"),": how many reads are in the file?"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Question 3"),": how long are the reads?")),(0,s.kt)("p",null,"The answers to Questions 2-3 should let you calculate an important quantity:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Question 4"),": if the ",(0,s.kt)("em",{parentName:"li"},"P.falciparum")," genome is about 23 Mb long, what sequencing depth do you expect to get?")),(0,s.kt)("h4",{id:"questions-hints"},"Questions hints"),(0,s.kt)("p",null,"There are several ways to answer these questions, but the quickest and easiest involve using basic\nUNIX command line tools - notably ",(0,s.kt)("inlineCode",{parentName:"p"},"zcat")," (which decompressed the file), ",(0,s.kt)("inlineCode",{parentName:"p"},"wc"),", which counts lines or\ncharacters in its input, and ",(0,s.kt)("inlineCode",{parentName:"p"},"head")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"tail")," which isolate the top or bottom lines. Here we go:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"To look at the header of the first read you can use ",(0,s.kt)("inlineCode",{parentName:"li"},"head")," (we also need to decompress the file using ",(0,s.kt)("inlineCode",{parentName:"li"},"zcat"),").  So:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"zcat malaria/QG0033-C_Illumina-HiSeq_read1.fastq.gz | head -n 1\nzcat malaria/QG0033-C_Illumina-HiSeq_read2.fastq.gz | head -n 1\n")),(0,s.kt)("p",null,"Spot the difference?"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"To count the number of reads you could do:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"zcat malaria/QG0033-C_Illumina-HiSeq_read1.fastq.gz | wc -l\n")),(0,s.kt)("p",null,"This might take a minute or so to run - it is decompressing the whole file of course. "),(0,s.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Note")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"The number output is the number of lines in the file - so what is the number of reads?"))),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"To count the read length you could inspect the first read - which is on the 2nd line of the file:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"zcat malaria/QG0033-C_Illumina-HiSeq_read1.fastq.gz | head -n 2 | tail -n 1 | wc -c\n")),(0,s.kt)("p",null,"The number output is the number of characters in the second line of the file, i.e. the read length."),(0,s.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Note")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"If you don't yet have facility with these types of command - you need the ",(0,s.kt)("a",{parentName:"p",href:"/whg-training-resources/bioinformatics/command_line/"},"introduction to the command-line tutorial"),"."),(0,s.kt)("p",{parentName:"div"},"However, don't worry because we'll move to using more sophisticated graphical packages in the next step."))),(0,s.kt)("p",null,"When you're ready to move on, ",(0,s.kt)("a",{parentName:"p",href:"/whg-training-resources/sequence_data_analysis/introduction_to_next_generation_sequencing_data_analysis/Quality_control"},"get started inspecting sequence data quality"),"."),(0,s.kt)("h2",{id:"more-details-on-the-fastq-format"},"More details on the FASTQ format"),(0,s.kt)("h3",{id:"structure"},"Structure"),(0,s.kt)("p",null,"As described above, each FASTQ record spans four lines: the ",(0,s.kt)("strong",{parentName:"p"},"header"),", the ",(0,s.kt)("strong",{parentName:"p"},"read sequence"),", a\n",(0,s.kt)("strong",{parentName:"p"},"separator"),", and the encoded ",(0,s.kt)("strong",{parentName:"p"},"base qualities"),"."),(0,s.kt)("h3",{id:"the-read-header"},"The read header"),(0,s.kt)("p",null,"The header row typically contains a whole bunch of information.  For example:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"@ERR377582.7615542 HS23_10792:2:2307:6524:31920#15/1\n")),(0,s.kt)("p",null,"This tells us the sample ID (",(0,s.kt)("inlineCode",{parentName:"p"},"ERR377582"),") and the read identifier (",(0,s.kt)("inlineCode",{parentName:"p"},"7615542"),"). And this is\nfollowed by information identifying the instrument that generated the reads (",(0,s.kt)("inlineCode",{parentName:"p"},"HS23_10792"),"), the\nflowcell lane and tile number in the lane (",(0,s.kt)("inlineCode",{parentName:"p"},"2:2307"),"), the coordinates of the\n",(0,s.kt)("a",{parentName:"p",href:"https://www.broadinstitute.org/files/shared/illuminavids/clusterGenSlides.pdf"},"cluster")," within the\ntile (",(0,s.kt)("inlineCode",{parentName:"p"},"6524"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"31920"),"), a number identifying the index of the sample within a multiplexed set of\nsamples (i.e. all run at the same time; ",(0,s.kt)("inlineCode",{parentName:"p"},"#15"),"). And finally it identifies whether it's read 1 or 2\n(",(0,s.kt)("inlineCode",{parentName:"p"},"/1")," or ",(0,s.kt)("inlineCode",{parentName:"p"},"/2"),")."),(0,s.kt)("p",null,"(If you look in the second file in the pair, you should see exactly the same IDs in the same order,\nexcept that the end ",(0,s.kt)("inlineCode",{parentName:"p"},"/2")," will be present indicating the second read.)"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Note.")," The format of this information is not standard across platforms, and it changes depending\non your data provider. Some other examples can be found ",(0,s.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/FASTQ_format#Illumina_sequence_identifiers"},"on\nwikipedia")," or on the\n",(0,s.kt)("a",{parentName:"p",href:"https://gatk.broadinstitute.org/hc/en-us/articles/360035890671-Read-groups"},"GATK read groups page"),"."),(0,s.kt)("h3",{id:"the-read-sequence"},"The read sequence"),(0,s.kt)("p",null,"The second row of each record contains the read bases themselves:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"AAAAATCCATTTATATCTTTTATGGTTAGTATTATTTATACCT...\n")),(0,s.kt)("p",null,"These are the DNA bases as called by the sequencer, in the order they were sequenced.  Simple!"),(0,s.kt)("p",null,"Sounds obvious but the length of this line shows you the ",(0,s.kt)("em",{parentName:"p"},"read length"),".  So you can compute the read length by:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"zcat file.fastq.gz | head -n 2 | tail -n 1 | wc -c\n")),(0,s.kt)("p",null,"The number output is the number of characters in the line, that is, the read length."),(0,s.kt)("h4",{id:"the-base-qualities"},"The base qualities"),(0,s.kt)("p",null,"For each of the above bases, the sequencer also emits an estimate of the ",(0,s.kt)("em",{parentName:"p"},"base quality"),". These look\na bit confusing at first:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"B@DECEFEEGFEEHFGGEFFFFFEFFEEFEGHHGGGFFFAEFFFGGEFFH...\n")),(0,s.kt)("p",null,"The computation goes:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"start with an estimate ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"x")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"x")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"x")))))," of the ",(0,s.kt)("em",{parentName:"p"},"base error"),", that is, the probability that the base is incorrectly called.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"transform it to PHRED scale (that is, take ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mo",{parentName:"mrow"},"\u2212"),(0,s.kt)("mn",{parentName:"mrow"},"10"),(0,s.kt)("mo",{parentName:"mrow"},"\u2217"),(0,s.kt)("mi",{parentName:"mrow"},"l"),(0,s.kt)("mi",{parentName:"mrow"},"o"),(0,s.kt)("msub",{parentName:"mrow"},(0,s.kt)("mi",{parentName:"msub"},"g"),(0,s.kt)("mn",{parentName:"msub"},"10")),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mi",{parentName:"mrow"},"x"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"-10 * log_{10} (x)")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.7278em",verticalAlign:"-0.0833em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"\u2212"),(0,s.kt)("span",{parentName:"span",className:"mord"},"10"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"\u2217"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.01968em"}},"l"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"o"),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"g"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3011em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"-0.0359em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"10"))))),(0,s.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,s.kt)("span",{parentName:"span"})))))),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")"))))),"). In principle this brings it\ninto the range from zero (very likely to be an error) to infinity (no chance at all of being an\nerror). However, in practice it generally maxes out at 41 (except for PacBio Hifi which goes up to ~100).")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Finally add 33 and take the corresponding ",(0,s.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/ASCII"},"ASCII character"),"."))),(0,s.kt)("p",null,"The point of this is that ASCII characters from 33 onwards are visible / printable, so this\ngenerates a sequence of characters that encode the estimated quality of each base. (",(0,s.kt)("strong",{parentName:"p"},"Note.")," There\nis also a 'PHRED64' encoding which adds 64 instead. It's generally only used on older sequencers\nand you aren't likely to run across it for new data.)"),(0,s.kt)("p",null,"It is important to realise that these qualities are only the values ",(0,s.kt)("em",{parentName:"p"},"estimated")," by the sequencer.\nThey are generally ",(0,s.kt)("a",{parentName:"p",href:"https://lh3.github.io/2017/07/24/on-nonvaseq-base-quality"},"pretty good")," but can\nbe ",(0,s.kt)("a",{parentName:"p",href:"https://gatk.broadinstitute.org/hc/en-us/articles/360035890531-Base-Quality-Score-Recalibration-BQSR-"},"improved by re-estimation")," (but that's beyond the scope of this tutorial.)"),(0,s.kt)("h2",{id:"next-steps"},"Next steps"),(0,s.kt)("p",null,"When you're ready to move on, ",(0,s.kt)("a",{parentName:"p",href:"/whg-training-resources/sequence_data_analysis/introduction_to_next_generation_sequencing_data_analysis/Pipeline_outline#the-practical-in-a-nutshell"},"continue the practical")," (go on to step 2)."))}h.isMDXComponent=!0}}]);