const express = require('express');
const { runJavaScriptCode } = require('../controllers/javascriptController');
const router = express.Router();

router.post('/javascript', runJavaScriptCode);

module.exports = router;
