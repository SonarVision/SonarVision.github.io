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

Vous trouverez également une liste de raccourcis clavier fortement recommandés [ici](google.com).

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

Vous trouverez [ici](google.com) une liste de requêtes Overpass permettant de contrôler des mappings à corriger que l'on retrouve fréquemment.