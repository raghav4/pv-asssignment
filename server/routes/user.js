const express = require('express');

const router = express.Router();
const validateObjectID = require('../middlewares/validateObjectId');
const userController = require('../controllers/user.controller');

router.get('/:id', validateObjectID, userController.getUser);

router.post('/', userController.addUser);

module.exports = router;
