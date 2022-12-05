const router = require('express').Router();
const { Posts, Comments } = require('../../models');

// The `/api/posts` endpoint

// get all posts
router.get('/', (req, res) => {
  // find all posts
  // be sure to include its associated User and Comments data

  Posts.findAll({
    include: [
      // {
      //   model: Users,
      //   required: true
      // },
      {
        model: Comments,
        required: false
      }
    ]
  }).then((postData) => {
    res.json(postData);
  });
});

// get one post
// find a single post by its `id`
// be sure to include its associated Comment data
router.get('/:id', (req, res) => {
  Posts.findByPk(req.params.id, {
    include: [
      {
        model: Comments,
        required: false
      }
    ]
  }

  ).then((postData) => {
    res.json(postData);
  });
});

// create new post
router.post('/', (req, res) => {
  /* req.body should look like this...
 {
      "title": "Why Are All the Thing?",
      "body": "So many things, so little time.",
      "users_id": 3
    }
  */

  Posts.create(req.body)
    .then((newPost) => {
      res.json(newPost);
    })
    .catch((err) => {
      res.json(err);
    });
});

// update post title using its id
router.put('/:id', (req, res) => {
  console.log(req.body);
  // update post title data
  Posts.update(
    { title: req.body.title },
    {
      where: {
        id: req.params.id
      },
    }
  )
    .then((upTitle) => {
      res.json(upTitle)
    })
    .catch((err) => {
      res.json(err);
    });
});


// delete one post by its `id` value
router.delete('/:id', (req, res) => {
  Posts.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((deletedPost) => {
      res.json(deletedPost);
    })
    .catch((err) => res.json(err));
});

module.exports = router;
