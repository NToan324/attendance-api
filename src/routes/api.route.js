const express = require('express');
const router = express.Router();
const formController = require('../controllers/api.controller');

router.post('/form-submit', formController.submit);

module.exports = router;