const router = require('express').Router();
const { Product, Category, Tag, ProductTag } = require('../../models');

// The `/api/products` endpoint

// get all products
router.get('/', async (req, res) => {
  try {
    const allProducts = await Product.findAll({
      include: [{model: Category}, {model: Tag}],
    });
    res.status(200).json(allProducts);
  } catch (err) {
    res.status(500).json(err);
  }
});

// get one product
router.get('/:id', async (req, res) => {
  try {
    const productById = await Product.findByPk(req.params.id, {
      include: [{model: Category}, {model: Tag}],
    });

    if (!productById) {
      res.status(404).json({ message: 'No Product found with that id!' });
      return;
    }

    res.status(200).json(productById);
  } catch (err) {
    res.status(500).json(err);
  }
});

// create new product
router.post('/', async (req, res) => {

  try {
    const productData = await Product.create(req.body)
    res.status(200).json(productData);
  } catch (err) {
    res.status(400).json(err);
  }

  /* STARTER CODE SOLUTION?
    {
      product_name: "Basketball",
      price: 200.00,
      stock: 3,
      tagIds: [1, 2, 3, 4]
    }
  */
  // Product.create(req.body)
  //   .then((product) => {
  //     // if there's product tags, we need to create pairings to bulk create in the ProductTag model
  //     if (req.body.tagIds.length) {
  //       const productTagIdArr = req.body.tagIds.map((tag_id) => {
  //         return {
  //           product_id: product.id,
  //           tag_id,
  //         };
  //       });
  //       return ProductTag.bulkCreate(productTagIdArr);
  //     }
  //     // if no product tags, just respond
  //     res.status(200).json(product);
  //   })
  //   .then((productTagIds) => res.status(200).json(productTagIds))
  //   .catch((err) => {
  //     console.log(err);
  //     res.status(400).json(err);
  //   });
});

// update product
router.put('/:id', async (req, res) => {
  // update product data

  try {
    const updateById = await Product.update(
      {
        product_name: req.body.product_name,
        price: req.body.price,
        stock: req.body.stock,
        category_id: req.body.category_id
      },
      {
        where: {
          id: req.params.id
        }
      }
    );

    if (!updateById) {
      res.status(404).json({ message: 'No Product found with that id to update!' });
      return;
    }

    res.status(200).json(updateById);
  } catch (err) {
    res.status(500).json(err);
  }

  //  STARTER CODE SOLUTION?
  // Product.update(req.body, {
  //   where: {
  //     id: req.params.id,
  //   },
  // })
  //   .then((product) => {
  //     if (req.body.tagIds && req.body.tagIds.length) {

  //       ProductTag.findAll({
  //         where: { product_id: req.params.id }
  //       }).then((productTags) => {
  //         // create filtered list of new tag_ids
  //         const productTagIds = productTags.map(({ tag_id }) => tag_id);
  //         const newProductTags = req.body.tagIds
  //           .filter((tag_id) => !productTagIds.includes(tag_id))
  //           .map((tag_id) => {
  //             return {
  //               product_id: req.params.id,
  //               tag_id,
  //             };
  //           });

  //         // figure out which ones to remove
  //         const productTagsToRemove = productTags
  //           .filter(({ tag_id }) => !req.body.tagIds.includes(tag_id))
  //           .map(({ id }) => id);
  //         // run both actions
  //         return Promise.all([
  //           ProductTag.destroy({ where: { id: productTagsToRemove } }),
  //           ProductTag.bulkCreate(newProductTags),
  //         ]);
  //       });
  //     }

  //     return res.json(product);
  //   })
  //   .catch((err) => {
  //     // console.log(err);
  //     res.status(400).json(err);
  //   });
});

router.delete('/:id', async (req, res) => {
  try {
    const DeleteById = await Product.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!DeleteById) {
      res.status(404).json({ message: 'No Category found with that id to delete!' });
      return;
    }

    res.status(200).json(DeleteById);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
