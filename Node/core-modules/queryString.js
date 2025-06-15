const querystring = require('querystring');

const query = 'category=books&id=123';
const parsed = querystring.parse(query);

console.log(parsed.category); // books
console.log(parsed.id);       // 123
