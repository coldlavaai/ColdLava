#!/usr/bin/env node

// Build script to inject environment variables into index.html
const fs = require('fs');
const path = require('path');

const RETELL_API_KEY = process.env.RETELL_API_KEY || 'key_f636ae490564b5eeb88a55223ed9';

console.log('Building with environment variables...');
console.log('RETELL_API_KEY:', RETELL_API_KEY ? '✓ Set' : '✗ Not set');

// Read index.html
const indexPath = path.join(__dirname, 'index.html');
let content = fs.readFileSync(indexPath, 'utf8');

// Replace placeholder with actual API key
content = content.replace('__RETELL_API_KEY__', RETELL_API_KEY);

// Write to output directory
const outputDir = path.join(__dirname, '.vercel', 'output', 'static');
fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(path.join(outputDir, 'index.html'), content);

// Copy other files
const filesToCopy = [
  'coldlava-icon.png',
  'sophie-avatar.png',
  'glowing-orb.png',
  'privacy.html',
  'favicon.png'
];

filesToCopy.forEach(file => {
  const srcPath = path.join(__dirname, file);
  const destPath = path.join(outputDir, file);
  if (fs.existsSync(srcPath)) {
    fs.copyFileSync(srcPath, destPath);
    console.log(`✓ Copied ${file}`);
  }
});

console.log('✓ Build complete!');
