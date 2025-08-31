const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const INPUT_IMAGE = 'public/me.jpg';  // Your profile image
const OUTPUT_DIR = 'public';

// Icon sizes needed
const SIZES = {
  FAVICON_16: 16,
  FAVICON_32: 32,
  APPLE_TOUCH: 180,
};

async function generateIcons() {
  try {
    // Create the apple-touch-icon
    await sharp(INPUT_IMAGE)
      .resize(SIZES.APPLE_TOUCH, SIZES.APPLE_TOUCH)
      .toFormat('png')
      .toFile(path.join(OUTPUT_DIR, 'apple-touch-icon.png'));

    // Create favicon-16x16
    await sharp(INPUT_IMAGE)
      .resize(SIZES.FAVICON_16, SIZES.FAVICON_16)
      .toFormat('png')
      .toFile(path.join(OUTPUT_DIR, 'favicon-16x16.png'));

    // Create favicon-32x32
    await sharp(INPUT_IMAGE)
      .resize(SIZES.FAVICON_32, SIZES.FAVICON_32)
      .toFormat('png')
      .toFile(path.join(OUTPUT_DIR, 'favicon-32x32.png'));

    console.log('✅ Icons generated successfully!');
  } catch (error) {
    console.error('❌ Error generating icons:', error);
  }
}

generateIcons();
