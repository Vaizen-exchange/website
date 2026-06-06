#!/usr/bin/env node

/**
 * Simple build script for Nunjucks templates
 * 
 * Usage: node build.js
 * 
 * This script will:
 * 1. Load the data from data.json
 * 2. Render index.njk with the data
 * 3. Output the HTML to an output directory
 */

const nunjucks = require('nunjucks');
const fs = require('fs');
const path = require('path');

// Configure Nunjucks
const env = nunjucks.configure('.', {
  autoescape: true,
  noCache: true
});

// Create output directory if it doesn't exist
const outputDir = './output';
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Load data
const data = JSON.parse(fs.readFileSync('./data.json', 'utf8'));

// Render the templates
try {
  console.log('Rendering templates...');
  
  // Render index page
  const indexHtml = env.render('index.njk', data);
  fs.writeFileSync(path.join(outputDir, 'index.html'), indexHtml);
  console.log('✓ index.html');
  
  // Render SMEs page
  const smesData = JSON.parse(fs.readFileSync('./data-smes.json', 'utf8'));
  const smesHtml = env.render('for-smes.njk', smesData);
  fs.writeFileSync(path.join(outputDir, 'for-smes.html'), smesHtml);
  console.log('✓ for-smes.html');
  
  // Render Creators page
  const creatorsData = JSON.parse(fs.readFileSync('./data-creators.json', 'utf8'));
  const creatorsHtml = env.render('for-creators.njk', creatorsData);
  fs.writeFileSync(path.join(outputDir, 'for-creators.html'), creatorsHtml);
  console.log('✓ for-creators.html');
  
  // Render Investors page
  const investorsData = JSON.parse(fs.readFileSync('./data-investors.json', 'utf8'));
  const investorsHtml = env.render('for-investors.njk', investorsData);
  fs.writeFileSync(path.join(outputDir, 'for-investors.html'), investorsHtml);
  console.log('✓ for-investors.html');
  
  // Copy CSS and JS files
  console.log('\nCopying static assets...');

  // Create directories
  fs.mkdirSync(path.join(outputDir, 'css'), { recursive: true });
  fs.mkdirSync(path.join(outputDir, 'js'), { recursive: true });

  // Copy custom files
  fs.copyFileSync('./css/styles.css', path.join(outputDir, 'css', 'styles.css'));
  fs.copyFileSync('./js/main.js', path.join(outputDir, 'js', 'main.js'));

  // Copy Bootstrap from node_modules (no CDN dependency)
  fs.copyFileSync(
    './node_modules/bootstrap/dist/css/bootstrap.min.css',
    path.join(outputDir, 'css', 'bootstrap.min.css')
  );
  fs.copyFileSync(
    './node_modules/bootstrap/dist/js/bootstrap.bundle.min.js',
    path.join(outputDir, 'js', 'bootstrap.bundle.min.js')
  );

  // Copy img directory
  if (fs.existsSync('./img')) {
    const imgOutDir = path.join(outputDir, 'img');
    fs.mkdirSync(imgOutDir, { recursive: true });
    fs.readdirSync('./img').forEach(file => {
      fs.copyFileSync(path.join('./img', file), path.join(imgOutDir, file));
    });
  }

  // Copy CNAME for GitHub Pages custom domain
  if (fs.existsSync('./CNAME')) {
    fs.copyFileSync('./CNAME', path.join(outputDir, 'CNAME'));
  }

  console.log('✓ Static assets copied');
  console.log('\n✨ Build complete! Pages created:');
  console.log('   - output/index.html');
  console.log('   - output/for-smes.html');
  console.log('   - output/for-creators.html');
  console.log('   - output/for-investors.html');
  
} catch (error) {
  console.error('Error rendering template:', error.message);
  console.error(error.stack);
  process.exit(1);
}
