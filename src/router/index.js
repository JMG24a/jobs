const {Router} = require('express');
const router = Router();
const jobController = require('../controllers/jobController');

router.get('/home', jobController.home);

router.post('/home', jobController.insert);

router.post('/updateE/:id', jobController.updateE);

router.get('/profile/:id', jobController.profile);

router.post('/Address/:id', jobController.insertAddress);

router.post('/updateD/:id', jobController.updateD);

router.post('/Assigned/:id', jobController.insertAssigned);

router.post('/updateP/:id', jobController.updateP);

router.get('/delete/:id', jobController.delete);

router.post('/jobs/:id', jobController.jobs)

module.exports = router;