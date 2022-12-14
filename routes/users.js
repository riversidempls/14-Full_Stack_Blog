// users.js - users route module.

var express = require('express');
var router = express.Router();


const user_controller = require("../controllers/userController");


const { Users, Posts } = require('../models');
//
router.get("/", (req, res, next) => {
    res.send("Welcome to the users list page.");
});

///Try routing it to HBS view?


// lists out users
router.get('/index', async (req, res, next) => {
    userdata = await Users.findAll({ include: Posts })
    const users = userdata.map((user) => user.get({ plain: true }));
    res.render('users/index', {
        title: "Blog Users",
        username: users
    });
});

// lists out posts
router.get('/posts', async (req, res, next) => {
    postdata = await Posts.findAll()
    const posts = postdata.map((posts) => posts.get({ plain: true }));
    res.render('users/posts', {
        title: "Blog Posts",
        body: posts
    });
});



//About page route
router.get("/about", function (req, res) {
    res.send("About these users.");
});

router.get("/cool", function (req, res) {
    res.send("Central Graders are soooo cooooo!")
})
module.exports = router;