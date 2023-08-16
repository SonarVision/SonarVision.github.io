"use strict";(self.webpackChunkdocs_sonarvision=self.webpackChunkdocs_sonarvision||[]).push([[5689],{1083:(e,t,a)=>{a.d(t,{u:()=>o});var n=a(7294),r=a(4613),i=a.n(r),s=a(3042);function o(){const e=(0,n.useRef)(null),t=(0,n.useRef)(null),[a]=(0,n.useState)(2.33504),[r]=(0,n.useState)(48.85922),[o]=(0,n.useState)(11),[p]=(0,n.useState)(40);return(0,n.useEffect)((()=>{if(t.current)return;t.current=new(i().Map)({container:e.current,style:"https://visuals.sonarvision.fr/styles/ContributionsSonarVision/style.json",center:[a,r],zoom:o,pitch:p});t.current.addControl(new s.P({n8dx:"n8dx (Nathan Daix)","la-monf":"la-monf (Augustin Monfret)",Etiennemapper5362:"Etiennemapper5362",Max_C:"Max_C",guiguimapper2002:"guiguimapper2002"},{showDefault:!0,title:"Contributions de l'\xe9quipe SonarVision"}),"bottom-right")}),[a,r,o]),n.createElement("div",{className:"map-wrap"},n.createElement("div",{ref:e,className:"map"}))}},7843:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>p,toc:()=>u});var n=a(7462),r=(a(7294),a(3905)),i=a(1083);const s={slug:"graphe-pieton-parisien",title:"Notre contribution au graphe pi\xe9ton parisien",authors:["nathan"],tags:["sonarvision","cartographie","pi\xe9ton","contribution","openstreetmap"]},o=void 0,p={permalink:"/blog/graphe-pieton-parisien",editUrl:"https://github.com/SonarVision/SonarVision.github.io/tree/main/blog/2023-08-16-contribution/index.mdx",source:"@site/blog/2023-08-16-contribution/index.mdx",title:"Notre contribution au graphe pi\xe9ton parisien",description:"Au cours de l'\xe9t\xe9 2023, l'\xe9quipe SonarVision a entrepris le projet de cartographier tous les trottoirs et les passages pi\xe9tons de la ville de Paris.",date:"2023-08-16T00:00:00.000Z",formattedDate:"16 ao\xfbt 2023",tags:[{label:"sonarvision",permalink:"/blog/tags/sonarvision"},{label:"cartographie",permalink:"/blog/tags/cartographie"},{label:"pi\xe9ton",permalink:"/blog/tags/pieton"},{label:"contribution",permalink:"/blog/tags/contribution"},{label:"openstreetmap",permalink:"/blog/tags/openstreetmap"}],readingTime:3.525,hasTruncateMarker:!1,authors:[{name:"Nathan Daix",title:"CEO \xe0 SonarVision",url:"https://github.com/natedx",imageURL:"https://github.com/natedx.png",key:"nathan"}],frontMatter:{slug:"graphe-pieton-parisien",title:"Notre contribution au graphe pi\xe9ton parisien",authors:["nathan"],tags:["sonarvision","cartographie","pi\xe9ton","contribution","openstreetmap"]},nextItem:{title:"1.3.1 - B\xeata",permalink:"/blog/maj-1.3.1"}},l={authorsImageUrls:[void 0]},u=[{value:"Nos contributions",id:"nos-contributions",level:2},{value:"Carte interactive",id:"carte-interactive",level:3},{value:"Tableau r\xe9capitulatif",id:"tableau-r\xe9capitulatif",level:3},{value:"Pourquoi ?",id:"pourquoi-",level:2},{value:"Comment ?",id:"comment-",level:2},{value:"Collaboration",id:"collaboration",level:2},{value:"L&#39;Open Data et Open Street Map",id:"lopen-data-et-open-street-map",level:2},{value:"La suite",id:"la-suite",level:2}],c={toc:u},d="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Au cours de l'\xe9t\xe9 2023, l'\xe9quipe SonarVision a entrepris le projet de cartographier tous les trottoirs et les passages pi\xe9tons de la ville de Paris."),(0,r.kt)("h2",{id:"nos-contributions"},"Nos contributions"),(0,r.kt)("h3",{id:"carte-interactive"},"Carte interactive"),(0,r.kt)(i.u,{mdxType:"VisualsMapComponent"}),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Donn\xe9e extraite le 14 ao\xfbt 2023 gr\xe2ce \xe0 Overpass : ",(0,r.kt)("a",{parentName:"em",href:"https://overpass-turbo.eu/s/1z0P"},"https://overpass-turbo.eu/s/1z0P"))),(0,r.kt)("h3",{id:"tableau-r\xe9capitulatif"},"Tableau r\xe9capitulatif"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Donn\xe9e"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Quantit\xe9 ajout\xe9e (approx.)"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Passages pi\xe9tons"),(0,r.kt)("td",{parentName:"tr",align:"center"},"20000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Trottoirs"),(0,r.kt)("td",{parentName:"tr",align:"center"},"53000 ou 5000 p\xe2t\xe9s de maisons")))),(0,r.kt)("h2",{id:"pourquoi-"},"Pourquoi ?"),(0,r.kt)("p",null,"Nous d\xe9veloppons une application GPS permettant de guider les personnes d\xe9ficientes visuelles de mani\xe8re ultra-pr\xe9cise, nomm\xe9e SonarVision. Afin de proposer des trajets adapt\xe9s, qui suivent les trottoirs et empruntent les passages pi\xe9tons, il \xe9tait n\xe9cessaire de disposer de donn\xe9es pi\xe9tonnes pr\xe9cises, qui identifient ces trottoirs et passages pi\xe9tons comme des ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.openstreetmap.org/wiki/FR:Cheminements_pi%C3%A9tons#Trottoir_comme_voie_s%C3%A9par%C3%A9e_(recommand%C3%A9)"},(0,r.kt)("strong",{parentName:"a"},"voies s\xe9par\xe9es")),"."),(0,r.kt)("p",null,"Gr\xe2ce \xe0 cette donn\xe9e, nous pouvons alors guider nos utilisateurs d'un point A \xe0 un point B avec une pr\xe9cision de l'ordre du m\xe8tre."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=geGq59f11z0"},(0,r.kt)("strong",{parentName:"a"},"Visionner la d\xe9mo de l'application SonarVision"))),(0,r.kt)("h2",{id:"comment-"},"Comment ?"),(0,r.kt)("p",null,"Avec l'aide pr\xe9cieuse de nos trois stagiaires cet \xe9t\xe9, nous avons pass\xe9 plus de 500 heures \xe0 virtuellement sillonner les rues de Paris afin d'y ajouter le filaire pi\xe9ton en conformit\xe9 avec les ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.openstreetmap.org/wiki/FR:Cheminements_pi%C3%A9tons"},"directives")," de la communaut\xe9 OpenStreetMap.\nNotre objectif \xe9tait de compl\xe9ter un graphe pi\xe9ton sur lequel nous pourrions ex\xe9cuter un calculateur d'itin\xe9raire, ",(0,r.kt)("strong",{parentName:"p"},"qui n'utilise jamais les voies routi\xe8res, seulement les chemins pi\xe9tons"),". Le pari est r\xe9ussi et nous pouvons \xe0 pr\xe9sent calculer des trajets pi\xe9tons ",(0,r.kt)("em",{parentName:"p"},"accessibles")," entre ",(0,r.kt)("a",{parentName:"p",href:"https://nav.sonarvision.fr/maps/?point=48.847777%2C2.313967&point=48.849234%2C2.336983&profile=foot&layer=OpenStreetMap"},"n'importe quels deux points de la ville de Paris"),"."),(0,r.kt)("p",null,"Les travaux r\xe9alis\xe9s par SonarVision ont \xe9t\xe9 en partie financ\xe9s par l'",(0,r.kt)("a",{parentName:"p",href:"https://www.economie.gouv.fr/france-2030"},"\xc9tat dans le cadre de France 2030"),"."),(0,r.kt)("img",{src:"/img/Logotype-rouge-bleu.png",alt:"Logo France 2030",width:"100"}),(0,r.kt)("h2",{id:"collaboration"},"Collaboration"),(0,r.kt)("p",null,"Nous n'avons pas fait ce travail seuls !"),(0,r.kt)("p",null,"Nous tenons \xe0 remercier l'\xe9quipe de ",(0,r.kt)("a",{parentName:"p",href:"https://junglebus.io/en/mobility-open-data-proudly-crafted-by-the-openstreetmap-community-2/"},"Jungle Bus")," qui nous a conseill\xe9 et aid\xe9 lors de ce projet. Dans le cadre du projet ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.openstreetmap.org/wiki/France/Eazyway"},"Eazyway"),", ils ont r\xe9alis\xe9 des ",(0,r.kt)("a",{parentName:"p",href:"https://www.mapillary.com/app/org/arrow"},"prises d'images 360\xb0")," dans la rue ainsi que de la ",(0,r.kt)("a",{parentName:"p",href:"https://overpass-turbo.eu/s/1z0N"},"cartographie de filaire pi\xe9ton"),". Leur \xe9quipe a fait d'importants travaux de ",(0,r.kt)("a",{parentName:"p",href:"https://peertube.openstreetmap.fr/w/o5AWXYerrMs7Us7v1YLdCF"},"communication")," et de ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.openstreetmap.org/wiki/France/Eazyway"},"documentation")," au sujet de la cartographie pi\xe9tonne. Merci \xe0 vous !"),(0,r.kt)("p",null,"Nous remercions \xe9galement les nombreux contributeurs OpenStreetMap qui ont particip\xe9s \xe0 la cartographie pi\xe9tonne parisienne, ainsi qu'\xe0 la coexistence de ce nouveau graphe pi\xe9ton avec les n\u0153uds et voies existantes. Merci en particulier \xe0 ",(0,r.kt)("a",{parentName:"p",href:"https://www.openstreetmap.org/user/Beno%C3%AEt%20C%20MdP"},"Beno\xeet Chaumeret")," pour ses conseils et ses corrections qui nous ont emp\xeach\xe9s d'accidentellement casser le graphe cycliste parisien..."),(0,r.kt)("h2",{id:"lopen-data-et-open-street-map"},"L'Open Data et Open Street Map"),(0,r.kt)("p",null,"Tout notre travail est librement disponible sur ",(0,r.kt)("a",{parentName:"p",href:"https://fr.wikipedia.org/wiki/OpenStreetMap"},"OpenStreetMap (OSM)"),". N'importe qui peut y acc\xe9der, l'am\xe9liorer, et l'exploiter commercialement. Cette donn\xe9e sert d\xe9j\xe0 \xe0 am\xe9liorer vos trajets pi\xe9tons dans des applications grand-public telles qu'Apple Plans, qui ",(0,r.kt)("a",{parentName:"p",href:"https://www.apple.com/legal/internet-services/maps/legal-en.html"},"incorpore de la donn\xe9e OSM dans ses cartes"),"."),(0,r.kt)("p",null,"Notre objectif est qu'un maximum de d\xe9veloppeurs utilisent cette donn\xe9e pi\xe9tonne dans leurs applications - y compris nos concurrents. Ce que nous esp\xe9rons, c'est que la communaut\xe9 OpenStreetMap toute enti\xe8re participera \xe0 ",(0,r.kt)("strong",{parentName:"p"},"l'entretenir, l'am\xe9liorer et la prot\xe9ger"),". Cela permettrait une meilleure exp\xe9rience pour les utilisateurs et r\xe9duirait consid\xe9rablement les co\xfbts li\xe9s au maintien d'une base de donn\xe9e cartographique propri\xe9taire."),(0,r.kt)("p",null,"Cette premi\xe8re passe cartographique de Paris intra-muros a \xe9t\xe9 grandement facilit\xe9e par la disponibilit\xe9 de donn\xe9es Open Data telle que les donn\xe9es sur les ",(0,r.kt)("a",{parentName:"p",href:"../../docs/cartographie/data-mapping#base-de-donn%C3%A9es-utilis%C3%A9e-par-notre-fond-de-carte"},"bordures et emprises des trottoirs de la Ville de Paris")," ou le fond de carte ",(0,r.kt)("a",{parentName:"p",href:"https://geoservices.ign.fr/documentation/services/api-et-services-ogc/images-tuilees-wmts-ogc"},"BDOrtho d'IGN"),". Nous mettons \xe0 disposition ",(0,r.kt)("a",{parentName:"p",href:"https://maps.sonarvision.fr/styles/SansFond/#12/48.8597/2.3478"},"un fond de carte"),", r\xe9guli\xe8rement mis-\xe0-jour avec les donn\xe9es Open Data de la Ville de Paris pour les cartographes int\xe9ress\xe9s. Un ",(0,r.kt)("a",{parentName:"p",href:"/docs/cartographie/data-mapping#comment-aider-sonarvision-avec-ses-contributions-"},"tuto")," est aussi disponible."),(0,r.kt)("h2",{id:"la-suite"},"La suite"),(0,r.kt)("p",null,"Au cours des prochains mois, nous allons principalement exploiter ces donn\xe9es afin de cr\xe9er des trajets pour nos clients, \xe0 savoir des personnes d\xe9ficientes visuelles cherchant \xe0 se d\xe9placer de mani\xe8re autonome \xe0 Paris."),(0,r.kt)("p",null,"Nous allons donc continuer \xe0 am\xe9liorer le graphe pi\xe9ton parisien puis de la petite couronne afin que notre service soit disponible au plus grand nombre."),(0,r.kt)("p",null,"Si vous \xeates contributeur OSM, nous avons besoin d'aide avec la cartographie de la petite couronne ! Nous sommes aussi \xe0 la recherche de partenaires au sein de la Ville de Paris, de la M\xe9tropole du Grand Paris, de la RATP, SNCF, IGN ou autres pour collaborer sur ce sujet de la mobilit\xe9 urbaine pour les personnes \xe0 mobilit\xe9 r\xe9duite."),(0,r.kt)("p",null,"Contactez-nous !"),(0,r.kt)("p",null,"E-mail : ",(0,r.kt)("a",{parentName:"p",href:"mailto:contact@sonarvision.fr"},"contact@sonarvision.fr")))}m.isMDXComponent=!0}}]);