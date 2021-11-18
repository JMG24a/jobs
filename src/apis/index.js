const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    
})

router.post('/', (req, res) => {
    console.log(req.body)
    res.send('guardado')
})

router.put('/:id', (req, res) => {

})

router.delete('/:id', (req, res) => {

})

module.exports = router;