const {Router} = require('express');
const router = Router();
const jobController = require('../controllers/jobController');

router.get('/home', jobController.home);

router.post('/home', jobController.insert);

router.get('/profile/:id', jobController.profile);

router.get('/delete/:id', jobController.delete);

module.exports = router;