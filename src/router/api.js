const {Router} = require('express');
const router = Router();
const jobApiController = require('../controllers/jobApiController');

router.get('/', jobApiController.selectAll);

router.post('/', jobApiController.insert);

router.post('/update/:id', jobApiController.put);

router.get('/delete/:id', jobApiController.delete);

module.exports = router;