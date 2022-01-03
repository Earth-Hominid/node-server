const url = require('url');

const myUrl = new URL('http://mywebsite.com/hello.html?id=100&status=active');

// Serialized URL
console.log(myUrl.href);
// You can also use the toString() method to do the same
console.log(myUrl.toString());

// Host (root) domain
console.log(myUrl.host);
