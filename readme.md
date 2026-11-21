# SérieScope

Application web de gestion d’un catalogue de séries TV, réalisée dans le cadre de la formation **YouCode**.

## Liens utiles

- [Consulter le site déployé](https://younes-ettaya.github.io/S-rieScope/)
- [Accéder au dépôt GitHub](https://github.com/younes-ettaya/S-rieScope)
- [Consulter le tableau Jira](https://younesettaya77-1793028290335.atlassian.net/jira/software/projects/SER/list?jql=project+%3D+SER+ORDER+BY+cf%5B10019%5D+ASC&atlOrigin=eyJpIjoiZmE3ZWUwN2NiN2U3NDYwYTg1YTA1M2VhYjdlODYzMGYiLCJwIjoiaiJ9)

## Aperçu de l’interface

![Formulaire d’ajout d’une série dans SérieScope](./serie_scopt.png)

## Formulaire « Ajouter une série »

| Champ ou bouton | Rôle | Exemple |
| --- | --- | --- |
| **Nom de la série** | Saisir le titre de la série à ajouter au catalogue. | `The Bear` |
| **Langue** | Saisir une langue ou la sélectionner parmi les suggestions proposées pendant la saisie. | `English`, `French`, `Arabic` |
| **Genre(s)** | Indiquer un ou plusieurs genres, séparés par des virgules. | `Drame,Comédie` |
| **Description** | Rédiger le résumé qui apparaîtra sur la carte de la série. | `Un chef reprend le restaurant familial.` |
| **Ajouter la série** | Vérifier les champs, déclencher la création via l’API, ajouter la série au catalogue local et réinitialiser le formulaire. | Cliquer après avoir rempli les champs. |

Dans le code actuel, **les quatre champs sont obligatoires**. Si un champ est vide, un message s’affiche sous ce champ et l’ajout est bloqué.

> La mention « facultative » affichée à côté de **Description** est à corriger : la validation actuelle exige une description. L’ajout au catalogue local et la remise à zéro du formulaire ont lieu sans attendre la confirmation de l’API.

## Recherche, filtres et boutons du catalogue

| Élément | Rôle | État dans le code actuel |
| --- | --- | --- |
| **Recherche** | Retrouver une série en saisissant une partie de son nom. | À finaliser : le module ne dispose pas du tableau de séries ni de la fonction d’affichage. |
| **Genre** | Limiter les résultats au genre sélectionné. | À finaliser : la génération des options et le filtrage utilisent un tableau non défini dans le module. |
| **Langues** | Filtrer les séries selon leur langue. | Sélecteur présent, mais options et filtrage non raccordés. |
| **Réinitialiser** | Remettre les champs de recherche et les filtres à leurs valeurs initiales. | Réinitialise le formulaire, mais ne relance pas l’affichage du catalogue. |
| **Supprimer** — affiché « Suprimer » | Demander une confirmation, envoyer la demande de suppression à l’API, puis recharger le catalogue. | Logique de suppression présente. |
| **Modifier** | Permettre la modification des informations d’une série. | À finaliser : formulaire d’édition absent et appel de mise à jour incomplet. |

Le compteur indique le nombre de séries affichées. Chaque carte présente une affiche, un titre, les genres, un résumé et les boutons d’action. Une image par défaut est utilisée lorsqu’aucune affiche n’est disponible.

## Technologies

**HTML5**, **Tailwind CSS**, **JavaScript avec modules ES**, **Axios** et **API SérieScope**.

Le versionnement est assuré avec **Git et GitHub**, et le suivi des tâches avec **Jira**.

## Structure du projet

Structure principale de la version modulaire :

| Chemin | Rôle |
| --- | --- |
| `index.html` | Interface, formulaires, zone du catalogue et chargement de `src/main.js`. |
| `readme.md` | Présentation du projet et guide d’utilisation. |
| `asset/image_par_defaut.webp` | Affiche de remplacement pour les séries sans image. |
| `src/main.js` | Chargement initial des séries, validation du formulaire et gestion du clic sur le bouton d’ajout. |
| `src/services/api.js` | Configuration de l’instance Axios utilisée pour contacter l’API. |
| `src/services/serieService.js` | Fonctions de consultation, création, modification et suppression des séries via l’API. |
| `src/ui/cards.js` | Création des cartes, compteur et boutons de suppression et de modification. |
| `src/ui/form.js` | Récupération des champs, préparation de la série, lancement de la création et remise à zéro du formulaire. |
| `src/ui/filters.js` | Logique de recherche par nom et de filtrage par genre, dont l’intégration reste à terminer. |
| `src/data/store.js` | Fichier actuellement vide. |
| `src/ui/notify.js` | Fichier actuellement vide. |
| `tailwind.config.js` | Fichier actuellement vide ; Tailwind est chargé par CDN dans `index.html`. |
| `serie_scopt.png` | Capture du formulaire à ajouter à la racine pour l’afficher dans ce README. |

## Installation

```bash
git clone https://github.com/younes-ettaya/S-rieScope.git
cd S-rieScope
```

Ouvrir le projet dans **VS Code**, puis lancer `index.html` avec l’extension **Live Server**. Une connexion Internet est nécessaire pour charger l’API et les dépendances externes.

## Suivi du projet

La capture ci-dessous présente le suivi des tâches du projet sur Jira.

![Suivi des tâches SérieScope sur Jira](https://github.com/user-attachments/assets/1f76a0e0-fce5-4485-9888-080fd1c11c90)

## Auteur

**Younes ET-TAYA** — Apprenant développeur web à **YouCode**.

