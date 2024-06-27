const { exec } = require('child_process');
const fs = require('fs');

const compileAndRunCSharp = (code) => {
    return new Promise((resolve, reject) => {
        const fileName = 'Program.cs';
        fs.writeFileSync(fileName, code);

        exec(`dotnet run ${fileName}`, (error, stdout, stderr) => {
            if (error) {
                reject(stderr);
            } else {
                resolve(stdout);
            }
        });
    });
};

module.exports = { compileAndRunCSharp };
