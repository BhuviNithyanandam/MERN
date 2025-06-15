const os = require('os');

console.log('OS platform:', os.platform());
console.log('Total memory:', os.totalmem());
console.log('Free memory:', os.freemem());
console.log('CPU info:', os.cpus()[0].model);
