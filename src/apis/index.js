const express = require('express');
const router = express.Router();
const jobController = require('../controllers/jobController');

router.get('/', jobController.selectAll);

router.post('/', jobController.insert)

router.put('/:id', jobController.edit)

router.delete('/:id', jobController.delete)

module.exports = router;