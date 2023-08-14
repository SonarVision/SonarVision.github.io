---
sidebar_position: 2
---

# Conseils pour mapper efficacément 

Dans cette rubrique, nous présentons des outils, des techniques et des reflexes permettant de mapper rapidement et proprement.

## Utiliser l'outil JOSM 

### Installer JOSM

La grande majorité de Paris intra-muros a été mappé sur OpenStreetMap, mais presque aucune grande ville de province ni ville dans la petite couronne de Paris n'a été mappé. JOSM, un éditeur d'OpenStreetMap proposant de nombreuses fonctionnalités très pratiques, est efficace pour mapper de grandes zones non mappées telles que ces villes.

### Installer des fonds de carte

Les fonds de carte sont indispensables pour s'assurer que le mapping effectué est précis. 

Vous trouverez [ici](google.com) une liste de fonds de cartes importants en fonction de vos besoins et préférences. 

### Utiliser des raccourcis clavier

Ce qui fait de [JOSM](https://josm.openstreetmap.de/) un éditeur rapide et la possibilité d'utiliser des raccourcis clavier pour rapidement donner des attributs aux objets que l'on crée, comme des trottoirs qui représente la majorité du volume du filaire piéton ou des passages piéton qui peuvent avoir une multitude d'attributs variant d'un passage piéton à un autre. 

Pour créer un raccourci clavier, téléchargez ce plugin. 

Les raccourcis clavier que nous avons été amenés à utiliser fréquemment sont les suivants : 

s - passer en mode sélection 

a - passer en mode tracé de filaire

alt + click gauche - permet de poursuivre un tracé filaire sans copier les attributs de l'objet dont on part, pratique pour le tracé de passage piéton sans copier/coller l'attribut non souhaité des trottoirs auxquel il est connecté

double click gauche - placer un point et finaliser un tracé filaire en ce point, pratique dès que l'on arrive à un cul de sac en filaire trottoir


Vous trouverez également une liste de raccourcis clavier que nous avons créés [ici](google.com).

-ajout d'attributs pour les trottoirs 

-ajout d'attributs pour les passages piétons filaires non marqués

-ajout d'attributs pour les passages piétons filaires marqués non contrôlés

-ajout d'attributs pour les passages piétons filaires marqués avec feux de circulation

-ajout d'attributs pour les passages piétons filaires marqués avec feux de circulation et feux sonores

-ajout d'attributs pour les noeuds passages piétons filaires non marqués

-ajout d'attributs pour les noeuds passages piétons marqués non contrôlés

-ajout d'attributs pour les noeuds passages piétons marqués avec feux de circulation

-ajout d'attributs pour les noeuds passages piétons marqués avec feux de circulation et feux sonores

### Utiliser des filtres

L'utilisation de filtres permet de rapidement sélectionner des éléments en fonction de leurs attributs. 

Un exemple d'utilisation que l'on rencontre fréquemment est le suivant : lors du mapping de trottoirs, sans devoir donner un attribut aux trottoirs tracés, on peut mapper une grande zone, puis sélectionner à la fin tout le filaire sans attribut avec le filtre *=* (qui filtre tous les éléments ayant au moins un attribut) et utiliser le raccourcis clavier qui donne les attributs de trottoirs à la sélection

Vous trouverez une liste de filtres souvent utiles [ici](google.com).

## Utiliser Overpass

[Overpass](https://overpass-turbo.eu/) permet d'effectuer des requêtes permettant de mettre en valeur sur une carte des objets en fonction de leurs attributs sur de très grandes zones, comme l'entièreté de Paris par exemple. 

C'est un outil indispensable pour contrôler le mapping, et mettre en évidence un mapping incomplet ou incorrect.

Voici une liste de requêtes Overpass permettant de contrôler des mappings à corriger que l'on retrouve fréquemment :

[out:json][timeout:25];
// gather results
  (
    area[name="Zone à Circulation Restreinte de la Ville de Paris"];
  )->.searchArea;
  (
    area[name="Zone à Circulation Restreinte de la Ville de Paris"]; 
  )->.limitArea;
  (
    .searchArea;
    way["footway"](area);
  ) -> .footways;
( 

  (
    node["highway"="crossing"]["crossing"](area.searchArea)(area.limitArea);
    - node(w.footways);
  );
  
);
// print results
out body;
>;
out skel qt;

Cette requète permet de visualiser les noeuds de croisements entre voie piétonne et voie routière non connectés à un passage piéton filaire, et donc de compléter des passages piétons manquants ou supprimer des noeuds de passages piéton archaïques ou mal positionnés.

Note : Elle met également en évidence les croisements entre voie cyclable et voie routière qui nous concernent pas forcément. 

Ici, la zone sur laquelle la requête est effectuée est Paris intra-muros, dont le nom est "Zone à Circulation Restreinte de la Ville de Paris". Pour effectuer une requête sur une autre zone, il suffit de remplacer ce texte par l'identifiant de la zone souhaitée.

