#!/usr/bin/env node

/**
 * This script helps with cleanup during TypeScript migration.
 * It deletes JavaScript files that have corresponding TypeScript files.
 */

const fs = require('fs');
const path = require('path');

// Directories to check
const directories = ['src', 'test'];

// Extension to check and remove
const oldExt = '.js';
const newExt = '.ts';

let count = 0;

// Process each directory
directories.forEach(dir => {
  const dirPath = path.join(process.cwd(), dir);
  
  // Skip if directory doesn't exist
  if (!fs.existsSync(dirPath)) {
    console.log(`Directory ${dirPath} doesn't exist, skipping.`);
    return;
  }
  
  // Get all files in the directory
  const files = fs.readdirSync(dirPath);
  
  // Find all TypeScript files
  const tsFiles = files.filter(file => file.endsWith(newExt));
  
  // For each TypeScript file, check if corresponding JS file exists
  tsFiles.forEach(tsFile => {
    const baseName = tsFile.slice(0, -newExt.length);
    const jsFile = baseName + oldExt;
    const jsFilePath = path.join(dirPath, jsFile);
    
    // If JS file exists, delete it
    if (fs.existsSync(jsFilePath)) {
      fs.unlinkSync(jsFilePath);
      console.log(`Deleted ${jsFilePath}`);
      count++;
    }
  });
});

console.log(`Cleanup complete. Deleted ${count} files.`); 