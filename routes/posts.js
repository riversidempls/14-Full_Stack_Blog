// posts.js - posts route module.

var express = require('express');
var router = express.Router();


const post_controller = require("../controllers/postController");


const { Users, Posts } = require('../models');
//
router.get("/", (req, res, next) => {
    res.send("Welcome to the users posts page.");
});

///Try routing it to HBS view?

// lists out posts
router.get("/posts", async (req, res, next) => {
    userdata = await Posts.findAll()
    const Posts = postsdata.map((Posts) => Posts.get({ plain: true }));
    res.render(Posts.body


        // 'posts', {
        // title: "Users Blog Posts ",
        // posts: posts
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