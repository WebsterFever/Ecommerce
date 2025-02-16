// Importation du module Sequelize pour interagir avec une base de données SQL.
const { Sequelize } = require("sequelize");

// Chargement des variables d'environnement à partir d'un fichier .env.
require("dotenv").config();

// Création d'une instance Sequelize en utilisant les informations de connexion stockées dans les variables d'environnement.
const sequelize = new Sequelize(
    process.env.DB_NAME,  // Nom de la base de données (DB_NAME) récupéré depuis le fichier .env
    process.env.DB_USER,  // Nom d'utilisateur pour se connecter à la base de données (DB_USER)
    process.env.DB_PASS,  // Mot de passe pour l'utilisateur de la base de données (DB_PASS)
    {
        host: process.env.DB_HOST,    // Adresse du serveur de base de données (DB_HOST)
        port: process.env.DB_PORT,    // Port sur lequel le serveur de base de données écoute (DB_PORT)
        dialect: "postgres",          // Type de base de données utilisé, ici PostgreSQL
        logging: false,                // Désactive les logs SQL (devrait être 'logging' au lieu de 'loggin' pour fonctionner correctement)
    }
);

// Exportation de l'instance Sequelize pour pouvoir l'utiliser dans d'autres fichiers.
module.exports = sequelize;
