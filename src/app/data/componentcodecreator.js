const fs = require('fs');
const path = require('path');

const componentsDir = '../component'; // Path to your components folder
const outputFile = './data/componentscode.js'; // Path to your output file
const componentscode = {};

// Function to read a file and return its content
const readFile = (filePath) => {
    try {
        const data = fs.readFileSync(filePath, 'utf-8');
        console.log(data)
        return data;
    } catch (err) {
        console.error(`Error reading file ${filePath}:`, err);
        return null;
    }
};

// Function to convert JavaScript code to Markdown code block
const jsToMarkdown = (code) => {
    // Escape backticks in the code
 
    return `\`\`\`javascript\n${code}\n\`\`\`\n`;
};



// Get all files in the components directory
const files = fs.readdirSync(componentsDir);

// Iterate through each file
files.forEach((file) => {
    const filePath = path.join(componentsDir, file);
    const fileStat = fs.statSync(filePath);
 
    // Check if it's a file (not a directory)
    if (fileStat.isFile() && (path.extname(file) === '.js' || path.extname(file) === '.jsx')) {
        const componentName = path.basename(file, path.extname(file)); // Get component name without extension
        const code = readFile(filePath);

        if (code) {
            componentscode[componentName] = jsToMarkdown(code);
        }
    }
});

// Generate the output JavaScript code
const outputCode = `
const componentscode = ${JSON.stringify(componentscode, null, 2)};

export default componentscode;
`;

// Write the output code to the output file
fs.writeFileSync(outputFile, outputCode);

console.log('Component code converted to Markdown and saved to:', outputCode);
