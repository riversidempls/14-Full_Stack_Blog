// posts.js - posts route module.

var express = require('express');
var router = express.Router();


const post_controller = require("../controllers/postController");


const { Users, Posts } = require('../models');


///Try routing it to HBS view?

// lists out posts
router.get('/', async (req, res, next) => {
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