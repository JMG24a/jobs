const {Router} = require('express');
const router = Router();
const jobController = require('../controllers/jobController');

router.get('/home', jobController.home);

router.post('/home', jobController.insert);

module.exports = router;