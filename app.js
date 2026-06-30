/**
 * 🧪 mon-projet-test - app.js
 * Ce fichier simule l'application d'un développeur qui utilise ta dépendance.
 */

// 1. IMPORTATION DE LA FONCTION SÉCURITÉ
// Grâce à la syntaxe de déstructuration { maskToken }, on extrait la fonction 
// spécifique que notre package 'npm-labs' a mise à disposition (exportée).
const { maskToken } = require('npm-labs');

// 2. RÉCUPÉRATION DU SECRET
// On récupère le token secret depuis les variables d'environnement (Bonne pratique !).
// Si aucune variable n'est définie, on utilise une fausse clé par défaut pour le test.
const monSecretSensible = process.env.API_TOKEN || "npm_secret_token_123456789xyz";

console.log("🚀 Démarrage de l'application de démonstration...");
console.log("-------------------------------------------------------");

// ❌ MAUVAISE PRATIQUE DE SÉCURITÉ :
// Logger un token en clair. Si ce code tourne sur un serveur, la clé privée sera écrite 
// dans les fichiers de logs de l'entreprise, accessibles à trop de monde (ou à des hackers).
// console.log("Mon Secret (DANGEREUX) :", monSecretSensible);


// ✅ BONNE PRATIQUE DE SÉCURITÉ (Sensibilisation) :
// On utilise notre dépendance 'npm-labs' pour nettoyer la donnée avant de l'afficher.
console.log("[Système] Préparation de l'affichage des logs système...");

// Appel de la fonction de notre package npm !
const secretSecurise = maskToken(monSecretSensible);

console.log("\nRésultat de l'analyse par le package 'npm-labs' :");
console.log(`-> Clé masquée pour les logs : ${secretSecurise}`);

console.log("-------------------------------------------------------");
console.log("✅ Test réussi : La dépendance a traité le secret en toute sécurité !");
