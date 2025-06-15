//require('url') — Legacy Node.js API
const url = require('url');

const address = 'https://example.com:8080/products?category=books&id=123';
const parsedUrl = new URL(address);

console.log('Host:', parsedUrl.host);
console.log("Port", parsedUrl.port); 
console.log('Pathname:', parsedUrl.pathname);
console.log("Query", parsedUrl.query);
console.log('Search Params:', parsedUrl.searchParams.get('category'));


//new URL()
const url_new = new URL('https://example.com:8080/path/page?name=John&id=123#top');

console.log(url_new.hostname);           // example.com
console.log(url_new.port);               // 8080
console.log(url_new.pathname);           // /path/page
console.log(url_new.searchParams.get('name')); // John
console.log(url_new.hash); 
