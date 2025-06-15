const fs = require('fs');

const stream = fs.createReadStream(__dirname+ '/testing-files/hello.txt', 'utf8');

stream.on('data', chunk => {
  console.log('Received chunk:', chunk);
});
