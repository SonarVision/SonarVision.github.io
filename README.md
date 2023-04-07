# SonarVision Docs

Ce site web est construit avec [Docusaurus 2](https://docusaurus.io/), un générateur de site web statique moderne.

### Installation

```
$ npm install
```

### Developpement local

```
$ npm run start
```

Cette commande démarre un serveur de développement local et ouvre une fenêtre de navigateur. La plupart des modifications sont reflétées en direct sans avoir à redémarrer le serveur.

### Build

```
$ npm run build
```

Cette commande génère du contenu statique dans le répertoire `build` et peut être servi à l'aide de tout service d'hébergement de contenu statique.

### Déploiement

Il suffit de faire un merge sur `main` via une pull request (PR) pour déclencher le déploiement automatique sur Github Pages.
Les PR sont validés par les propriétaires du projet. Plus d'informations ci-dessous.

Lors d'une PR, le workflow `test-deploy` présent dans `.github/workflows` est déclenché. Il permet de tester que le site
se build correctement avant de merge sur la branche `main`.

### Processus de contribution

1. Forker le projet
2. Créer une branche pour votre contribution
3. Faire une PR sur la branche `main` du répo principal
4. Attendre la validation de la PR par les propriétaires du projet. Si la PR est validée, elle est mergée sur `main`
6. Le site est automatiquement déployé sur Github Pages
7. Votre contribution est visible sur [docs.sonarvision.fr](https://docs.sonarvision.fr)
8. Vous pouvez supprimer votre branche, à la fois en local et de votre fork.
