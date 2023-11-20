"use strict";(self.webpackChunkdocs_sonarvision=self.webpackChunkdocs_sonarvision||[]).push([[5464],{2189:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var s=t(5893),i=t(1151);const o={slug:"maj-1.3.1",title:"1.3.1 - B\xeata",authors:["augustin"],tags:["sonarvision","b\xeata"]},r=void 0,a={permalink:"/blog/maj-1.3.1",editUrl:"https://github.com/SonarVision/SonarVision.github.io/tree/main/blog/2023-06-04/index.md",source:"@site/blog/2023-06-04/index.md",title:"1.3.1 - B\xeata",description:"Bonjour \xe0 tous,",date:"2023-06-04T00:00:00.000Z",formattedDate:"4 juin 2023",tags:[{label:"sonarvision",permalink:"/blog/tags/sonarvision"},{label:"b\xeata",permalink:"/blog/tags/beta"}],readingTime:2.4,hasTruncateMarker:!1,authors:[{name:"Augustin Monfret",title:"CTO \xe0 Sonarvision",url:"https://github.com/MonfretAugustin",imageURL:"https://github.com/MonfretAugustin.png",key:"augustin"}],frontMatter:{slug:"maj-1.3.1",title:"1.3.1 - B\xeata",authors:["augustin"],tags:["sonarvision","b\xeata"]},unlisted:!1,prevItem:{title:"Notre contribution au graphe pi\xe9ton parisien",permalink:"/blog/graphe-pieton-parisien"},nextItem:{title:"Bienvenue",permalink:"/blog/Bienvenue"}},u={authorsImageUrls:[void 0]},l=[];function c(e){const n={li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Bonjour \xe0 tous,"}),"\n",(0,s.jsx)(n.p,{children:"Une nouvelle version b\xeata est disponible. Nous allons publier r\xe9guli\xe8rement des versions sur TestFlight pour tester avec vous les nouveaux changements avant de les publier sur la version publique (celle sur l'App Store). Cela signifie que la version sur TestFlight sera plus instable que celle sur l'App Store. Libre \xe0 vous de t\xe9l\xe9charger la version que vous souhaitez utiliser. Pour information, si vous t\xe9l\xe9chargez la version TestFlight, celle-ci remplacera la version App Store sur votre s\xe9lecteur d'application. Nous avons donc ajout\xe9 un message sur la version b\xeata vous signalant que vous utilisez actuellement la version b\xeata afin d'\xe9viter les erreurs."}),"\n",(0,s.jsx)(n.p,{children:'Nous souhaitons tout particuli\xe8rement conna\xeetre votre avis sur les id\xe9es d\'am\xe9liorations pour le guidage. Pour ce faire, nous avons ajout\xe9 dans les param\xe8tres une section "fonctionnalit\xe9 en b\xeata" o\xf9 vous pourrez activer ou d\xe9sactiver certaines fonctionnalit\xe9s que nous souhaiterions tester avec vous. Dans cette version, nous vous proposons trois nouvelles fonctionnalit\xe9s \xe0 tester concernant le guidage :'}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Aide au maintien du t\xe9l\xe9phone"})," : permet \xe0 l'utilisateur d'avoir un retour sur son maintien du t\xe9l\xe9phone pendant le guidage. Un t\xe9l\xe9phone trop vers le haut ou vers le bas est la principale cause d'une perte de pr\xe9cision."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Retour haptique de la direction g\xe9n\xe9rale"})," : nous essayons un nouveau son de validation lorsque vous retrouvez la bonne orientation superpos\xe9e avec une vibration du t\xe9l\xe9phone."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Retour haptique du cap"})," : une l\xe9g\xe8re vibration est ressentie lorsque le t\xe9l\xe9phone est point\xe9 tr\xe8s pr\xe9cis\xe9ment vers le bon cap."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Par d\xe9faut, ces fonctionnalit\xe9s sont d\xe9sactiv\xe9es. Vous pouvez toutes les activer ou seulement une seule, libre \xe0 vous. Je vous conseille dans un premier temps de les tester une \xe0 une pour bien les comprendre. Le but de l'exp\xe9rience est surtout d'obtenir un maximum de retour de votre c\xf4t\xe9 afin de conna\xeetre la pertinence de telles ou telles fonctionnalit\xe9s et \xe9galement des pistes d'am\xe9liorations."}),"\n",(0,s.jsx)(n.p,{children:"Passons maintenant aux changements mineurs que cette version int\xe8gre :"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Nous avons am\xe9lior\xe9 notre page d'accueil pour la rendre plus lisible pour les malvoyants."}),"\n",(0,s.jsx)(n.li,{children:"Nous avons ajout\xe9 un onglet assistance sur la page d'accueil o\xf9 vous pourrez retrouver le guide d'utilisation et nos informations de contact."}),"\n",(0,s.jsx)(n.li,{children:"Nous avons ajout\xe9 la politique de confidentialit\xe9."}),"\n",(0,s.jsx)(n.li,{children:"Nous avons am\xe9lior\xe9 l'accessibilit\xe9 de l'ensemble de nos formulaires pr\xe9sents dans l'application."}),"\n",(0,s.jsx)(n.li,{children:"Nous avons am\xe9lior\xe9 la page de pr\xe9visualisation d'une route afin d'\xe9viter que l'utilisateur lance un mauvais trajet et se retrouve par la suite dans une situation d\xe9licate (par exemple, au d\xe9part du domicile, plusieurs trajets peuvent se trouver \xe0 proximit\xe9, une erreur de s\xe9lection peut arriver)."}),"\n",(0,s.jsx)(n.li,{children:"Nous avons ajout\xe9 une alerte au lancement d'un trajet lorsque votre niveau de batterie est faible afin d'\xe9viter \xe0 l'utilisateur de se retrouver sans batterie au milieu d'un trajet."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Si vous avez la moindre question, n'h\xe9sitez pas \xe0 me contacter directement par t\xe9l\xe9phone ou par mail."}),"\n",(0,s.jsx)(n.p,{children:"Bonne journ\xe9e \xe0 tous,"}),"\n",(0,s.jsx)(n.p,{children:"Augustin"})]})}function p(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>r});var s=t(7294);const i={},o=s.createContext(i);function r(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);