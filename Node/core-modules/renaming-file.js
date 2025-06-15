const fs = require('fs');
const path = require('path');

function renameFileSync(oldName, newName) {
  const oldPath = path.join(__dirname,'/testing-files', oldName);
  const newPath = path.join(__dirname, '/testing-files', newName);

  try {
    fs.renameSync(oldPath, newPath);
    console.log(`File renamed from ${oldName} to ${newName}`);
  } catch (err) {
    console.error('Error renaming file:', err);
  }
}

// Usage
renameFileSync('old-file.txt', 'new-file.txt');
