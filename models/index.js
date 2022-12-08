// import models
const Users = require('./Users');
const Posts = require('./Posts');
const Comments = require('./Comments');


// Users has many Posts

Users.hasMany(Posts, {
    foreignKey: 'users_id',
    onDelete: 'CASCADE',
});

// Posts has many Comments


Posts.hasMany(Comments, {
    foreignKey: 'posts_id',
    onDelete: 'CASCADE',
});

module.exports = {
    Users,
    Posts,
    Comments,
};
