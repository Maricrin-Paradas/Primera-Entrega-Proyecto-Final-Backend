
const router = require("express").Router();
const {getProducts, getProductById, createProduct, modifyProduct, delProduct} = require("../controller/productController");

router.get('/', getProducts);
router.post('/', createProduct);
router.get('/:id', getProductById);
router.put('/:id', modifyProduct);
router.delete('/:id', delProduct);

module.exports = router;