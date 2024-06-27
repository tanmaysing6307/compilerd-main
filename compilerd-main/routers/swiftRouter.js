const express = require('express');
const { runSwiftCode } = require('../controllers/swiftController');
const router = express.Router();

router.post('/swift', runSwiftCode);

module.exports = router;
