const { compileAndRunSwift } = require('../services/swiftService');

const runSwiftCode = async (req, res) => {
    try {
        const output = await compileAndRunSwift(req.body.code);
        res.send(output);
    } catch (error) {
        res.status(500).send(error);
    }
};

module.exports = { runSwiftCode };
