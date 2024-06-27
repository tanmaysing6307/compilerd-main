const express = require('express')
const router = express.Router()

const codeRouter = require('./routers/code.router')

router.use('/', codeRouter)

module.exports = router




const csharpRouter = require('./routers/csharpRouter');
const javascriptRouter = require('./routers/javascriptRouter');
const swiftRouter = require('./routers/swiftRouter');


router.use('/api', csharpRouter);
router.use('/api', javascriptRouter);
router.use('/api', swiftRouter);

module.exports = router;
