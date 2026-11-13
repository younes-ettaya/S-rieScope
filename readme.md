# SérieScope

**SérieScope** est une application web permettant de découvrir des séries TV, de rechercher un titre et de parcourir le catalogue par genre. Les premières séries sont récupérées depuis l'API publique 

## Fonctionnalités

- Affichage d'un catalogue de séries avec titre, genres et résumé.
- Recherche de séries par nom.
- Filtrage du catalogue par genre.
- Ajout d'une série à l'aide d'un formulaire avec validation des champs.
- Réinitialisation des filtres et actualisation du catalogue sans rechargement de la page.

> Les séries ajoutées sont conservées uniquement pendant la session : elles disparaissent au rechargement de la page.

## Technologies utilisées

- **HTML5** : structure de l'interface.
- **Tailwind CSS** : mise en forme responsive.
- **JavaScript Vanilla** : interactions et manipulation du DOM.
- **API TVmaze** : récupération des données via `fetch()`.

## Installation

```bash
git clone https://github.com/younes-ettaya/S-rieScope.git
cd S-rieScope
```

Ouvrir ensuite `index.html` avec un serveur local (par exemple l'extension **Live Server** de VS Code). Une connexion Internet est nécessaire pour charger les données depuis TVmaze et Tailwind CSS.

## Structure du projet

```text
S-rieScope/
├── index.html          # Interface utilisateur
├── script.js           # Logique JavaScript
├── tailwind.config.js  # Configuration Tailwind
└── assest/             # Ressources locales
```

## Auteur

Développé par [Younes Ettaya](https://younes-ettaya.github.io/S-rieScope/).
