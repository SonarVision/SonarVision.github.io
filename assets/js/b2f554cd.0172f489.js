"use strict";(self.webpackChunkdocs_sonarvision=self.webpackChunkdocs_sonarvision||[]).push([[1477],{10:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"graphe-pieton-parisien","metadata":{"permalink":"/blog/graphe-pieton-parisien","editUrl":"https://github.com/SonarVision/SonarVision.github.io/tree/main/blog/2023-08-16-contribution/index.mdx","source":"@site/blog/2023-08-16-contribution/index.mdx","title":"Notre contribution au graphe pi\xe9ton parisien","description":"Au cours de l\'\xe9t\xe9 2023, l\'\xe9quipe SonarVision a entrepris le projet de cartographier tous les trottoirs et les passages pi\xe9tons de la ville de Paris.","date":"2023-08-16T00:00:00.000Z","formattedDate":"16 ao\xfbt 2023","tags":[{"label":"sonarvision","permalink":"/blog/tags/sonarvision"},{"label":"cartographie","permalink":"/blog/tags/cartographie"},{"label":"pi\xe9ton","permalink":"/blog/tags/pieton"},{"label":"contribution","permalink":"/blog/tags/contribution"},{"label":"openstreetmap","permalink":"/blog/tags/openstreetmap"}],"readingTime":3.525,"hasTruncateMarker":false,"authors":[{"name":"Nathan Daix","title":"CEO \xe0 SonarVision","url":"https://github.com/natedx","imageURL":"https://github.com/natedx.png","key":"nathan"}],"frontMatter":{"slug":"graphe-pieton-parisien","title":"Notre contribution au graphe pi\xe9ton parisien","authors":["nathan"],"tags":["sonarvision","cartographie","pi\xe9ton","contribution","openstreetmap"]},"nextItem":{"title":"1.3.1 - B\xeata","permalink":"/blog/maj-1.3.1"}},"content":"import {VisualsMapComponent} from \\"@site/src/components/Maps/VisualsMapComponent\\";\\n\\nAu cours de l\'\xe9t\xe9 2023, l\'\xe9quipe SonarVision a entrepris le projet de cartographier tous les trottoirs et les passages pi\xe9tons de la ville de Paris.\\n\\n## Nos contributions\\n### Carte interactive\\n\\n<VisualsMapComponent/>\\n\\n*Donn\xe9e extraite le 14 ao\xfbt 2023 gr\xe2ce \xe0 Overpass : https://overpass-turbo.eu/s/1z0P*\\n\\n### Tableau r\xe9capitulatif\\n\\n|      Donn\xe9e      |   Quantit\xe9 ajout\xe9e (approx.)   |\\n|:----------------:|:------------------------------:|\\n| Passages pi\xe9tons |             20000              |\\n|    Trottoirs     | 53000 ou 5000 p\xe2t\xe9s de maisons |\\n\\n## Pourquoi ?\\n\\nNous d\xe9veloppons une application GPS permettant de guider les personnes d\xe9ficientes visuelles de mani\xe8re ultra-pr\xe9cise, nomm\xe9e SonarVision. Afin de proposer des trajets adapt\xe9s, qui suivent les trottoirs et empruntent les passages pi\xe9tons, il \xe9tait n\xe9cessaire de disposer de donn\xe9es pi\xe9tonnes pr\xe9cises, qui identifient ces trottoirs et passages pi\xe9tons comme des [**voies s\xe9par\xe9es**](https://wiki.openstreetmap.org/wiki/FR:Cheminements_pi%C3%A9tons#Trottoir_comme_voie_s%C3%A9par%C3%A9e_(recommand%C3%A9)).\\n\\nGr\xe2ce \xe0 cette donn\xe9e, nous pouvons alors guider nos utilisateurs d\'un point A \xe0 un point B avec une pr\xe9cision de l\'ordre du m\xe8tre.\\n\\n[**Visionner la d\xe9mo de l\'application SonarVision**](https://www.youtube.com/watch?v=geGq59f11z0)\\n\\n## Comment ?\\n\\nAvec l\'aide pr\xe9cieuse de nos trois stagiaires cet \xe9t\xe9, nous avons pass\xe9 plus de 500 heures \xe0 virtuellement sillonner les rues de Paris afin d\'y ajouter le filaire pi\xe9ton en conformit\xe9 avec les [directives](https://wiki.openstreetmap.org/wiki/FR:Cheminements_pi%C3%A9tons) de la communaut\xe9 OpenStreetMap.\\nNotre objectif \xe9tait de compl\xe9ter un graphe pi\xe9ton sur lequel nous pourrions ex\xe9cuter un calculateur d\'itin\xe9raire, **qui n\'utilise jamais les voies routi\xe8res, seulement les chemins pi\xe9tons**. Le pari est r\xe9ussi et nous pouvons \xe0 pr\xe9sent calculer des trajets pi\xe9tons *accessibles* entre [n\'importe quels deux points de la ville de Paris](https://nav.sonarvision.fr/maps/?point=48.847777%2C2.313967&point=48.849234%2C2.336983&profile=foot&layer=OpenStreetMap).\\n\\nLes travaux r\xe9alis\xe9s par SonarVision ont \xe9t\xe9 en partie financ\xe9s par l\'[\xc9tat dans le cadre de France 2030](https://www.economie.gouv.fr/france-2030).\\n<img src={\\"/img/Logotype-rouge-bleu.png\\"} alt=\\"Logo France 2030\\" width=\\"100\\"/>\\n\\n\\n## Collaboration\\n\\nNous n\'avons pas fait ce travail seuls !\\n\\nNous tenons \xe0 remercier l\'\xe9quipe de [Jungle Bus](https://junglebus.io/en/mobility-open-data-proudly-crafted-by-the-openstreetmap-community-2/) qui nous a conseill\xe9 et aid\xe9 lors de ce projet. Dans le cadre du projet [Eazyway](https://wiki.openstreetmap.org/wiki/France/Eazyway), ils ont r\xe9alis\xe9 des [prises d\'images 360\xb0](https://www.mapillary.com/app/org/arrow) dans la rue ainsi que de la [cartographie de filaire pi\xe9ton](https://overpass-turbo.eu/s/1z0N). Leur \xe9quipe a fait d\'importants travaux de [communication](https://peertube.openstreetmap.fr/w/o5AWXYerrMs7Us7v1YLdCF) et de [documentation](https://wiki.openstreetmap.org/wiki/France/Eazyway) au sujet de la cartographie pi\xe9tonne. Merci \xe0 vous !\\n\\nNous remercions \xe9galement les nombreux contributeurs OpenStreetMap qui ont particip\xe9s \xe0 la cartographie pi\xe9tonne parisienne, ainsi qu\'\xe0 la coexistence de ce nouveau graphe pi\xe9ton avec les n\u0153uds et voies existantes. Merci en particulier \xe0 [Beno\xeet Chaumeret](https://www.openstreetmap.org/user/Beno%C3%AEt%20C%20MdP) pour ses conseils et ses corrections qui nous ont emp\xeach\xe9s d\'accidentellement casser le graphe cycliste parisien...\\n\\n## L\'Open Data et Open Street Map\\n\\nTout notre travail est librement disponible sur [OpenStreetMap (OSM)](https://fr.wikipedia.org/wiki/OpenStreetMap). N\'importe qui peut y acc\xe9der, l\'am\xe9liorer, et l\'exploiter commercialement. Cette donn\xe9e sert d\xe9j\xe0 \xe0 am\xe9liorer vos trajets pi\xe9tons dans des applications grand-public telles qu\'Apple Plans, qui [incorpore de la donn\xe9e OSM dans ses cartes](https://www.apple.com/legal/internet-services/maps/legal-en.html).\\n\\nNotre objectif est qu\'un maximum de d\xe9veloppeurs utilisent cette donn\xe9e pi\xe9tonne dans leurs applications - y compris nos concurrents. Ce que nous esp\xe9rons, c\'est que la communaut\xe9 OpenStreetMap toute enti\xe8re participera \xe0 **l\'entretenir, l\'am\xe9liorer et la prot\xe9ger**. Cela permettrait une meilleure exp\xe9rience pour les utilisateurs et r\xe9duirait consid\xe9rablement les co\xfbts li\xe9s au maintien d\'une base de donn\xe9e cartographique propri\xe9taire.\\n\\nCette premi\xe8re passe cartographique de Paris intra-muros a \xe9t\xe9 grandement facilit\xe9e par la disponibilit\xe9 de donn\xe9es Open Data telle que les donn\xe9es sur les [bordures et emprises des trottoirs de la Ville de Paris](../../docs/cartographie/data-mapping#base-de-donn%C3%A9es-utilis%C3%A9e-par-notre-fond-de-carte) ou le fond de carte [BDOrtho d\'IGN](https://geoservices.ign.fr/documentation/services/api-et-services-ogc/images-tuilees-wmts-ogc). Nous mettons \xe0 disposition [un fond de carte](https://maps.sonarvision.fr/styles/SansFond/#12/48.8597/2.3478), r\xe9guli\xe8rement mis-\xe0-jour avec les donn\xe9es Open Data de la Ville de Paris pour les cartographes int\xe9ress\xe9s. Un [tuto](/docs/cartographie/data-mapping#comment-aider-sonarvision-avec-ses-contributions-) est aussi disponible.\\n\\n## La suite\\n\\nAu cours des prochains mois, nous allons principalement exploiter ces donn\xe9es afin de cr\xe9er des trajets pour nos clients, \xe0 savoir des personnes d\xe9ficientes visuelles cherchant \xe0 se d\xe9placer de mani\xe8re autonome \xe0 Paris.\\n\\nNous allons donc continuer \xe0 am\xe9liorer le graphe pi\xe9ton parisien puis de la petite couronne afin que notre service soit disponible au plus grand nombre.\\n\\nSi vous \xeates contributeur OSM, nous avons besoin d\'aide avec la cartographie de la petite couronne ! Nous sommes aussi \xe0 la recherche de partenaires au sein de la Ville de Paris, de la M\xe9tropole du Grand Paris, de la RATP, SNCF, IGN ou autres pour collaborer sur ce sujet de la mobilit\xe9 urbaine pour les personnes \xe0 mobilit\xe9 r\xe9duite.\\n\\nContactez-nous !\\n\\nE-mail : [contact@sonarvision.fr](mailto:contact@sonarvision.fr)"},{"id":"maj-1.3.1","metadata":{"permalink":"/blog/maj-1.3.1","editUrl":"https://github.com/SonarVision/SonarVision.github.io/tree/main/blog/2023-06-04/index.md","source":"@site/blog/2023-06-04/index.md","title":"1.3.1 - B\xeata","description":"Bonjour \xe0 tous,","date":"2023-06-04T00:00:00.000Z","formattedDate":"4 juin 2023","tags":[{"label":"sonarvision","permalink":"/blog/tags/sonarvision"},{"label":"b\xeata","permalink":"/blog/tags/beta"}],"readingTime":2.4,"hasTruncateMarker":false,"authors":[{"name":"Augustin Monfret","title":"CTO \xe0 Sonarvision","url":"https://github.com/MonfretAugustin","imageURL":"https://github.com/MonfretAugustin.png","key":"augustin"}],"frontMatter":{"slug":"maj-1.3.1","title":"1.3.1 - B\xeata","authors":["augustin"],"tags":["sonarvision","b\xeata"]},"prevItem":{"title":"Notre contribution au graphe pi\xe9ton parisien","permalink":"/blog/graphe-pieton-parisien"},"nextItem":{"title":"Bienvenue","permalink":"/blog/Bienvenue"}},"content":"Bonjour \xe0 tous,\\n\\nUne nouvelle version b\xeata est disponible. Nous allons publier r\xe9guli\xe8rement des versions sur TestFlight pour tester avec vous les nouveaux changements avant de les publier sur la version publique (celle sur l\'App Store). Cela signifie que la version sur TestFlight sera plus instable que celle sur l\'App Store. Libre \xe0 vous de t\xe9l\xe9charger la version que vous souhaitez utiliser. Pour information, si vous t\xe9l\xe9chargez la version TestFlight, celle-ci remplacera la version App Store sur votre s\xe9lecteur d\'application. Nous avons donc ajout\xe9 un message sur la version b\xeata vous signalant que vous utilisez actuellement la version b\xeata afin d\'\xe9viter les erreurs.\\n\\nNous souhaitons tout particuli\xe8rement conna\xeetre votre avis sur les id\xe9es d\'am\xe9liorations pour le guidage. Pour ce faire, nous avons ajout\xe9 dans les param\xe8tres une section \\"fonctionnalit\xe9 en b\xeata\\" o\xf9 vous pourrez activer ou d\xe9sactiver certaines fonctionnalit\xe9s que nous souhaiterions tester avec vous. Dans cette version, nous vous proposons trois nouvelles fonctionnalit\xe9s \xe0 tester concernant le guidage :\\n\\n- **Aide au maintien du t\xe9l\xe9phone** : permet \xe0 l\'utilisateur d\'avoir un retour sur son maintien du t\xe9l\xe9phone pendant le guidage. Un t\xe9l\xe9phone trop vers le haut ou vers le bas est la principale cause d\'une perte de pr\xe9cision.\\n- **Retour haptique de la direction g\xe9n\xe9rale** : nous essayons un nouveau son de validation lorsque vous retrouvez la bonne orientation superpos\xe9e avec une vibration du t\xe9l\xe9phone.\\n- **Retour haptique du cap** : une l\xe9g\xe8re vibration est ressentie lorsque le t\xe9l\xe9phone est point\xe9 tr\xe8s pr\xe9cis\xe9ment vers le bon cap.\\n\\nPar d\xe9faut, ces fonctionnalit\xe9s sont d\xe9sactiv\xe9es. Vous pouvez toutes les activer ou seulement une seule, libre \xe0 vous. Je vous conseille dans un premier temps de les tester une \xe0 une pour bien les comprendre. Le but de l\'exp\xe9rience est surtout d\'obtenir un maximum de retour de votre c\xf4t\xe9 afin de conna\xeetre la pertinence de telles ou telles fonctionnalit\xe9s et \xe9galement des pistes d\'am\xe9liorations.\\n\\nPassons maintenant aux changements mineurs que cette version int\xe8gre :\\n\\n- Nous avons am\xe9lior\xe9 notre page d\'accueil pour la rendre plus lisible pour les malvoyants.\\n- Nous avons ajout\xe9 un onglet assistance sur la page d\'accueil o\xf9 vous pourrez retrouver le guide d\'utilisation et nos informations de contact.\\n- Nous avons ajout\xe9 la politique de confidentialit\xe9.\\n- Nous avons am\xe9lior\xe9 l\'accessibilit\xe9 de l\'ensemble de nos formulaires pr\xe9sents dans l\'application.\\n- Nous avons am\xe9lior\xe9 la page de pr\xe9visualisation d\'une route afin d\'\xe9viter que l\'utilisateur lance un mauvais trajet et se retrouve par la suite dans une situation d\xe9licate (par exemple, au d\xe9part du domicile, plusieurs trajets peuvent se trouver \xe0 proximit\xe9, une erreur de s\xe9lection peut arriver).\\n- Nous avons ajout\xe9 une alerte au lancement d\'un trajet lorsque votre niveau de batterie est faible afin d\'\xe9viter \xe0 l\'utilisateur de se retrouver sans batterie au milieu d\'un trajet.\\n\\nSi vous avez la moindre question, n\'h\xe9sitez pas \xe0 me contacter directement par t\xe9l\xe9phone ou par mail.\\n\\nBonne journ\xe9e \xe0 tous,\\n\\nAugustin"},{"id":"Bienvenue","metadata":{"permalink":"/blog/Bienvenue","editUrl":"https://github.com/SonarVision/SonarVision.github.io/tree/main/blog/2021-08-26-welcome/index.md","source":"@site/blog/2021-08-26-welcome/index.md","title":"Bienvenue","description":"Bienvenue sur le site de SonarVision.","date":"2021-08-26T00:00:00.000Z","formattedDate":"26 ao\xfbt 2021","tags":[{"label":"sonarvision","permalink":"/blog/tags/sonarvision"},{"label":"pr\xe9sentation","permalink":"/blog/tags/presentation"}],"readingTime":0.095,"hasTruncateMarker":false,"authors":[{"name":"Nathan Daix","title":"CEO \xe0 SonarVision","url":"https://github.com/natedx","imageURL":"https://github.com/natedx.png","key":"nathan"}],"frontMatter":{"slug":"Bienvenue","title":"Bienvenue","authors":["nathan"],"tags":["sonarvision","pr\xe9sentation"]},"prevItem":{"title":"1.3.1 - B\xeata","permalink":"/blog/maj-1.3.1"}},"content":"Bienvenue sur le site de SonarVision. \\nNous avons l\'intention de vous pr\xe9senter ici les diff\xe9rentes fonctionnalit\xe9s de notre application."}]}')}}]);