var express = require('express');
var router = express.Router();
var controller = require('../controllers/user');

/* set users api. */
router.get('/', controller.getUsers);


module.exports = router;
