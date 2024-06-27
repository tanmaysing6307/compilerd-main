// routers/csharpRouter.js
const express = require('express');
const { runCSharpCode } = require('../controllers/csharpController');
const router = express.Router();

router.post('/csharp', runCSharpCode);

module.exports = router;
