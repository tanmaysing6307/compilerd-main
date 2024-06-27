const { exec } = require('child_process');
const fs = require('fs');

const compileAndRunSwift = (code) => {
    return new Promise((resolve, reject) => {
        const fileName = 'program.swift';
        fs.writeFileSync(fileName, code);

        exec(`swift ${fileName}`, (error, stdout, stderr) => {
            if (error) {
                reject(stderr);
            } else {
                resolve(stdout);
            }
        });
    });
};

module.exports = { compileAndRunSwift };
