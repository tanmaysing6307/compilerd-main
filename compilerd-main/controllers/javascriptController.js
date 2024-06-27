const { runJavaScript } = require('../services/javascriptService');

const runJavaScriptCode = async (req, res) => {
    try {
        const output = await runJavaScript(req.body.code);
        res.send(output);
    } catch (error) {
        res.status(500).send(error);
    }
};

module.exports = { runJavaScriptCode };
