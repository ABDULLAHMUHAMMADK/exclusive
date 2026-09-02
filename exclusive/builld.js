// build.js
const fs = require('fs');

// Read files
const header = fs.readFileSync('header.html', 'utf8');
const footer = fs.readFileSync('footer.html', 'utf8');

// Process each HTML file
const files = ['index.html', 'contact.html', 'about.html', 'signup.html'];

files.forEach(file => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    // Replace placeholders
    content = content
      .replace('<div id="header"></div>', header)
      .replace('<div id="footer"></div>', footer);
    // Save to a 'dist' folder
    fs.mkdirSync('dist', { recursive: true });
    fs.writeFileSync(`dist/${file}`, content);
  }
});

console.log('Build complete! Files saved to /dist folder');