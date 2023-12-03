"use strict";(self.webpackChunkwhg_training_resources=self.webpackChunkwhg_training_resources||[]).push([[6282],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=o.createContext({}),l=function(e){var t=o.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=l(e.components);return o.createElement(m.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,m=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=l(n),g=r,u=p["".concat(m,".").concat(g)]||p[g]||h[g]||s;return n?o.createElement(u,a(a({ref:t},c),{},{components:n})):o.createElement(u,a({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,a=new Array(s);a[0]=g;var i={};for(var m in t)hasOwnProperty.call(t,m)&&(i[m]=t[m]);i.originalType=e,i[p]="string"==typeof e?e:r,a[1]=i;for(var l=2;l<s;l++)a[l]=n[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}g.displayName="MDXCreateElement"},2361:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var o=n(7462),r=(n(7294),n(3905));const s={sidebar_position:6},a="Getting chromosome lengths",i={unversionedId:"programming/analysing_genes_across_species/getting_chromosomes",id:"programming/analysing_genes_across_species/getting_chromosomes",title:"Getting chromosome lengths",description:"To answer questions like 'how much of the genome is in genes' we need to know what the length of each genome is.",source:"@site/docs/programming/analysing_genes_across_species/007_getting_chromosomes.md",sourceDirName:"programming/analysing_genes_across_species",slug:"/programming/analysing_genes_across_species/getting_chromosomes",permalink:"/whg-training-resources/programming/analysing_genes_across_species/getting_chromosomes",draft:!1,editUrl:"https://github.com/whg-training/whg-training-resources/edit/main/docs/programming/analysing_genes_across_species/007_getting_chromosomes.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"sidebar5",previous:{title:"Too long, didn't read",permalink:"/whg-training-resources/programming/analysing_genes_across_species/extreme_genes/tldr"},next:{title:"How much of the genome is in genes?",permalink:"/whg-training-resources/programming/analysing_genes_across_species/how_much_in_genes/"}},m={},l=[],c={toc:l},p="wrapper";function h(e){let{components:t,...s}=e;return(0,r.kt)(p,(0,o.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"getting-chromosome-lengths"},"Getting chromosome lengths"),(0,r.kt)("p",null,"To answer questions like 'how much of the genome is in genes' we need to know what the length of each genome is.\nHappily, this data is already in the GFF files - though it's a bit awkward to get at.  In fact:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Some")," of the GFF files have records with ",(0,r.kt)("inlineCode",{parentName:"li"},"type='chromosome'")," in, that reflect this data"),(0,r.kt)("li",{parentName:"ul"},"while others have records with ",(0,r.kt)("inlineCode",{parentName:"li"},"type='region'"),"."),(0,r.kt)("li",{parentName:"ul"},"still others have records with ",(0,r.kt)("inlineCode",{parentName:"li"},"type='supercontig'"),"."),(0,r.kt)("li",{parentName:"ul"},"Some GFF files - like the ones from\n",(0,r.kt)("a",{parentName:"li",href:"https://plasmodb.org/common/downloads/release-65/Pfalciparum3D7/gff/data/"},"PlasmoDB")," - don't have them at all.\n(Luckily there are files from ",(0,r.kt)("a",{parentName:"li",href:"https://ftp.ensemblgenomes.ebi.ac.uk/pub/protists/current/"},"Ensembl protists")," which we\ncan use instead.)")),(0,r.kt)("p",null,"Here is some ",(0,r.kt)("a",{parentName:"p",href:"https://dbplyr.tidyverse.org"},"dbplyr")," code to load these chromosomes."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-r"},"contigs = (\n    db\n    %>% tbl( 'gff' )\n    %>% filter(  type %in% c( 'chromosome', 'region', 'supercontig' ))\n    %>% select( dataset, ID, type, seqid, source, start, end, attributes )\n    %>% collect()\n)\n")),(0,r.kt)("p",null,"As a sanity check let's make sure that this really does capture the ",(0,r.kt)("inlineCode",{parentName:"p"},"seqid")," values for gene records.\nWe'll use ",(0,r.kt)("a",{parentName:"p",href:"/whg-training-resources/programming/programming_with_gene_annotations3/Getting_started_writing_some_code#test-driven-development"},"the trusy ",(0,r.kt)("inlineCode",{parentName:"a"},"stopifnot()"))," for this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"table( genes$dataset, genes$seqid %in% contigs$seqid )\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"                                                     TRUE\n  Acanthochromis_polyacanthus.ASM210954v1.110       24016\n  Asparagus_officinalis.Aspof.V1.57                 24141\n  Bufo_bufo-GCA_905171765.1-2022_05-genes           20900\n  Camelus_dromedarius.CamDro2.110.chr               18896\n  Gallus_gallus.bGalGal1.mat.broiler.GRCg7b.110.chr 16711\n  Homo_sapiens.GRCh38.110.chr                       20046\n  Mus_musculus.GRCm39.110.chr                       21633\n  Pan_troglodytes.Pan_tro_3.0.110.chr               21879\n  Plasmodium_falciparum.ASM276v2.57                  5358\n  Plasmodium_knowlesi.ASM635v1.57                    5102\n  Plasmodium_vivax.ASM241v2.57                       5389\n")),(0,r.kt)("p",null,"Good!"),(0,r.kt)("p",null,"This suggests we can compute the genome lengths."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-r"},'contigs$sequence_length = contigs$end - contigs$start + 1\n\n(\n    contigs\n    %>% group_by( dataset, type )\n    %>% summarise(\n        number = n(),\n        length = sum(sequence_length)\n    )\n    %>% mutate(\n        length_in_mb = sprintf( "%.1fMb", length / 1E6 )\n    )\n)\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"}," dataset                                           type        number     length length_in_mb\n   <chr>                                             <chr>        <int>      <dbl> <chr>       \n 1 Acanthochromis_polyacanthus.ASM210954v1.110       region       30414  991584656 991.6Mb     \n 2 Asparagus_officinalis.Aspof.V1.57                 chromosome      10 1111887942 1111.9Mb    \n 3 Asparagus_officinalis.Aspof.V1.57                 supercontig  11782   75650082 75.7Mb      \n 4 Bufo_bufo-GCA_905171765.1-2022_05-genes           region        1306 5044744194 5044.7Mb    \n 5 Camelus_dromedarius.CamDro2.110.chr               region          37 2052758708 2052.8Mb    \n 6 Gallus_gallus.bGalGal1.mat.broiler.GRCg7b.110.chr region          42 1041139641 1041.1Mb    \n 7 Homo_sapiens.GRCh38.110.chr                       chromosome      25 3088286401 3088.3Mb    \n 8 Mus_musculus.GRCm39.110.chr                       chromosome      22 2723431143 2723.4Mb    \n 9 Pan_troglodytes.Pan_tro_3.0.110.chr               chromosome      26 2967125077 2967.1Mb    \n10 Plasmodium_falciparum.ASM276v2.57                 chromosome      14   23292622 23.3Mb      \n11 Plasmodium_knowlesi.ASM635v1.57                   chromosome      14   23462187 23.5Mb      \n12 Plasmodium_vivax.ASM241v2.57                      chromosome      14   22621071 22.6Mb      \n13 Plasmodium_vivax.ASM241v2.57                      supercontig   2733    4386630 4.4Mb       \n")),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"You might be wondering what 'region', 'chromosome', and 'supercontig' are - if so, so am I!"),(0,r.kt)("p",{parentName:"div"},"Looking up these genomes in ",(0,r.kt)("a",{parentName:"p",href:"https://www.ncbi.nlm.nih.gov/datasets/"},"NCBI Datasets")," sheds some light on this. For example, try looking up the ",(0,r.kt)("a",{parentName:"p",href:"https://www.ncbi.nlm.nih.gov/datasets/genome/GCF_000002415.2/"},(0,r.kt)("em",{parentName:"a"},"Plasmodium vivax")," assemblyy"),".  You should see something like this:"),(0,r.kt)("p",{parentName:"div"},(0,r.kt)("img",{alt:"img",src:n(3381).Z,width:"1648",height:"1192"})),(0,r.kt)("p",{parentName:"div"},"In short the total genome size is 27Mb (check!) but some of this is in 2,747 'scaffolds' that are not chromosomes.  (They appear in this GFF file as 'supercontig'.)  These are, I think, bits of genome that have been assembled but the assemblers don't quite know where they should go.  In principle they might be parts of nuclear chromosomes, parts of the mitochondria or other organelles like the apicoplast, or other bits of DNA that were sequenced but not clear where they should go."),(0,r.kt)("p",{parentName:"div"},"However other genomes, like ",(0,r.kt)("em",{parentName:"p"},"Bufo bufo"),", seem to have only 'region' records even though several of those do seem to represent chromosomes.  It seems that files from the Darwin Tree of Life project, like the Dromedary Camel genome, use 'region' entries.  (That number 37 is not wrong - ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Dromedary#Genetics_and_hybrids"},"camels have 74 diploid chromosomes"),")."),(0,r.kt)("p",{parentName:"div"},"In any case - for our purposes, let's use the 'regions', 'chromosomes', and 'supercontigs' to represent the genome length."))),(0,r.kt)("p",null,"Ok!  Armed with chromosome lengths, we are ready to ask ",(0,r.kt)("a",{parentName:"p",href:"./008_How_much_of_the_genome_is_in_genes.md"},"how much of the genome is in genes?")))}h.isMDXComponent=!0},3381:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/p_vivax_ncbi-2eae0feb0a0c02c72a4e5cb45a76c241.png"}}]);