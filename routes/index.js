const router = require('express').Router();
const users = require('./users');
const posts = require('./posts');

router.use('/', posts);
router.use('/posts', posts);
router.use('/users', users);


module.exports = router;
