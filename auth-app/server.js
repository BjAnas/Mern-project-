require('dotenv').config({path: __dirname + '/../.env'});
const express = require('express');
const mongoose = require('mongoose');
const HOSTNAME = '127.0.0.1';
const cors = require('cors');
const userRoutes = require('./routes/auth')

const app = express();
//const PORT = process.env.PORT;
const PORT = process.env.PORT || 5000;
// Middleware
app.use(cors({
  origin : "http://localhost:3000",
  credentials : true,
}));
app.use(express.json());
//console.log(PORT);
const server = app.listen(PORT, HOSTNAME, ()=>{
  console.log(`Server is running at http://${HOSTNAME}:${PORT}`);
});
// MongoDB URI
//const MONGODB_URI = 'mongodb+srv://jackdunhill212:elrohecat12@projectmern1.5lzktv3.mongodb.net/?retryWrites=true&w=majority&appName=ProjectMern1';
const MONGODB_URI = 'mongodb://localhost:27017'

//Routes
//app.use('/api/user', userRoutes)
app.use('/api/auth', require('./routes/user')) 


// Connect to MongoDB
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB connected successfully');
    // Démarrez le serveur une fois connecté à MongoDB
    /*app.listen(PORT, HOSTNAME,  () => {
      console.log(`Server is running on port ${PORT}`);
    });*/
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });

// Routes
// Ajoutez vos routes ici

// Gestion des erreurs 404
app.use((req, res, next) => {
  res.status(404).send("Sorry can't find that!");
});

// Gestion des erreurs générales
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

