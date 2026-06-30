/**
 * 🧪 my-test-project - app.js
 * This file simulates the application of a developer who uses your dependency.
 */

// 1. IMPORT SECURITY FUNCTION
// Thanks to the destructuring syntax { maskToken }, we extract the specific function
// that our 'npm-labs' package has made available (exported).
const { maskToken } = require('npm-labs');

// 2. RETRIEVING THE SECRET
// We retrieve the secret token from environment variables (Good practice!).
// If no variable is defined, we use a fake key by default for testing.
const mySecretSensitive = process.env.API_TOKEN || "npm_secret_token_123456789xyz";

console.log("🚀 Starting the demonstration application...");
console.log("-------------------------------------------------------");

// ❌ BAD SECURITY PRACTICE:
// Logging a token in plain text. If this code runs on a server, the private key will be written
// in the company's log files, accessible to too many people (or hackers).
// console.log("My Secret (DANGEROUS) :", mySecretSensitive);


// ✅ GOOD SECURITY PRACTICE (Awareness):
// We use our 'npm-labs' dependency to clean the data before displaying it.
console.log("[System] Preparing system log display...");

// Call the function from our npm package!
const secureSecret = maskToken(mySecretSensitive);

console.log("\nResult of analysis by the 'npm-labs' package:");
console.log(`-> Masked key for logs: ${secureSecret}`);

console.log("-------------------------------------------------------");
console.log("✅ Test successful: The dependency processed the secret securely!");
