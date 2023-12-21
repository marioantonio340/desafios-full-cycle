const router = require('express').Router();
const peopleController = require('./controller/PeopleController');

router
.get('/', peopleController.getAll)
.post('/create', peopleController.create)

module.exports = router