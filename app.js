/**
 * ============================================================================
 * 🧪 PROJET LABO : Test de la dépendance 'npm-labs'
 * ============================================================================
 */

// 1. IMPORTATION DES DÉPENDANCES
// On importe notre package npm-labs qui se trouve dans le dossier node_modules.
// Node.js sait automatiquement aller le chercher là-bas.
const npmLabs = require('npm-labs');

// 2. BONNE PRATIQUE SÉCURITÉ : GESTION DES SECRETS
// Imagine que ton code ait besoin d'un NPM_TOKEN ou d'une clé d'API pour fonctionner.
// RÈGLE D'OR : On n'écrit JAMAIS un secret "en dur" dans le code source.
// Si on le fait et qu'on pousse sur GitHub, un hacker le trouvera en quelques secondes.

// Mauvaise pratique ❌ :
// const monToken = "npm_A1B2C3D4E5F6..."; 

// Bonne pratique ✅ :
// On récupère le secret depuis les variables d'environnement du système ou de la CI/CD.
const apiToken = process.env.API_TOKEN || "Token non fourni";


// 3. EXÉCUTION DU CODE
console.log("🚀 Démarrage de l'application de test...");
console.log("--------------------------------------------------");

try {
    // On simule l'utilisation de la dépendance npm-labs
    console.log("Appel de la dépendance npm-labs :");
    
    // Selon la façon dont tu as codé npm-labs, cela va exécuter son contenu
    // Si c'était une fonction, on ferait : npmLabs.maFonction()
    console.log(npmLabs);

    console.log("--------------------------------------------------");
    console.log("✅ Succès : La dépendance a bien été chargée et exécutée !");

} catch (erreur) {
    // BONNE PRATIQUE : Toujours anticiper que le code externe peut planter.
    console.error("❌ Erreur lors de l'utilisation de npm-labs :");
    console.error(erreur.message);
}

// Affichage éducatif pour le token (uniquement pour le lab)
console.log(`(Info sécu) Valeur du token sécurisé : ${apiToken}`);
