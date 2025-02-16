// Importation du module Express pour créer un serveur web
const express = require("express");

// Importation du module CORS pour permettre les requêtes depuis d'autres domaines (Cross-Origin Resource Sharing)
const cors = require("cors");

// Importation de l'instance Sequelize qui est configurée dans le fichier "database.js"
const sequelize = require("./database");

// Création d'une instance de l'application Express
const app = express();

// Middleware permettant de traiter les requêtes entrantes au format JSON
app.use(express.json());

// Activation du middleware CORS pour autoriser les requêtes externes
app.use(cors());

// Définition du port sur lequel le serveur va écouter les connexions
// Si une variable d'environnement PORT est définie, elle sera utilisée, sinon le port 5000 sera utilisé par défaut
const PORT = process.env.PORT || 5000;

// Synchronisation avec la base de données Sequelize
sequelize.sync().then(() => {
    // Affichage d'un message dans la console indiquant que la connexion à la base de données est établie
    console.log("Banque de données connectée");

    // Lancement du serveur Express qui écoute les requêtes sur le port spécifié
    app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
});
