const express = require('express');
const router = require('express').Router();
const apiRoutes = require('./api');
const { ensureAuth, ensureGuest } = require('../middleware/auth');
const { Posts } = require('../models');



router.use('/api', apiRoutes);


router.use((req, res) => {
  res.send("<h1>Hey dum dum, Wrong Route!</h1>")
});




module.exports = router;