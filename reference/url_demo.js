const url = require('url');

const myUrl = new URL(
  'http://mywebsite.com:8000/hello.html?id=100&status=active'
);

// Serialized URL
console.log(myUrl.href);
// You can also use the toString() method to do the same
console.log(myUrl.toString());

// Host (root) domain
console.log(myUrl.host);

// Hostname (Notice hostname doesn't get the port but host does)
console.log(myUrl.hostname);

// Pathname
console.log(myUrl.pathname);

// Serialized query
console.log(myUrl.search);

// Search Params object

console.log(myUrl.searchParams);

// Add param
myUrl.searchParams.append('abc', '123');
console.log(myUrl.searchParams);

// Loop through params
console.log(
  myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`))
);
