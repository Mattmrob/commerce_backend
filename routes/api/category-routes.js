const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  try {
    const allCategories = await Category.findAll({
      include: [{model: Product}],
    });
    res.status(200).json(allCategories);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const categoryById = await Category.findByPk(req.params.id, {
      include: [{model: Product}],
    });

    if (!categoryById) {
      res.status(404).json({ message: 'No Category found with that id!' });
      return;
    }

    res.status(200).json(categoryById);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    const categoryData = await Category.create(req.body);
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const catUpdateById = await Category.update(
      {
        category_name: req.body.category_name
      },
      {
        where: {
          id: req.params.id
        }
      }
    );

    if (!catUpdateById) {
      res.status(404).json({ message: 'No Category found with that id to update!' });
      return;
    }

    res.status(200).json(catUpdateById);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const DeleteById = await Product.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!DeleteById) {
      res.status(404).json({ message: 'No Product found with that id to delete!' });
      return;
    }

    res.status(200).json(DeleteById);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
