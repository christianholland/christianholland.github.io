(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,a,t){e.exports=t.p+"static/media/profile.a298c9d6.jpg"},17:function(e,a,t){e.exports=t(28)},22:function(e,a,t){},28:function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),r=t(15),s=t.n(r),l=(t(22),t(2)),c=t(3),o=t(5),m=t(4),u=t(6),d=t(16),h=t.n(d),b=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).sidebarData=e.sidebarData,t}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return i.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary fixed-top",id:"sideNav"},i.a.createElement("a",{className:"navbar-brand js-scroll-trigger",href:"#page-top"},i.a.createElement("span",{className:"d-block d-lg-none"},this.sidebarData.firstName," ",this.sidebarData.lastName),i.a.createElement("span",{className:"d-none d-lg-block"},i.a.createElement("img",{className:"img-fluid img-profile rounded-circle mx-auto mb-2",src:h.a,alt:""}))),i.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},i.a.createElement("span",{className:"navbar-toggler-icon"})),i.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},i.a.createElement("ul",{className:"navbar-nav"},i.a.createElement("li",{className:"nav-item"},i.a.createElement("a",{className:"nav-link js-scroll-trigger",href:"#about"},"About")),i.a.createElement("li",{className:"nav-item"},i.a.createElement("a",{className:"nav-link js-scroll-trigger",href:"#experience"},"Experience")),i.a.createElement("li",{className:"nav-item"},i.a.createElement("a",{className:"nav-link js-scroll-trigger",href:"#education"},"Education")),i.a.createElement("li",{className:"nav-item"},i.a.createElement("a",{className:"nav-link js-scroll-trigger",href:"#skills"},"Skills")),i.a.createElement("li",{className:"nav-item"},i.a.createElement("a",{className:"nav-link js-scroll-trigger",href:"#interests"},"Interests")),i.a.createElement("li",{className:"nav-item"},i.a.createElement("a",{className:"nav-link js-scroll-trigger",href:"#publications"},"Publications")))))}}]),a}(n.Component),p=t(7),g=t(11),f=t(9),E=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).landingData=e.landingData,t}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return i.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"about"},i.a.createElement("div",{className:"w-100"},i.a.createElement("h1",{className:"mb-0"},this.landingData.firstName,i.a.createElement("span",{className:"text-primary"},this.landingData.lastName)),i.a.createElement("div",{className:"subheading mb-5"},this.landingData.phoneNumber," \xb7",i.a.createElement("a",{href:"mailto:cholland2408@gmail.com"},this.landingData.email)),i.a.createElement("p",{className:"lead mb-5"},this.landingData.bio),i.a.createElement("div",{className:"social-icons"},i.a.createElement("a",{href:this.landingData.linkedin},i.a.createElement(p.a,{icon:g.b})),i.a.createElement("a",{href:this.landingData.github},i.a.createElement(p.a,{icon:g.a})),i.a.createElement("a",{href:this.landingData.twitter},i.a.createElement(p.a,{icon:g.c})),i.a.createElement("a",{href:this.landingData.university},i.a.createElement(p.a,{icon:f.c})))))}}]),a}(n.Component),v=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).experience=e.experience,t}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return i.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex justify-content-center",id:"experience"},i.a.createElement("div",{className:"w-100"},i.a.createElement("h2",{className:"mb-5"},"Experience"),this.experience.map(function(e,a){return i.a.createElement("div",{key:a,className:"resume-item d-flex flex-column flex-md-row justify-content-between mb-5"},i.a.createElement("div",{className:"resume-content"},i.a.createElement("h3",{className:"mb-0"},e.position),i.a.createElement("div",{className:"subheading mb-3"},e.organization),i.a.createElement("p",null,e.aboutWork)),i.a.createElement("div",{className:"resume-date text-md-right"},i.a.createElement("span",{className:"text-primary"},e.fromDate," - ",e.toDate)))})))}}]),a}(n.Component),y=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).education=e.education,t}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return i.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"education"},i.a.createElement("div",{className:"w-100"},i.a.createElement("h2",{className:"mb-5"},"Education"),this.education.map(function(e,a){return i.a.createElement("div",{key:a,className:"resume-item d-flex flex-column flex-md-row justify-content-between mb-5"},i.a.createElement("div",{className:"resume-content"},i.a.createElement("h3",{className:"mb-0"},e.university),i.a.createElement("div",{className:"subheading mb-3"},e.degree),i.a.createElement("p",null,e.subject)),i.a.createElement("div",{className:"resume-date text-md-right"},i.a.createElement("span",{className:"text-primary"},e.fromDate," - ",e.toDate)))})))}}]),a}(n.Component),N=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).skills=e.skills,t}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return i.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"skills"},i.a.createElement("div",{className:"w-100"},i.a.createElement("h2",{className:"mb-5"},"Skills"),i.a.createElement("div",{className:"subheading mb-3"},"Programming Languages & Tools"),i.a.createElement("div",{className:"row"},this.skills.map(function(e,a){return i.a.createElement("div",{key:a,className:"col-6"},i.a.createElement("p",{className:"list-item"},i.a.createElement(p.a,{icon:f.a,color:"green"}),i.a.createElement("span",{className:"ml-3"},e.name)))}))))}}]),a}(n.Component),k=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).interests=e.interests,t}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return i.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"interests"},i.a.createElement("div",{className:"w-100"},i.a.createElement("h2",{className:"mb-5"},"Interests"),i.a.createElement("p",null,this.interests.paragraphOne),i.a.createElement("p",{className:"mb-0"},this.interests.paragraphTwo)))}}]),a}(n.Component),j=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).publications=e.publications,t}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return i.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"publications"},i.a.createElement("div",{className:"w-100"},i.a.createElement("h2",{className:"mb-5"},"Publications"),i.a.createElement("ul",{className:"fa-ul mb-0"},i.a.createElement("p",null," A regularily updated list of publications and citations is available on my ",i.a.createElement("a",{href:"https://scholar.google.com/citations?user=h_y2uTwAAAAJ&hl=de"},"Google Scholar profile"),"."),this.publications.map(function(e,a){return i.a.createElement("li",{key:a},i.a.createElement(p.a,{icon:f.b,color:"#9c9e9f"}),i.a.createElement("span",{className:"ml-2"}," ",e.citation," "))}))))}}]),a}(n.Component),w=t(8),O=t(13),D=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).state={landingData:w.landing,experience:w.experience,education:w.education,skills:w.skills,interests:w.interests,publications:w.publications},O.a.initialize("UA-158818625-1"),O.a.pageview(window.location.pathname),t}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(b,{sidebarData:this.state.landingData}),i.a.createElement("div",{className:"container-fluid p-0"},i.a.createElement(E,{landingData:this.state.landingData}),i.a.createElement("hr",{className:"m-0"}),i.a.createElement(v,{experience:this.state.experience}),i.a.createElement("hr",{className:"m-0"}),i.a.createElement(y,{education:this.state.education}),i.a.createElement("hr",{className:"m-0"}),i.a.createElement(N,{skills:this.state.skills}),i.a.createElement("hr",{className:"m-0"}),i.a.createElement(k,{interests:this.state.interests}),i.a.createElement("hr",{className:"m-0"}),i.a.createElement(j,{publications:this.state.publications})))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e){e.exports={landing:{firstName:"Christian H.",lastName:"Holland",phoneNumber:"+49-17643449810",bio:"I am a PhD student at the Saezlab at Heidelberg University and part of the BMBF funded reseach network LiSyM (Liver System Medicine). My work focuses on the development and application of functional analysis tools on transcriptomic data, aiming to acquire mechanistic insight into chronic liver diseases. While I was initially a biologist by training I see myself nowadays as a data scientist tackling biomedical challenges. For most of my projects I rely on the statistical language R accompanied with the great packages from tidyverse. To make my reseach results easily accessible for the broad scientific community I enjoy developing intuitive web applications using R-Shiny.",email:"cholland2408@gmail.com",linkedin:"https://www.linkedin.com/in/christian-holland-88848611a/",github:"https://github.com/christianholland",twitter:"https://twitter.com/mr_netherlands",university:"http://www.saezlab.org"},experience:[{position:"Master student",organization:"Insilico Biotechnology AG",aboutWork:"Coupling of Metabolism and Gene Regulation to identify Gene Targets in Living Cells.",fromDate:"June 2016",toDate:"March 2017"},{position:"Intern",organization:"Alacris Theranostics GmbH",aboutWork:"Application of a mechanistic model and an artificial neural network for simulation and parameter optimization of the drug response model in the context of personalized medicine.",fromDate:"Feburary 2016",toDate:"April 2016"},{position:"Intern",organization:"Research Center Juelich",aboutWork:"Studying Escherichia coli metabolism with focus on the uncertainties of the biomass equation.",fromDate:"November 2015",toDate:"January 2016"}],education:[{university:"Heidelberg University",degree:"PhD",fromDate:"May 2017",toDate:"present"},{university:"Bielefeld University",degree:"Master of Science",subject:"Genome Based Systems Biology",fromDate:"October 2014",toDate:"March 2017"},{university:"Bielefeld University",degree:"Bachelor of Science",subject:"Molecular Biotechnology",fromDate:"October 2011",toDate:"April 2014"}],skills:[{name:"R"},{name:"R-Shiny"},{name:"Python"},{name:"Matlab"},{name:"LaTeX"},{name:"Git"}],interests:{paragraphOne:"Apart from working for my PhD, I am a big fan of BBQ. Throughout the year I enjoy to have barbecue with my friends and familiy. In doing so I am exited to discover various ways of preparing meat, vegetables and even pizza or cakes on my grill. I also like to spend my free time on the tennis court or on a bike ride. After work, I also appreciate quiet nights on the couch with a good series or a movie."},publications:[{citation:"Holland CH, Tanevski J, Perales-Pat\xf3n J, Gleixner J, Kumar MP, Mereu E, Joughin BA, Stegle O, Lauffenburger DA, Heyn H, Szalai B, Saez-Rodriguez, J. 'Robustness and applicability of transcription factor and pathway analysis tools on single-cell RNA-seq data.' Genome Biology. 2020. DOI: 10.1186/s13059-020-1949-z."},{citation:"Tajti F, Kuppe C, Antoranz A, Ibrahim MM, Kim H, Ceccarelli F, Holland CH, Olauson H, Floege J, Alexopoulos LG, Kramann R, Saez-Rodriguez J. 'A functional landscape of chronic kidney disease entities from public transcriptomic data.' Kidney International Reports. 2020. DOI: 10.1016/j.ekir.2019.11.005."},{citation:"Ghallab A, Myllys M, Holland CH, Zaza A, Murad W, Hassan R, Ahmed YA, Abbas T, Abdelrahim EA, Schneider KM, Matz-Soja M, Reinders J, Gebhardt R, Berres ML, Hatting M, Drasdo D, Saez-Rodriguez J, Trautwein C, Hengstler JG. 'Influence of Liver Fibrosis on Lobular Zonation.' Cells. 2019. DOI: 10.3390/cells8121556."},{citation:"Szalai B, Subramanian V, Holland CH, Alf\xf6ldi R, Pusk\xe1s LG, Saez-Rodriguez J. 'Signatures of cell death and proliferation in perturbation transcriptomics data - from confounding factor to effective prediction.' Nucleic Acids Research. 2019. DOI: 10.1093/nar/gkz805."},{citation:"Holland CH, Szalai B, Saez-Rodriguez J. 'Transfer of regulatory knowledge from human to mouse for functional genomics analysis.' Biochimica et Biophysica Acta (BBA) - Gene Regulatory Mechanisms. 2019. DOI: 10.1016/j.bbagrm.2019.194431."},{citation:"Garcia-Alonso L, Holland CH, Ibrahim MM, Turei D, Saez-Rodriguez J. 'Benchmark and integration of resources for the estimation of human transcription factor activities.' Genome Research. 2019. DOI: 10.1101/gr.240663.118."}]}}},[[17,1,2]]]);
//# sourceMappingURL=main.77e516ec.chunk.js.map