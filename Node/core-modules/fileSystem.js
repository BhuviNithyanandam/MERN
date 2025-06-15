// fs-demo.js
const fs = require('fs');
const path = require('path');

const directory = __dirname + '/testing-files';
console.log('directory', directory);

const filePath = path.join(directory, 'example.txt');
const dirPath = path.join(directory, 'my-folder');

// 1. Write a file (Sync & Async)
fs.writeFileSync(filePath, 'Hello, this is written synchronously.');
fs.writeFile(filePath, 'Overwritten asynchronously.', (err) => {
  if (err) throw err;
  console.log('1. File written asynchronously.');
});

// 2. Append to a file
fs.appendFileSync(filePath, '\nAppended this line.');
console.log('2. Line appended.');

// 3. Read a file (Sync & Async)
const content = fs.readFileSync(filePath, 'utf8');
console.log('3. File content (sync):', content);

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) throw err;
  console.log('4. File content (async):', data);
});

// 4. Check if file exists
if (fs.existsSync(filePath)) {
  console.log('5. File exists:', filePath);
}

// 5. Delete a file
// fs.unlinkSync(filePath);
// console.log('6. File deleted.');

// 6. Create a folder
if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath);
  console.log('7. Folder created:', dirPath);
}

// 7. Read contents of a directory
const files = fs.readdirSync(directory);
console.log('8. Files in current directory:', files);

// 8. Rename a file
const newFilePath = path.join(directory, 'renamed.txt');
fs.renameSync(filePath, newFilePath);
console.log('9. File renamed to:', newFilePath);

// 9. Delete directory
// fs.rmdirSync(dirPath);
// console.log('10. Folder deleted.');
