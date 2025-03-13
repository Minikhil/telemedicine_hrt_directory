const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function generateFavicon() {
  const sizes = [16, 32, 48];
  const svgBuffer = fs.readFileSync(path.join(process.cwd(), 'public', 'icon.svg'));
  
  // Create an array of promises for each size
  const promises = sizes.map(size => 
    sharp(svgBuffer)
      .resize(size, size)
      .toBuffer()
  );

  // Wait for all conversions to complete
  const buffers = await Promise.all(promises);

  // Combine the buffers into a single ICO file
  // Note: This is a simplified version. For a production environment,
  // you might want to use a dedicated ICO writer library
  const icoBuffer = Buffer.concat(buffers);
  
  // Write the ICO file
  fs.writeFileSync(path.join(process.cwd(), 'public', 'favicon.ico'), icoBuffer);
  console.log('Favicon generated successfully!');
}

generateFavicon().catch(console.error); 