const router = require('express').Router();

const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  var allCategories = Category.findAll({
    include : {Product}
  })
  res.json(allCategories);
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  var idCategory = Category.findOne(req.params.id, {
    include : {Product}
  })
  res.json(idCategory);
});

router.post('/', (req, res) => {
  // create a new category
  Category.create({
    category_name: req.body.category_name
  })
  .then((newCategory) => {
    res.json(newCategory);
  })
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update({
    where : {category_id: req.params.id}
  })
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      category_id: req.params.id
    }
  })
});

module.exports = router;
