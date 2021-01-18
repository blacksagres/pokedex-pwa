const fs = require('fs');

// This is only necessary for as long as we need netlify to host our staging builds
const generateRedirects = () => {
  fs.writeFile('./build/_redirects', '/*    /index.html   200', (err) => {
    if (err)
      return console.error(
        'Something went wrong when writing the redirects',
        err.message,
        err.code
      );
    console.info('_redirects set');
  });
};

generateRedirects();
