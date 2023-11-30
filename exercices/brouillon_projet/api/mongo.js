const mongoose = require('mongoose');

// const { Schema } = mongoose;

// Connexion à la base de données
mongoose.connect(
  'mongodb+srv://ProjetEvo:Vinci2023@projetweb.u3w9kax.mongodb.net/?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
);

// Vérifier si la connexion est réussie
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Erreur de connexion à la base de données :'));
db.once('open', () => {
  console.log('Connexion à la base de données établie');
});

// `UserModel` is a "Model", a subclass of `mongoose.Model`.
// const UserModel = mongoose.model('User', new Schema({ pseudo: String, password: String }));

// pour éviter d'avoir des doublons il faut faire une verification sur le schéma:
// si il existe alors il ne faut pas l'ajouter
// dans le cas contraire on peut ajouter
