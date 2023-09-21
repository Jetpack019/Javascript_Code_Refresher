const url = require('url');

const myUrl = new URL('https://jdraws-towa.vercel.app/project#websites');

// Serialized URL
console.log(myUrl.href);

// Host - root domain
console.log(myUrl.host)

// Hostname
console.log(myUrl.hostname)

// Pathname
console.log(myUrl.pathname)

// Serialized Query
console.log(myUrl.search)

// Params object
console.log(myUrl.searchParams)

// Add param 
myUrl.searchParams.append('jade','ross123');
console.log(myUrl.searchParams)

// Loop through params
myUrl.searchParams.forEach((value,name) => console.log(`${name}: ${value}`));