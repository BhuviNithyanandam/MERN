const path = require('path');

const filePath = '/Users/bhuvi/projects/node/app.js';

console.log('Join:', path.join('src', 'utils', 'file.js'));  
console.log('Resolve:', path.resolve('src', 'index.js'));   
console.log('Base name:', path.basename(filePath));         // app.js
console.log('Extension:', path.extname(filePath));          // .js
console.log('Dir name:', path.dirname(filePath));           // /Users/bhuvi/projects/node

const parsed = path.parse(filePath);
console.log(parsed);
/* {
  root: '/',
  dir: '/Users/bhuvi/projects/node',
  base: 'app.js',
  ext: '.js',
  name: 'app'
} */
