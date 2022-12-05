const router = require('express').Router();
const { Comments } = require('../../models');

// The `/api/comments` endpoint

// find all comments
router.get('/', (req, res) => {
  Comments.findAll()
    .then((commentsData) => {
      res.json(commentsData);
    });

});

// find a single comment by its `id`
router.get('/:id', (req, res) => {
  Comments.findByPk(req.params.id)
    .then((commentData) => {
      res.json(commentData);
    });
});

// create a new comment
router.post('/', (req, res) => {
  Comments.create(req.body)
    .then((newComment) => {
      res.json(newComment);
    })
    .catch((err) => {
      res.json(err);
    });
});

// update a comment name by its `id` value
router.put('/:id', (req, res) => {
  Comments.update(
    { body: req.body.body },
    {
      where: {
        id: req.params.id
      },
    }
  )
    .then((upComment) => {
      res.json(upComment);
    })
    .catch((err) => {
      res.json(err);
    });
});

// delete a comment by its `id` value
router.delete('/:id', (req, res) => {
  Comments.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((deletedComment) => {
      res.json(deletedComment);
    })
    .catch((err) => res.json(err));

});

module.exports = router;
