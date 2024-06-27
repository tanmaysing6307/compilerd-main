const { compileAndRunCSharp } = require('../services/csharpService');

const runCSharpCode = async (req, res) => {
    try {
        const output = await compileAndRunCSharp(req.body.code);
        res.send(output);
    } catch (error) {
        res.status(500).send(error);
    }
};

module.exports = { runCSharpCode };
