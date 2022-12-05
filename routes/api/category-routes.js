const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  //await User.findAll({ include: Invoice });

  Category.findAll({ include: Product }).then((categoryData) => {
    res.json(categoryData);
  });

});


// find one category by its `id` value
// be sure to include its associated Products
router.get('/:id', (req, res) => {
  Category.findByPk(req.params.id, { include: Product }).then((categoryData) => {
    res.json(categoryData);
  });
});


// create a new category
router.post('/', (req, res) => {
  Category.create(req.body)
    .then((newCategory) => {
      res.json(newCategory);
    })
    .catch((err) => {
      res.json(err);
    });
});

// update a category by its `id` value
router.put('/:id', (req, res) => {
  Category.update(
    { category_name: req.body.category_name },
    {
      where: {
        id: req.params.id
      },
    }
  )
    .then((upCategory) => {
      res.json(upCategory);
    })
    .catch((err) => {
      res.json(err);
    });
});

// delete route for a category by its `id` value

router.delete('/:id', (req, res) => {
  Category.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((deletedCategory) => {
      res.json(deletedCategory);
    })
    .catch((err) => res.json(err));
});

module.exports = router;
