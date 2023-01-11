const router = require("express").Router();
const notFound = require("../controller/main");

router.get('/', notFound);
router.post('/', notFound);
router.put('/', notFound);
router.patch('/', notFound);
router.delete('/', notFound);

module.exports = router;