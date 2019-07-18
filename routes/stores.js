const router = required('express').Router();  

const StoresController = require('../controllers/storesController');


router.get('/', StoresController.index);
router.get('/new', StoresController.new);
router.get('/:id', StoresController.show);
router.get('/:id/edit', StoresController.edit);
router.post('/', StoresController.create);
router.post('/:id', StoresController.update);
router.post('/:id/delete', StoresController.destroy);

module.exports = router;