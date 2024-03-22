const { Router } =  require('express');
const controllers = require('../controllers');

const router = Router();

router.get('/', (req, res) => res.send('Welcome to Rick And Morty API'))

router.post('/randm', controllers.createUser);
router.get('/randm', controllers.getAllUsers);

module.exports = router;