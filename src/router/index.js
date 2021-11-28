const {Router} = require('express');
const router = Router();
const jobController = require('../controllers/jobController');

router.get('/home', jobController.home);

module.exports = router;