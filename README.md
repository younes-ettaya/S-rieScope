<div align="center">

# 📺 SérieScope

### Explorez les séries TV, découvrez de nouveaux titres et enrichissez votre catalogue.

**Application web monopage développée en HTML, Tailwind CSS et JavaScript Vanilla.**

**HTML5** · **Tailwind CSS** · **JavaScript Vanilla** · **API TVmaze**

[Voir le dépôt GitHub](https://github.com/younes-ettaya/S-rieScope) · [Documentation de l'API TVmaze](https://www.tvmaze.com/api)

</div>

---

## 📖 Présentation

**SérieScope** est une application web destinée à la consultation d'un catalogue de séries télévisées. Elle propose une interface sombre et responsive pour découvrir des séries, visualiser leurs informations essentielles et, à terme, rechercher, filtrer et ajouter des titres depuis la même page.

Le catalogue initial est alimenté par l'**API publique TVmaze**. Les données sont récupérées avec `fetch()`, puis les cartes des séries sont générées dynamiquement en JavaScript grâce à la manipulation du DOM.

> **État du projet :** le dépôt public consulté contient une première version fonctionnelle de la récupération et de l'affichage des séries. Certaines interactions de l'interface sont encore en cours de développement.

## 📑 Sommaire

- [Fonctionnalités](#-fonctionnalités)
- [Technologies utilisées](#-technologies-utilisées)
- [Installation et lancement](#-installation-et-lancement)
- [Structure du projet](#-structure-du-projet)
- [Fonctionnement technique](#-fonctionnement-technique)
- [Améliorations prévues](#-améliorations-prévues)
- [Contribution](#-contribution)
- [Auteur](#-auteur)

## ✨ Fonctionnalités

| Fonctionnalité | État |
| --- | --- |
| Récupération du catalogue depuis l'API TVmaze | ✅ Implémentée |
| Affichage dynamique des séries sous forme de cartes | ✅ Implémenté |
| Présentation des titres, genres et résumés | ✅ Implémentée |
| Interface responsive avec Tailwind CSS | ✅ Présente |
| Formulaire d'ajout d'une série | 🚧 Interface présente ; traitement à finaliser |
| Recherche de séries | 🚧 Champ présent ; filtrage à finaliser |
| Filtrage par genre | 🚧 Sélecteur présent ; logique à finaliser |
| Réinitialisation des filtres et du catalogue | 🚧 À finaliser |
| Mise à jour dynamique du nombre de résultats | 🚧 À finaliser |

**Remarque :** les états ci-dessus correspondent au code visible sur la branche publique `feature/index.html` au moment de la rédaction.

## 🛠️ Technologies utilisées

| Technologie | Rôle |
| --- | --- |
| **HTML5** | Structure sémantique de la page et formulaires |
| **Tailwind CSS v4** | Mise en forme, design sombre et grille responsive |
| **JavaScript Vanilla (ES6+)** | Récupération et traitement des données, création des cartes, manipulation du DOM |
| **Fetch API** | Requêtes HTTP asynchrones vers TVmaze |
| **API TVmaze** | Source des données du catalogue |
| **Git et GitHub** | Gestion du code source et suivi des versions |

Le projet ne nécessite **ni framework JavaScript ni installation de dépendances npm** dans son état actuel. Tailwind CSS est chargé via un CDN dans `index.html`.

## 🚀 Installation et lancement

### 1. Prérequis

- Un navigateur web moderne (Chrome, Firefox, Edge, etc.).
- Une connexion Internet pour accéder à l'API TVmaze et au CDN Tailwind CSS.
- Git pour cloner le dépôt (facultatif si vous téléchargez l'archive ZIP).
- Un serveur de développement local, tel que **Live Server** dans Visual Studio Code (recommandé).

### 2. Cloner le projet

```bash
git clone https://github.com/younes-ettaya/S-rieScope.git
cd S-rieScope
```

Si nécessaire, sélectionner la branche contenant la version présentée :

```bash
git switch feature/index.html
```

### 3. Lancer l'application

Ouvrir le dossier dans **Visual Studio Code**, puis lancer `index.html` avec l'extension **Live Server**.

Vous pouvez également ouvrir directement le fichier `index.html` dans un navigateur. L'utilisation d'un serveur local est toutefois préférable pendant le développement.

> Aucune commande `npm install` ou `npm run dev` n'est nécessaire pour cette version.

## 📁 Structure du projet

```text
S-rieScope/
├── assest/          # Ressources statiques du projet (nom actuel du dossier)
├── index.html       # Structure de la page et interface utilisateur
├── tailwind.js      # Chargement TVmaze et génération des cartes en JavaScript
└── README.md        # Documentation du projet (ce fichier)
```

Cette arborescence décrit les principaux éléments visibles dans la branche `feature/index.html`. Le dossier `assest` conserve volontairement son orthographe actuelle afin de correspondre au dépôt.

## ⚙️ Fonctionnement technique

### 1. Chargement des données

À l'ouverture de l'application, la fonction asynchrone `fetchdata()` interroge le point d'accès suivant :

```text
GET https://api.tvmaze.com/shows?page=0
```

Les données JSON reçues sont placées dans un tableau JavaScript. Dans la version actuellement publiée, les **20 premières séries** de la réponse sont ajoutées au tableau avant l'affichage.

### 2. Construction de l'interface

La fonction `displaySeries()` parcourt le tableau et crée les cartes des séries dans l'élément `#liste-serie`. Chaque carte présente notamment :

- l'affiche de la série ;
- son titre ;
- ses genres ;
- un résumé dont l'affichage est limité à deux lignes.

Les éléments HTML sont créés dynamiquement à l'aide de méthodes telles que `document.createElement()` et `appendChild()`.

### 3. Gestion des données

Le catalogue chargé est conservé dans un tableau JavaScript pendant la session. **Aucune base de données ni persistance des ajouts n'est actuellement mise en place.** Le rechargement de la page relance la récupération des données depuis TVmaze.

### 4. Évolutions de la logique applicative

Les prochaines étapes consistent à relier les champs de recherche, le filtre par genre et le formulaire d'ajout aux fonctions JavaScript pour actualiser le catalogue **sans recharger la page**.

## 🗺️ Améliorations prévues

- [ ] Connecter la recherche en temps réel au catalogue.
- [ ] Implémenter le filtrage par genre et la réinitialisation.
- [ ] Valider les données du formulaire et permettre l'ajout d'une série.
- [ ] Actualiser automatiquement le compteur de résultats.
- [ ] Gérer les erreurs réseau, les champs manquants et les images indisponibles.
- [ ] Améliorer l'accessibilité (libellés, navigation au clavier et messages d'erreur).
- [ ] Ajouter des tests et une documentation de validation.
- [ ] Préparer une version déployable et une démonstration en ligne.

## 🤝 Contribution

Les suggestions et propositions d'amélioration sont les bienvenues via les [issues](https://github.com/younes-ettaya/S-rieScope/issues) et les *pull requests* du dépôt.

Pour proposer une contribution :

1. Créer une branche dédiée à partir d'une branche de travail à jour.
2. Effectuer les modifications et vérifier leur fonctionnement localement.
3. Rédiger un message de commit explicite.
4. Ouvrir une *pull request* décrivant les changements.

## 👤 Auteur

**[@younes-ettaya](https://github.com/younes-ettaya)**  
Dépôt : [github.com/younes-ettaya/S-rieScope](https://github.com/younes-ettaya/S-rieScope)

---

<div align="center">

**SérieScope — Une interface simple pour explorer l'univers des séries TV.**

</div>
ggi