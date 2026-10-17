const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');

function getFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(getFiles(file));
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      results.push(file);
    }
  });
  return results;
}

const files = getFiles(srcDir);
const headingRegex = /<(h[1-4])[^>]*>([\s\S]*?)<\/\1>/gi;

files.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  let match;
  while ((match = headingRegex.exec(content)) !== null) {
    const tag = match[1];
    const text = match[2].trim();
    // Only report if it has plain text or simple JSX
    console.log(`${path.relative(srcDir, file)} [${tag}]: ${text.replace(/\s+/g, ' ')}`);
  }
});
