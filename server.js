// Dependencies
const express = require('express');
const routes = require('./controllers');

const sequelize = require('sequelize');
const exphbs = require('express-handlebars');
const path = require('path');
const hbs = exphbs.create({});

// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 3001;

// Set Handlebars as the default template engine.
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// estabish static routing to public folder
// app.use(express.static(path.join(__dirname, 'public')));

// need express json?
app.use(express.json());

//THIS IS CRITICAL TO BE ABLE TO DO POST AND PUT
app.use(express.urlencoded({ extended: true }));


// establish modular routing through controllers folder
app.use(routes);



// Starts the server to begin listening
app.listen(PORT, () => {
  console.log('Server listening on: http://localhost:' + PORT);
});

// // Must call sync() to the db
// const db = require("./models");
// db.sequelize.sync()
//   .then(() => {
//     console.log("Synced db.");
//   })
//   .catch((err) => {
//     console.log("Failed to sync db: " + err.message);
//   });

