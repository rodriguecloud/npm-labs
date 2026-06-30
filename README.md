# 🧪 Laboratoire d'utilisation npm (mon-projet-test)

> **Projet d'apprentissage** : Ce dépôt est un projet "consommateur" conçu pour tester la dépendance [npm-labs] et comprendre les bonnes pratiques de gestion des packages et de sécurité dans l'écosystème Node.js/npm.

## 🎯 Objectifs pédagogiques

Ce projet a pour but de démontrer et d'appliquer plusieurs concepts clés :
* **L'installation et l'utilisation d'une dépendance externe** (le package `npm-labs`).
* **La gestion du fichier `.gitignore`** pour protéger les données sensibles et éviter de surcharger Git (exclusion de `node_modules` et `.env`).
* **La sécurité des secrets (Tokens, API keys)** en utilisant les variables d'environnement au lieu de les écrire "en dur" dans le code source.
* **Le rôle du `package-lock.json`** pour garantir des versions identiques entre les développeurs.

## 🚀 Installation

1. Clone ce dépôt sur ta machine locale.
2. Installe les dépendances définies dans le `package-lock.json` :

```bash
npm install
