// Function to toggle dark mode
/*function toggleDarkMode() {
    let body = document.body;
    let container = document.querySelector('.container');
    let toggle = document.getElementById('darkModeToggle');

    // Toggle dark mode class on body and container
    body.classList.toggle('dark-mode');
    container.classList.toggle('dark-mode');

    // Update button and editor styles for dark mode
    let editorTextarea = document.getElementById('code');
    let outputDiv = document.querySelector('.output');
    let compileButton = document.querySelector('.editor button:first-of-type'); // Compile & Run button
    let downloadButton = document.querySelector('.editor button:last-of-type'); // Download Code button

    editorTextarea.classList.toggle('dark-mode');
    outputDiv.classList.toggle('dark-mode');
    compileButton.classList.toggle('dark-mode');
    downloadButton.classList.toggle('dark-mode'); // Toggle dark mode class for download button

    // Update toggle label text
    if (toggle.checked) {
        toggle.nextElementSibling.textContent = 'Light Mode';
    } else {
        toggle.nextElementSibling.textContent = 'Dark Mode';
    }
}

// Function to compile code
function compileCode() {
    let language = document.getElementById('languageSelect').value;
    let code = document.getElementById('code').value;
    let input = document.getElementById('inputText').value;

    let result = '';

    // Example compilation logic based on language selected
    switch (language) {
        case 'html':
            result = code; // HTML doesn't need compilation, just display the code
            break;
        case 'css':
            result = `<style>${code}</style>`; // Embed CSS style
            break;
        case 'javascript':
            try {
                result = eval(code); // Evaluate JavaScript code
            } catch (error) {
                result = `JavaScript Error: ${error.message}`;
            }
            break;
        case 'python':
            // Example using an external API or server-side processing for Python (not implemented here)
            result = 'Python code compilation not supported in this demo.';
            break;
        default:
            result = 'Invalid language selection.';
    }

    // Display result in output area
    document.getElementById('output').textContent = result;
}

// Function to download code as a text file
function downloadCode() {
    let code = document.getElementById('code').value;
    let blob = new Blob([code], { type: 'text/plain' });
    let url = URL.createObjectURL(blob);
    let a = document.createElement('a');
    a.href = url;
    a.download = 'mycode.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}*/
// Function to toggle dark mode
function toggleDarkMode() {
    let body = document.body;
    let container = document.querySelector('.container');
    let toggle = document.getElementById('darkModeToggle');

    // Toggle dark mode class on body and container
    body.classList.toggle('dark-mode');
    container.classList.toggle('dark-mode');

    // Update button and editor styles for dark mode
    let editorTextarea = document.getElementById('code');
    let outputDiv = document.querySelector('.output');
    let compileButton = document.querySelector('.editor button:first-of-type'); // Compile & Run button
    let downloadButton = document.querySelector('.editor button:nth-of-type(2)'); // Download Code button

    editorTextarea.classList.toggle('dark-mode');
    outputDiv.classList.toggle('dark-mode');
    compileButton.classList.toggle('dark-mode');
    downloadButton.classList.toggle('dark-mode');

    // Update toggle label text
    if (toggle.checked) {
        toggle.nextElementSibling.textContent = 'Light Mode';
    } else {
        toggle.nextElementSibling.textContent = 'Dark Mode';
    }
}

// Function to compile code
function compileCode() {
    let language = document.getElementById('languageSelect').value;
    let code = document.getElementById('code').value;
    let input = document.getElementById('inputText').value;

    let result = '';

    // Example compilation logic based on language selected
    switch (language) {
        case 'html':
            result = code; // HTML doesn't need compilation, just display the code
            break;
        case 'css':
            result = `<style>${code}</style>`; // Embed CSS style
            break;
        case 'javascript':
            try {
                result = eval(code); // Evaluate JavaScript code
            } catch (error) {
                result = `JavaScript Error: ${error.message}`;
            }
            break;
        case 'python':
            // Example using an external API or server-side processing for Python (not implemented here)
            result = 'Python code compilation not supported in this demo.';
            break;
        case 'csharp':
            // Example for C# (not implemented here)
            result = 'C# code compilation not supported in this demo.';
            break;
        case 'swift':
            // Example for Swift (not implemented here)
            result = 'Swift code compilation not supported in this demo.';
            break;
        default:
            result = 'Invalid language selection.';
    }

    // Display result in output area
    document.getElementById('output').textContent = result;
}

// Function to download code as a text file
function downloadCode() {
    let code = document.getElementById('code').value;
    let blob = new Blob([code], { type: 'text/plain' });
    let url = URL.createObjectURL(blob);
    let a = document.createElement('a');
    a.href = url;
    a.download = 'mycode.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

// Function to share code
function shareCode() {
    let code = document.getElementById('code').value;

    // Copy code to clipboard
    navigator.clipboard.writeText(code)
        .then(() => {
            alert('Code copied to clipboard!');
        })
        .catch(err => {
            console.error('Failed to copy code: ', err);
            alert('Failed to copy code to clipboard.');
        });
}
