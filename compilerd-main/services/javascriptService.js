const { exec } = require('child_process');
const fs = require('fs');

const runJavaScript = (code) => {
    return new Promise((resolve, reject) => {
        const fileName = 'program.js';
        fs.writeFileSync(fileName, code);

        exec(`node ${fileName}`, (error, stdout, stderr) => {
            if (error) {
                reject(stderr);
            } else {
                resolve(stdout);
            }
        });
    });
};

module.exports = { runJavaScript };
