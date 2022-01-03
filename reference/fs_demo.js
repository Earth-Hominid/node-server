const fs = require('fs');
const path = require('path');

// Create folder
fs.mkdir(path.join(__dirname, '/test'), {}, (err) => {
  if (err) throw err;
  console.log('Folder created...');
});

// Create file and write to it
fs.writeFile(
  path.join(__dirname, '/test', 'hello.txt'),
  'Hello World!',
  (err) => {
    if (err) throw err;
    console.log('Folder written too...');

    // append file
    fs.appendFile(
      path.join(__dirname, '/test', 'hello.txt'),
      ' This text has been appended!',
      (err) => {
        if (err) throw err;
        console.log('Folder written too...');
      }
    );
  }
);
