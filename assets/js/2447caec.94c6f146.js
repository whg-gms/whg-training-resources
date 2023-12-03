"use strict";(self.webpackChunkwhg_training_resources=self.webpackChunkwhg_training_resources||[]).push([[5664],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),u=p(a),m=i,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return a?n.createElement(h,s(s({ref:t},c),{},{components:a})):n.createElement(h,s({ref:t},c))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,s=new Array(o);s[0]=m;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[u]="string"==typeof e?e:i,s[1]=r;for(var p=2;p<o;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},4005:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>p});var n=a(7462),i=(a(7294),a(3905));const o={sidebar_position:4},s="Controlling for population structure",r={unversionedId:"genome_wide_association_studies/genome_wide_association_analysis/population_structure",id:"genome_wide_association_studies/genome_wide_association_analysis/population_structure",title:"Controlling for population structure",description:"We have seen how applying appropriate quality control filters to our data eliminated many false positives, but a systematic",source:"@site/docs/genome_wide_association_studies/genome_wide_association_analysis/population_structure.md",sourceDirName:"genome_wide_association_studies/genome_wide_association_analysis",slug:"/genome_wide_association_studies/genome_wide_association_analysis/population_structure",permalink:"/whg-training-resources/genome_wide_association_studies/genome_wide_association_analysis/population_structure",draft:!1,editUrl:"https://github.com/whg-training/whg-training-resources/edit/main/docs/genome_wide_association_studies/genome_wide_association_analysis/population_structure.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"sidebar8",previous:{title:"Association Practical",permalink:"/whg-training-resources/genome_wide_association_studies/genome_wide_association_analysis/gwas_association"},next:{title:"Making a regional association plot",permalink:"/whg-training-resources/genome_wide_association_studies/genome_wide_association_analysis/hitplots"}},l={},p=[{value:"Job done?",id:"job-done",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...a}=e;return(0,i.kt)(u,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"controlling-for-population-structure"},"Controlling for population structure"),(0,i.kt)("p",null,"We have seen how applying appropriate quality control filters to our data eliminated many false positives, but a systematic\ninflation remained. The most common source of test statistic inflation is population stratification, as this can act as a\nconfounder. "),(0,i.kt)("p",null,"To try to solve this, let's include a set of ",(0,i.kt)("strong",{parentName:"p"},"principal components")," as covariates in our regression. In causal diagram\nterminology, including the principal components serves to 'control' for population structure, so that the remaining estimate\nof the genotype on the disease might represent a true causal effect."),(0,i.kt)("p",null,"We can use principal component analysis to measure the genetic structure within the dataset, and use these\nestimated components as covariates in the association analysis."),(0,i.kt)("p",null,"The file ",(0,i.kt)("inlineCode",{parentName:"p"},"chr19-example.pca")," contains the principal components for this dataset. "),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If you completed the ",(0,i.kt)("a",{parentName:"p",href:"../population_genetics/principal_components/README.md"},"principal components practical"),", these are\nthe same PCs you computed there.  If not don't worry as we have provided them."))),(0,i.kt)("p",null,"Let's try plotting the PCs now to see what this genome-wide genetic structure of the samples looks like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'# in R\nlibrary( tidyverse )\npcs = read.table( "chr19-example.pca", header = TRUE )\n# The country identifier is stored in the FID column\npcs$population = pcs$FID\n\nprint(\n    ggplot( data = pcs, aes( x = pc1, y = pc2, colour = population ))\n    + geom_point()\n)\n')),(0,i.kt)("p",null,"You should see there is a great deal of population structure - the different population groups definitely have different\nancestral backgrounds."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Try plotting other pairs of principal components as well - say, ",(0,i.kt)("inlineCode",{parentName:"p"},"pc2")," vs. ",(0,i.kt)("inlineCode",{parentName:"p"},"pc3")," and so on.  Do they all show structure?"))),(0,i.kt)("p",null,"To include these PCs as covariates in our association test, we can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"--covar")," option to plink.  Let's try this now:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"./plink \\\n--bfile chr19-clean \\\n--logistic beta \\\n--ci 0.95 \\\n--covar chr19-example.pca \\\n--out pccorrected-test \\\n--keep-allele-order\n")),(0,i.kt)("p",null,"We have now produced an analysis corrected for population structure. Congratulations!"),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The above is starting to look like a production-ready GWAS scan, so we have added a couple of the useful options that we saw\nearlier including:"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"the ",(0,i.kt)("inlineCode",{parentName:"p"},"beta")," option to ",(0,i.kt)("inlineCode",{parentName:"p"},"--logistic"),", which tells plink to output an effet size estimate on the ",(0,i.kt)("strong",{parentName:"p"},"log-odds")," scale (instead of an odds ratio)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"the ",(0,i.kt)("inlineCode",{parentName:"p"},"--ci")," option, which makes plink output a standard error and a confidence interval.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"--keep-allele-order")," option, which prevents plink from 'flipping' the two alleles around. (By default it will output\ntest statistics for the minor, i.e. less common allele.) This is helpful if we compare across studies, because we want\neffect sizes to be relative to the same allele in all studies (but the minor allele might vary between studies)."))),(0,i.kt)("p",{parentName:"div"},"These options are particularly useful if you are using the output in a meta-analysis with other studies."))),(0,i.kt)("p",null,"Now use R to examine these results."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note.")," the output file \u201cpccorrected-test.assoc.logistic\u201d contains information for the SNPs and also all the principal\ncomponents. To repeat the earlier analysis, make sure you extract just the SNP lines (those that have \u201cADD\u201d in the TEST column):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-R"},'# In R:\ndata <- read.table( "pccorrected-test.assoc.logistic", header = T )\ndata <- data[data$TEST == "ADD",]\n')),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Challenge questions")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Repeat our earlier analysis for this gwas - create a manhattan plot, a q-q plot, and a summary of the most-associated variants -\nand answer the following:"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Has stratifying by disease group corrected our inflation? Why? (Hint: re-make the QQ-plot, and examine case frequencies in\neach group).")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Are there any disease associations in this dataset?  Where are they?  (Hint: re-make the manhattan plot.)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"What do the SNP QC statistics look like for any associated SNPs? (For example, the frequency and missingness rates?) Do these\nassociations look plausible to you?")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Can you find out anything about the function of these associated SNPs using online tools such as ",(0,i.kt)("a",{parentName:"p",href:"https://genome.ucsc.edu/cgi-bin/hgGateway"},"UCSC Genome\nBrowser"),". (Note that our data is using GRCh37/hg19 coordinates.). Could they be\nfunctional?")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"What factors explain the differences in association p-values in the different analyses we\u2019ve done?"))))),(0,i.kt)("h2",{id:"job-done"},"Job done?"),(0,i.kt)("p",null,"Not quite! A complete analysis, will zoom in and create association 'hit' or 'locus zoom' plots in each region. To finish the\npractical let's ",(0,i.kt)("a",{parentName:"p",href:"/whg-training-resources/genome_wide_association_studies/genome_wide_association_analysis/hitplots"},"create some hitplots"),"."))}d.isMDXComponent=!0}}]);