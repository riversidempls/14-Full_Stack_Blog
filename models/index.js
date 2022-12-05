// import models
const Users = require('./Users');
const Posts = require('./Posts');
const Comments = require('./Comments');


// Users has many Posts
// Posts has many Comments

Users.hasMany(Posts, {
    foreignKey: 'users_id',
    onDelete: 'CASCADE',
});

Posts.hasMany(Comments, {
    foreignKey: 'posts_id',
    onDelete: 'CASCADE',
});

// Posts.hasOne(Users, {
//     //     foreignKey: 'user_id',
//     //     onDelete: 'CASCADE',
// });
module.exports = {
    Users,
    Posts,
    Comments,
};
