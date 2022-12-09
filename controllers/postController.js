const User = require("../models/Posts");

// Display posts from  all Users.
exports.posts_list = (req, res) => {
    res.send("NOT IMPLEMENTED: Post list");
};

// Display all posts from all User.
exports.posts_user = (req, res) => {
    res.send(`NOT IMPLEMENTED: Author detail: ${req.params.id}`);
};