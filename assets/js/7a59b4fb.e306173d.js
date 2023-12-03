"use strict";(self.webpackChunkwhg_training_resources=self.webpackChunkwhg_training_resources||[]).push([[6097],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=l(n),g=r,h=u["".concat(p,".").concat(g)]||u[g]||m[g]||o;return n?a.createElement(h,s(s({ref:t},c),{},{components:n})):a.createElement(h,s({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=g;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:r,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},1626:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:7},s="Plotting samples against a global reference panel",i={unversionedId:"population_genetics/principal_components_analysis/global_analysis",id:"population_genetics/principal_components_analysis/global_analysis",title:"Plotting samples against a global reference panel",description:"Up to the table of contents / Back to the PC computation step",source:"@site/docs/population_genetics/principal_components_analysis/global_analysis.md",sourceDirName:"population_genetics/principal_components_analysis",slug:"/population_genetics/principal_components_analysis/global_analysis",permalink:"/whg-training-resources/population_genetics/principal_components_analysis/global_analysis",draft:!1,editUrl:"https://github.com/whg-training/whg-training-resources/edit/main/docs/population_genetics/principal_components_analysis/global_analysis.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"sidebar7",previous:{title:"Computing principal components",permalink:"/whg-training-resources/population_genetics/principal_components_analysis/computing_PCs"},next:{title:"An aside on the maths",permalink:"/whg-training-resources/population_genetics/principal_components_analysis/the_maths"}},p={},l=[{value:"Summary",id:"summary",level:2}],c={toc:l},u="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"plotting-samples-against-a-global-reference-panel"},"Plotting samples against a global reference panel"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"Introduction.md"},"Up to the table of contents")," / ",(0,r.kt)("a",{parentName:"p",href:"/whg-training-resources/population_genetics/principal_components_analysis/computing_PCs"},"Back to the PC computation step")),(0,r.kt)("p",null,"A common strategy for identifying samples with unusual ancestry is to plot samples against a global\nreference dataset, such as that produced by the 1000 Genomes project (1000G). A common way to do\nthis is to compute a PCA of the external samples and project the GWAS dataset onto it. In plink,\nthis can be done in plink using the ",(0,r.kt)("inlineCode",{parentName:"p"},"--pca")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"--pca-cluster-names")," options - see the ",(0,r.kt)("a",{parentName:"p",href:"https://www.cog-genomics.org/plink/"},"plink\nwebsite")," for details). For this practical, however, we'll take\na simpler approach and compute a PCA of all the data together."),(0,r.kt)("p",null,"To do this, we've created a merged dataset ",(0,r.kt)("inlineCode",{parentName:"p"},"merged.with.1000G.vcf.gz")," including our GWAS data with the African (AFR), European (EUR) and East Asian (EAS) samples from the 1000G reference panel.  To compute PCs, we use a similar command as before, changing the dataset and exclusions files:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"plink --vcf merged.with.1000G.vcf.gz --extract chr19-clean.prune.in --pca var-wts --out merged.with.1000G\n")),(0,r.kt)("p",null,"As before this creates files names ",(0,r.kt)("inlineCode",{parentName:"p"},"merged.with.1000G.eigenvec"),", etc."),(0,r.kt)("p",null,"Let's load the merged PCs and plot them with coloured ethnicities as before.  It's worth being careful with colours here, so we'll plot points with a particular colour scheme and use different shapes to distinguish the GWAS and reference panel samples:"),(0,r.kt)("p",null,"In R/RStudio:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-R"},'pcs = read.table( "merged.with.1000G.eigenvec" )\ncolnames(pcs)[1:7] = c( "group", "ID", "PC1", "PC2", "PC3", "PC4", "PC5" )\npcs$group = as.character( pcs$group ) # make sure to treat group as strings\n\npalette = c(\n  CAN = "red2", FAN = "green2", JAN = "blue2", RAN = "yellow3",\n  AFR = "grey40", EUR = "grey70", EAS = "purple"\n)\nshapes = c(\n  CAN = 4, FAN = 4, JAN = 4, RAN = 4,\n  AFR = 20, EUR = 20, EAS = 20\n)\n\npcs$colour = palette[pcs$group]\npcs$shape = shapes[pcs$group]\n\npairs( pcs[,3:7], col = pcs$colour, pch = pcs$shape, lower.panel = NULL )\nlegend(\n  0.1, 0.5,\n  col = palette,\n  legend = names(palette),\n  pch = shapes,\n  xpd=NA\n)\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Question"),". Which reference panel group do most of the GWAS dataset samples cluster with?  Are there any that don't?"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Question"),". Use R to identify the samples that seem to cluster in the wrong place.  Do you recognise these samples?  Which reference panel group do they cluster near?  What do you conclude about these samples?"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Question"),". Some of the 1000G samples labelled 'AFR' also cluster nearer to the Europeans than others.  Why is this?"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Hint"),": Population codes can be found in the file ",(0,r.kt)("inlineCode",{parentName:"p"},"resources/1000GP_Phase3.sample"),".  Look up the codes for a couple of samples, and look at the population definitions on the ",(0,r.kt)("a",{parentName:"p",href:"http://www.1000genomes.org/category/frequently-asked-questions/population"},"1000 Genomes website"),"."),(0,r.kt)("h2",{id:"summary"},"Summary"),(0,r.kt)("p",null,"Congratulations!  You have completed a basic principal components analysis.  "),(0,r.kt)("p",null,"These PCs are used elsewhere in the ",(0,r.kt)("a",{parentName:"p",href:"%22/genome_wide_association_studies/genome_wide_association_analysis%22"},"genome-wide association study practical"),"."))}m.isMDXComponent=!0}}]);