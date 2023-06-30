---
sidebar_position: 1
---

# Comment contribuer sur OpenStreetMap?

Dans cette rubrique, nous présentons les outils mis en place par Sonarvision nous permettant de contribuer à
OpenStreetMap.

## Qu'est-ce qu'OpenStreetMap (OSM) ?

OpenStreetMap (OSM) est un projet collaboratif en ligne qui vise à créer une carte du monde libre et open source.
Contrairement aux cartes commerciales, OSM permet à tout le monde de contribuer à la carte.

Les données d'OpenStreetMap sont collectées par des contributeurs du monde entier qui utilisent des appareils GPS,
des images satellites et des éditeurs en ligne pour ajouter des informations à la carte.
Les données sont stockées dans une base de données centrale et peuvent être utilisées gratuitement
par quiconque pour créer des cartes personnalisées, des applications de navigation, des visualisations de données et
plus encore.

En résumé, OpenStreetMap est un projet communautaire qui fournit des données géographiques précises, libres et ouvertes
à tous.

## Pourquoi contribuer ?

De nombreuses applications de navigation, dont SonarVision, utilisent les données d'OpenStreetMap pour calculer leurs
itinéraires.
Cependant, les graphes filaires piétons restent encore incomplets dans certaines zones et ne permettent pas de générer
des itinéraires de qualité à Paris par exemple.
Afin d'améliorer la qualité de notre routage, nous contribuons ouvertement à la base de données d'OpenStreetMap,
malgré le fait que ces données puissent être utilisées par nos concurrents.
Nous espérons contribuer à un cercle vertueux qui permettra à l'ensemble des projets se reposant sur OSM d'offrir une
meilleure expérience à leurs utilisateurs.

## Comment aider Sonarvision avec ses contributions ?

### Créer un compte sur OpenStreetMap

Pour contribuer à OpenStreetMap, il vous suffit de créer un compte sur le
site [OpenStreetMap](https://www.openstreetmap.org/).
Rendez-vous ensuite sur l'onglet "Modifier" et commencez à ajouter des informations sur la carte.

### Participer à la création et au maintien du graphe filaire piéton

Pour créer nos itinéraires, nous nous reposons sur les données piétonnes d'OpenStreetMap. Cependant, celles-ci restent
encore très incomplètes dans la majorité des grandes villes françaises.
Nous avons commencé notre travail de cartographie par Paris et notamment par le 15e et 17e arrondissements.
Voici les informations principales dont nous avons besoin :

- La position des
  trottoirs ([Trottoir comme voie séparée](https://wiki.openstreetmap.org/wiki/FR:Cheminements_pi%C3%A9tons#Trottoir))
- La position des passages
  piétons ([Passage piéton comme voie reliant les trottoirs](https://wiki.openstreetmap.org/wiki/FR:Cheminements_pi%C3%A9tons#Passages_pi%C3%A9tons))
    - Si un passage piéton est équipé d'un feu sonore (utiliser: `traffic_signals:sound=yes` )

Consulter le wiki suivant pour plus d'informations sur les tags utilisés et les meilleures pratiques :
https://wiki.openstreetmap.org/wiki/FR:Cheminements_pi%C3%A9tons

Ci-dessous, une image illustrant l'application de ces principes au niveau d'une intersection. L'élément sélectionné est
le passage piéton avec signaux sonores surligné en rouge et situé en haut à gauche.
![exemple graphe piéton](exemple_graphe_pieton.jpg 'capture d'écran illustrant le graphe piéton au niveau d'une intersection')

## Outils mis à disposition pour la cartographie

### Fond de carte Open Data Paris

Pour effectuer cette cartographie, nous avons créé un fond de carte qui nous permet d'afficher les passages piétions,
les feux sonores et les trottoirs de la ville de Paris. Ce fond de carte nous permet de cartographier de manière précise
et rapide sur l'ensemble de la ville de Paris.

Voici les étapes à suivre pour utiliser ce fond de carte sur l'éditeur ID d'OpenStreetMap :

1. Commencer par vous rendre dans
   l'éditeur [ID d'OSM](https://www.openstreetmap.org/edit?editor=id#map=13/48.8588/2.3385)
2. Puis accéder aux paramètres de fond de carte en cliquant sur la barre d'outils à droite ou avec le raccourci
   clavier `B`
3. Cliquer sur modifier le fond de carte personnalisé
4. Ajouter l'URL
   suivante : `https://api.mapbox.com/styles/v1/n8dx/cljidfsdc002601pqdx0vhosw/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibjhkeCIsImEiOiJja2pwNzE0cTMwY2EyMnRuNXExeWtpM2M0In0.94CktFP6v5D0_qjyQh-Dvg`
5. Enfin, cliquer sur "Ok" et sélectionner le fond de carte personnalisé

![gif tuyo fond de carte](Tuto_fond_de_carte.gif 'tutoriel: comment ajouter un fond de carte personalisé à ID')

#### Base de données utilisée par notre fond de carte

| Base de donnée                                                                                                                                                                                               | Dernière mise à jour |
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------:|
| [Modules sonores passages piétons (Paris)](https://opendata.paris.fr/explore/dataset/modules-sonores-passages-pietons/information/?disjunctive.libelle_secteur&disjunctive.libelle_materiel)                 |      20/03/2023      |
| [Plan de voirie - Passages piétons (Paris)](https://opendata.paris.fr/explore/dataset/plan-de-voirie-passages-pietons/information/?disjunctive.num_pave&location=16,48.87356,2.33009&basemap=jawg.streets)   |      20/03/2023      |
| [Plan de voirie - Trottoirs filaires (Paris)](https://opendata.paris.fr/explore/dataset/plan-de-voirie-trottoirs/information/?disjunctive.num_pave&disjunctive.lib_level&disjunctive.lib_classe)             |      20/03/2023      |
| [Plan de voirie - Trottoirs - Emprises (Paris)](https://opendata.paris.fr/explore/dataset/plan-de-voirie-trottoirs-emprises/information/?disjunctive.num_pave&basemap=jawg.dark&location=20,48.8864,2.31302) |      20/03/2023      |

### Calculateur d'itinéraires

Nous avons déployé un calculateur d'itinéraire ouvert grâce à Graphhopper qui exploite directement les données du filaire piéton d'OpenStreetMap.

Le calculateur Parisien est disponible ici : https://nav.sonarvision.fr

Ce calculateur n'utilise comme entrée que le filaire piéton. Il n'empruntera jamais de voies qui ne sont pas conçues pour les piétons. Cela présente le désavantage que le calcul d'itinéraire n'est possible que dans les zones où il existe un graphe piéton complet.
Pour visualiser le graphe piéton, vous pouvez activer les couches "Show Routing Graph" ou encore "Show Urban Density" en haut à droite de l'écran.

Cet outil permet donc de se rendre compte des zones qu'il reste à cartographier ainsi que la correction des itinéraires générés. Il est mis à jour toute les 2 heures.


