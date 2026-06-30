# Labs for npm usage and best practices

> **Learning Project**: This repository is a "consumer" project designed to test the [npm-labs] dependency and understand best practices for package management and security in npm.

# Learning Objectives

This project aims to demonstrate and apply several key concepts:
* **Installation and usage of an external dependency** (the `npm-labs` package).
* **Managing the `.gitignore` file** to protect sensitive data and avoid overloading Git (exclusion of `node_modules` and `.env`).
* **Security of secrets (Tokens, API keys)** by using environment variables instead of hardcoding them in the source code.
* **The role of `package-lock.json`** to ensure identical versions between developers.

# Getting Started

1. Clone this repository to your local machine.
2. Install the dependencies defined in the `package-lock.json`:

```bash
npm install
```
