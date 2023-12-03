"use strict";(self.webpackChunkwhg_training_resources=self.webpackChunkwhg_training_resources||[]).push([[8507],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=p(n),c=o,u=d["".concat(l,".").concat(c)]||d[c]||h[c]||i;return n?a.createElement(u,r(r({ref:t},m),{},{components:n})):a.createElement(u,r({ref:t},m))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,r[1]=s;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9567:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(7462),o=(n(7294),n(3905));const i={sidebar_position:11},r="Working with data",s={unversionedId:"programming/introduction_to_R/working_with_data",id:"programming/introduction_to_R/working_with_data",title:"Working with data",description:"Now we come to what R is really good at - loading, manipulating, and plotting data.",source:"@site/docs/programming/introduction_to_R/working_with_data.md",sourceDirName:"programming/introduction_to_R",slug:"/programming/introduction_to_R/working_with_data",permalink:"/whg-training-resources/programming/introduction_to_R/working_with_data",draft:!1,editUrl:"https://github.com/whg-training/whg-training-resources/edit/main/docs/programming/introduction_to_R/working_with_data.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11},sidebar:"sidebar5",previous:{title:"Loading libraries",permalink:"/whg-training-resources/programming/introduction_to_R/libaries"},next:{title:"Summary",permalink:"/whg-training-resources/programming/introduction_to_R/summary"}},l={},p=[{value:"Getting the data",id:"getting-the-data",level:2},{value:"Viewing the data",id:"viewing-the-data",level:2},{value:"Plotting the data",id:"plotting-the-data",level:2},{value:"A research question",id:"a-research-question",level:2}],m={toc:p},d="wrapper";function h(e){let{components:t,...i}=e;return(0,o.kt)(d,(0,a.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"working-with-data"},"Working with data"),(0,o.kt)("p",null,"Now we come to what R is really good at - loading, manipulating, and plotting data.\nLet's do that now by downloading and plotting some data on human chromosomes."),(0,o.kt)("h2",{id:"getting-the-data"},"Getting the data"),(0,o.kt)("p",null,"We'll use the data in this file:"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.well.ox.ac.uk/bioinformatics/training/msc_gm/2023/data/GRCh38_sequence_data.tsv"},"GRCh38 sequence report")),(0,o.kt)("p",null,"To get this file, right-click on the link above and choose 'copy link'."),(0,o.kt)("p",null,"You ought to be able now to load the data directly into R using the ",(0,o.kt)("inlineCode",{parentName:"p"},"read_tsv()")," function:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'> X = read_tsv( "<paste your link here inside the quotes>" )\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note.")," depending on your setup, you may need to remove the trailing slash (",(0,o.kt)("inlineCode",{parentName:"p"},"/"),") from the end of the URL to make this\nwork."),(0,o.kt)("p",null,"This data comes from the ",(0,o.kt)("a",{parentName:"p",href:"https://www.ncbi.nlm.nih.gov/datasets/genome/GCF_000001405.26/"},"NCBI page on the GRCh38 human genome\nassembly"),".  "),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The file is in a ",(0,o.kt)("strong",{parentName:"p"},"tab-separated value")," or ",(0,o.kt)("strong",{parentName:"p"},"tsv")," format (that is, the fields on each row are separated\nby tab characters, rather than commas or spaces), which is why we used the ",(0,o.kt)("inlineCode",{parentName:"p"},"read_tsv()")," to load it.  For comma-separated\nor space-separated files, use ",(0,o.kt)("inlineCode",{parentName:"p"},"read_csv()")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"read_table()")," instead."))),(0,o.kt)("p",null,"You could also, if you prefer, download the file first, then load it in.\nDownloading can be done from the web browser, but make sure you know the path to the downloaded file."),(0,o.kt)("p",null,"Another way to download is to use R's ",(0,o.kt)("inlineCode",{parentName:"p"},"download.file()")," function:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'> download.file( "<your link here>", destfile = "GRCh38_sequence_data.tsv" )\n')),(0,o.kt)("p",null,"This downloads to your current directory, so that you can load like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'> X = read_tsv( "GRCh38_sequence_data.tsv" )\n')),(0,o.kt)("h2",{id:"viewing-the-data"},"Viewing the data"),(0,o.kt)("p",null,"We'll only scratch the surface of data manipulation here but here are a few ways to look at this data.\nFirst, you can view the data by printing it:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"> print(X)\n")),(0,o.kt)("p",null,"You should see something like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# A tibble: 455 \xd7 4\n   name     length role               gc_percent\n   <chr>     <dbl> <chr>                   <dbl>\n 1 1     248956422 assembled-molecule       41.5\n 2 2     242193529 assembled-molecule       40  \n 3 3     198295559 assembled-molecule       39.5\n 4 4     190214555 assembled-molecule       38  \n 5 5     181538259 assembled-molecule       39  \n 6 6     170805979 assembled-molecule       39.5\n 7 7     159345973 assembled-molecule       40.5\n 8 8     145138636 assembled-molecule       40  \n 9 9     138394717 assembled-molecule       41  \n10 10    133797422 assembled-molecule       41  \n# \u2139 445 more rows\n# \u2139 Use `print(n = ...)` to see more rows\n")),(0,o.kt)("p",null,"What you are looking at is a ",(0,o.kt)("strong",{parentName:"p"},"data frame"),", an important type of data structure.  (Specifically, this is a ",(0,o.kt)("strong",{parentName:"p"},"tibble"),",\nwhich is the tidyverse flavour of the data frame data structure).  Dataframes have a few distinguishing features:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"It has multiple rows (how many?) and multiple columns (how many?)"),(0,o.kt)("li",{parentName:"ul"},"It has ",(0,o.kt)("strong",{parentName:"li"},"column names")," that help tell you what the columns represent."),(0,o.kt)("li",{parentName:"ul"},"The columns have different types - here they are ",(0,o.kt)("inlineCode",{parentName:"li"},"<chr>")," meaning 'character' or string data, ",(0,o.kt)("inlineCode",{parentName:"li"},"<dbl>")," meaning\nnumerical.  With tidyverse, these types are printed straight after the column names.")),(0,o.kt)("p",null,"In short - data frames are a flexible and useful format for scientific data."),(0,o.kt)("p",null,"As above, you can probably only see a few rows here.  To see them all, follow the suggestion and use\n",(0,o.kt)("inlineCode",{parentName:"p"},"print()")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"> print( X, n = 1000 )\n")),(0,o.kt)("p",null,"If you scroll back through these results you'll see the rows have different ",(0,o.kt)("inlineCode",{parentName:"p"},"roles"),", and different ",(0,o.kt)("inlineCode",{parentName:"p"},"lengths"),"."),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Some of the rows say ",(0,o.kt)("inlineCode",{parentName:"p"},"NA")," in the ",(0,o.kt)("inlineCode",{parentName:"p"},"gc_percent")," column.  This is R's way of saying 'missing data'.\nFor some reason, GC percent has not been provided for these contigs."))),(0,o.kt)("p",null,"Another way to view the data is ",(0,o.kt)("inlineCode",{parentName:"p"},"View()"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"> View(X)\n")),(0,o.kt)("p",null,"In Rstudio, this opens a scrollable-aroundable table in the top-left pane."),(0,o.kt)("h2",{id:"plotting-the-data"},"Plotting the data"),(0,o.kt)("p",null,"The file represents all the contigs (including the main chromosomes) in the human reference assembly. One of those\ncolumns is the ",(0,o.kt)("strong",{parentName:"p"},"contig length"),", while another is the ",(0,o.kt)("strong",{parentName:"p"},"percentage GC content"),".  (That is, the proportion of DNA bases that are G's or C's.)  Wouldn't it be good to plot these against each other?"),(0,o.kt)("p",null,"To do this you need to know how to get the values out of one column.  You do these using the ",(0,o.kt)("inlineCode",{parentName:"p"},"$")," symbol, for example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"> X$length\n")),(0,o.kt)("p",null,"or, equivalently, use double square brackets:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"> X[['length']]\n")),(0,o.kt)("p",null,"(This second way is often better if the name of the columns contains spaces.)"),(0,o.kt)("p",null,"Whichever way you do it you should see a vector of chromosome lengths, like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  [1] 248956422 242193529 198295559 190214555 181538259 170805979 159345973 145138636 138394717\n [10] 133797422 135086622 133275309 114364328 107043718 101991189  90338345  83257441  80373285\n(etc.)\n")),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Challenge")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Use the ",(0,o.kt)("inlineCode",{parentName:"p"},"plot()")," function to plot GC content against chromosome length."),(0,o.kt)("p",{parentName:"div"},(0,o.kt)("strong",{parentName:"p"},"Hint")," The plot examples on ",(0,o.kt)("a",{parentName:"p",href:"/whg-training-resources/programming/introduction_to_R/functions#many-values-make-light-work"},"this page")," may help."))),(0,o.kt)("p",null,"If you managed to plot using ",(0,o.kt)("inlineCode",{parentName:"p"},"plot()"),", congratulations!  It's good to use ",(0,o.kt)("inlineCode",{parentName:"p"},"plot()"),", but here is another way to plot\nusing the tidyverse ",(0,o.kt)("a",{parentName:"p",href:"https://ggplot2.tidyverse.org"},"ggplot2 package"),".  For now we will just demonstrate this, and will\ncome back to how it works later in the term:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'> p = (\n    ggplot( data = X )\n    + geom_point( aes( x = length, y = gc_percent ))\n    + xlab( "Chromosome length" )\n    + ylab( "% GC content" )\n)\n> print(p)\n')),(0,o.kt)("p",null,"You should see a plot something like this:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"img",src:n(5062).Z,width:"600",height:"400"})),(0,o.kt)("p",null,"Hey, that's interesting!  It looks very much like shorter chromosomes tend to have higher GC content."),(0,o.kt)("p",null,"If you like this plot, you can use the 'export' button in RStudio to save it to a file.  Or you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"ggsave()")," function:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'> ggsave( p, file = "gc_by_length.pdf" )\n')),(0,o.kt)("p",null,"##\xa0Subsetting and sorting data"),(0,o.kt)("p",null,"If you ",(0,o.kt)("inlineCode",{parentName:"p"},"View()")," the data again, you'll see that the ",(0,o.kt)("inlineCode",{parentName:"p"},"gc_percent")," value is missing for everything except the main\n'assembled molecules' - that is the main human chromosomes.  (It is also there for one other contig, right at the bottom\nof the file - what is that?)"),(0,o.kt)("p",null,"What happens to the other ones in the plot?  The answer is that they won't be plotted - they've been silently dropped\ndue to the missing value.  "),(0,o.kt)("p",null,"How could we just pull out those rows, and perhaps order them by GC content?  Again, here we are just going to very\nquickly show how to do this here using tidyverse-style filtering, and we will come back to this in other tutorials."),(0,o.kt)("p",null,"The tricks here are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"the ",(0,o.kt)("inlineCode",{parentName:"li"},"is.na()")," function will tell us if a value is missing.  And ",(0,o.kt)("inlineCode",{parentName:"li"},"!is.na()")," will tell us if they are ",(0,o.kt)("strong",{parentName:"li"},"not")," missing.   (",(0,o.kt)("inlineCode",{parentName:"li"},"!")," indicates a logical 'NOT' operation, that is, it inverts the condition.)"),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"filter()")," function can be used to filter a data frame.")),(0,o.kt)("p",null,"Putting this together we can write:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"> filter( X, !is.na( gc_percent ))\n")),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Question")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"How many rows does this result have?  Use ",(0,o.kt)("inlineCode",{parentName:"p"},"View()")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"print()")," to see the whole data frame."))),(0,o.kt)("p",null,"If we wanted to sort the result, that's also possible.  Let's use the tidyverse ",(0,o.kt)("inlineCode",{parentName:"p"},"arrange()")," function to do it.\nFirst let's capture the above as a new variable ",(0,o.kt)("inlineCode",{parentName:"p"},"Y"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"> Y = filter( X, !is.na( gc_percent ))\n")),(0,o.kt)("p",null,"and now sort:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"> arrange( Y, gc_percent )\n")),(0,o.kt)("p",null,"(You can read this as 'arrange the dataframe ",(0,o.kt)("inlineCode",{parentName:"p"},"Y")," by the ",(0,o.kt)("inlineCode",{parentName:"p"},"gc_percent")," column')."),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Question")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Which chromosome has the highest GC percent?  Which the lowest?"))),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Question")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Use ",(0,o.kt)("inlineCode",{parentName:"p"},"arrange()")," to sort by length instead.  What is the GC percentage of the longest chromosome?  What about the\nmitchondrion?"))),(0,o.kt)("p",null,"##\xa0Finding specific rows"),(0,o.kt)("p",null,"What if we just wanted to pull out data from specific rows?  Say those with > 42.5% GC content?"),(0,o.kt)("p",null,"This is easy as well by filtering on a condition:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"> filter( X, gc_percent > 42.5 )\n")),(0,o.kt)("p",null,"It's some of the chromosomes from 16 onwards, as well as the mitochondrion."),(0,o.kt)("p",null,"What about just those with that are also longer than a megabase?"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"> filter( X, gc_percent > 42.5 & length > 1E6 )\n")),(0,o.kt)("p",null,"Here we've used the ",(0,o.kt)("inlineCode",{parentName:"p"},"&")," operator, which combines logical expressions into compound ones (via a logical AND)."),(0,o.kt)("h2",{id:"a-research-question"},"A research question"),(0,o.kt)("p",null,"So we found that, in the human genome, GC content is correlated with chromosome length!  That's pretty interesting.\nHere's a mini research project that you could try if you're interested."),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Research project")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"You could try to find out if this relationship holds for the genomes of other species. "),(0,o.kt)("p",{parentName:"div"},"For example, does it hold for ","[",(0,o.kt)("em",{parentName:"p"},"mus musculus"),"]","(",(0,o.kt)("a",{parentName:"p",href:"https://www.ncbi.nlm.nih."},"https://www.ncbi.nlm.nih.")," gov/datasets/genome/GCF_000001635.27/) (house\nmice)? What about for ",(0,o.kt)("a",{parentName:"p",href:"https://www.ncbi.nlm.nih.gov/datasets/genome/GCF_002263795.3/"},(0,o.kt)("em",{parentName:"a"},"bos taurus"))," (cattle)? Or\n",(0,o.kt)("a",{parentName:"p",href:"https://www.ncbi.nlm.nih.gov/datasets/genome/GCF_028858775.1/"},"chimpanzees"),"?  Or for ",(0,o.kt)("a",{parentName:"p",href:"https://www.ncbi.nlm.nih.gov/datasets/genome/"},"other genomes\n")," of your choice?"),(0,o.kt)("p",{parentName:"div"},(0,o.kt)("strong",{parentName:"p"},"Hint"),". These genome assembly pages have a downloadable list of chromosome sizes and other data in the table, near the\nbottom under 'Chromosomes'.   The file you download is a bit different to the one we've used above, as it has more\ncolumns and they have different names.  But you can still load it with ",(0,o.kt)("inlineCode",{parentName:"p"},"read_tsv()"),"."),(0,o.kt)("p",{parentName:"div"},"If you find it hard to view all the columns at once, try listing the columns names:"),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre"},"> colnames(X)\n")),(0,o.kt)("p",{parentName:"div"},"and you can also subset columns by giving it a vector of columns names, something like:"),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre"},'> X[, c( "Chromosome name", "Seq length", "Role", "GC Percent" )]\n')),(0,o.kt)("p",{parentName:"div"},"Good luck!  This is the end of this tutorial."))))}h.isMDXComponent=!0},5062:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/gc_versus_length-7578dde8d5c1c3dcffbc1547ea83349a.png"}}]);