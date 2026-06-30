/**
 * ============================================================================
 * 🧪 PROJET LABO : Test de la dépendance 'npm-labs'
 * ============================================================================
 */

// 1. IMPORTATION DES DÉPENDANCES
// On importe notre package npm-labs qui se trouve dans le dossier node_modules.
// Node.js sait automatiquement aller le chercher là-bas.
//
// ⚠️ Rappel sécurité : un `require()` exécute immédiatement le code de premier
// niveau du package importé. Si le package vient d'une source non vérifiée,
// vérifie sa légitimité (npm audit, nombre de téléchargements, dépôt source)
// avant de l'exécuter, surtout dans un environnement contenant des secrets.
const npmLabs = require('npm-labs');

// 2. BONNE PRATIQUE SÉCURITÉ : GESTION DES SECRETS
// RÈGLE D'OR : On n'écrit JAMAIS un secret "en dur" dans le code source.
// Mauvaise pratique ❌ :
// const monToken = "npm_A1B2C3D4E5F6...";
//
// Bonne pratique ✅ : on le récupère depuis les variables d'environnement,
// ET on échoue explicitement s'il est absent plutôt que de continuer
// silencieusement avec une valeur factice.
const apiToken = process.env.API_TOKEN;

if (!apiToken) {
    console.error("❌ Erreur : la variable d'environnement API_TOKEN est manquante.");
    console.error("   Définis-la avant de lancer le script, par exemple :");
    console.error("   API_TOKEN=xxxx node test-npm-labs.js");
    process.exit(1);
}

// Petite fonction utilitaire pour ne jamais afficher un secret en clair.
// On ne montre que les 4 derniers caractères, le reste est masqué.
function maskSecret(secret) {
    if (secret.length <= 4) return "****";
    return "*".repeat(secret.length - 4) + secret.slice(-4);
}

// 3. EXÉCUTION DU CODE
console.log("🚀 Démarrage de l'application de test...");
console.log("--------------------------------------------------");

try {
    console.log("Appel de la dépendance npm-labs :");

    // Selon la façon dont tu as codé npm-labs, cela va exécuter son contenu.
    // Si c'était une fonction, on ferait : npmLabs.maFonction()
    //
    // ⚠️ Attention : afficher tout l'objet exporté peut divulguer des infos
    // internes si le module exporte plus que prévu. À utiliser uniquement
    // en contexte de lab/debug, jamais en production.
    console.log(npmLabs);

    console.log("--------------------------------------------------");
    console.log("✅ Succès : la dépendance a bien été chargée et exécutée !");
} catch (erreur) {
    // BONNE PRATIQUE : toujours anticiper que le code externe peut planter.
    console.error("❌ Erreur lors de l'utilisation de npm-labs :");
    console.error(erreur.message);
}

// Affichage éducatif pour le token (uniquement pour le lab)
// On n'affiche JAMAIS le token en clair, même dans des logs de test :
// les logs finissent trop souvent dans des historiques, des outils de
// monitoring ou des captures d'écran partagées par erreur.
console.log(`(Info sécu) Token chargé (masqué) : ${maskSecret(apiToken)}`);
