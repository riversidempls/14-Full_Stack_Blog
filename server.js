// Dependencies
const express = require('express');
const controllers = require('./controllers');
const routes = require('./routes');
// const views = require('./views');




//establish routing to the users folder
const users = require("./routes/users");

const sequelize = require('sequelize');
const exphbs = require('express-handlebars');
const path = require('path');
const hbs = exphbs.create({});

// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 3001;

// Static folder
app.use(express.static(path.join(__dirname, 'public')))

// Set Handlebars as the default template engine.
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// view engine setup
app.set('views', path.join(__dirname, 'views/'));

app.engine('hbs', exphbs.engine({ defaultLayout: 'main', extname: '.hbs' }));
app.set('view engine', 'hbs');



//tell express to use this route
app.use(routes);
app.use('/users', users);

// estabish static routing to public folder
// app.use(express.static(path.join(__dirname, 'public')));

// need express json?
app.use(express.json());

//THIS IS CRITICAL TO BE ABLE TO DO POST AND PUT
app.use(express.urlencoded({ extended: true }));


// establish modular routing through controllers folder
app.use(controllers);



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

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});