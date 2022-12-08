const router = require('express').Router();
const { Users, Posts } = require('../../models');

// The `/api/users` endpoint


// find all users
// be sure to include their associated Posts
//await User.findAll({ include: Posts });
router.get('/', (req, res) => {
  Users.findAll({ include: Posts }).then((usersData) => {
    res.json(usersData);
  });
});


// find one user by their `id` value
// be sure to include its associated Posts
router.get('/:id', (req, res) => {
  Users.findByPk(req.params.id, { include: Posts }).then((userData) => {
    res.json(userData);
  });
});


// create a new user
router.post('/', (req, res) => {
  Users.create(req.body)
    .then((newUsers) => {
      res.json(newUsers);
    })
    .catch((err) => {
      res.json(err);
    });
});

// update a username by its userid value
router.put('/:id', (req, res) => {
  console.log(req.body);
  Users.update(
    { username: req.body.username },
    {
      where: {
        id: req.params.id
      },
    }
  )
    .then((upUsername) => {
      res.json(upUsername);
    })
    .catch((err) => {
      res.json(err);
    });
});

// delete route for a user by its `id` value

router.delete('/:id', (req, res) => {
  Users.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((deletedUser) => {
      res.json(deletedUser);
    })
    .catch((err) => res.json(err));
});

module.exports = router;
