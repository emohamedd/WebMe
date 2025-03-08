const sharp = require('sharp');
const fs = require('fs');

async function generateFavicon() {
  const svg = fs.readFileSync('./public/favicon.svg');
  
  await sharp(svg)
    .resize(32, 32)
    .toFile('./public/favicon.ico');
}

generateFavicon().catch(console.error); 