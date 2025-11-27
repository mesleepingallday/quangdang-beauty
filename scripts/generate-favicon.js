import sharp from 'sharp';
import { readFileSync } from 'fs';

async function generateFavicons() {
  try {
    const svg = readFileSync('./public/logo.svg');
    
    // Generate favicon.ico (multiple sizes in one file)
    await sharp(svg)
      .resize(32, 32)
      .toFile('./public/favicon.ico');
    
    // Generate apple-touch-icon.png
    await sharp(svg)
      .resize(180, 180)
      .toFile('./public/apple-touch-icon.png');
    
    // Generate favicon-16x16.png
    await sharp(svg)
      .resize(16, 16)
      .toFile('./public/favicon-16x16.png');
    
    // Generate favicon-32x32.png
    await sharp(svg)
      .resize(32, 32)
      .toFile('./public/favicon-32x32.png');
    
    // Generate android-chrome-192x192.png
    await sharp(svg)
      .resize(192, 192)
      .toFile('./public/android-chrome-192x192.png');
    
    // Generate android-chrome-512x512.png
    await sharp(svg)
      .resize(512, 512)
      .toFile('./public/android-chrome-512x512.png');
    
    console.log('✅ Favicons generated successfully!');
  } catch (error) {
    console.error('❌ Error generating favicons:', error);
    process.exit(1);
  }
}

generateFavicons();