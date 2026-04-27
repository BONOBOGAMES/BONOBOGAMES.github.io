const sharp = require('sharp');
const path = require('path');

async function processAvatar() {
  const inputPath = path.join(__dirname, '..', 'public', 'sala.png');
  const outputPath = path.join(__dirname, '..', 'public', 'gabor-avatar.png');

  try {
    await sharp(inputPath)
      .resize(200, 200, {
        fit: 'cover',
        position: 'center'
      })
      .composite([{
        input: Buffer.from(
          `<svg width="200" height="200">
            <circle cx="100" cy="100" r="100" fill="white"/>
          </svg>`
        ),
        blend: 'dest-in'
      }])
      .png({ quality: 90, compressionLevel: 9 })
      .toFile(outputPath);

    console.log('✓ Avatar processed successfully:', outputPath);
    console.log('  - Resized to 200x200');
    console.log('  - Made circular');
    console.log('  - Optimized for web');
  } catch (error) {
    console.error('Error processing avatar:', error);
  }
}

processAvatar();
