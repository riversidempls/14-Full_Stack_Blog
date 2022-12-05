// Dependencies
const express = require('express');
const routes = require('./routes');

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
app.use(express.static(path.join(__dirname, 'public')));

// establish modular routing through routes folder
app.use(routes);

// need express json?
app.use(express.json());

// Starts the server to begin listening
app.listen(PORT, () => {
  console.log('Server listening on: http://localhost:' + PORT);
});
