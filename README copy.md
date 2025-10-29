# Vaizen - Nunjucks Templates

A modular, data-driven static website built with Nunjucks templates.

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Build the Site
```bash
npm run build
```

This will create an `output` folder with your compiled HTML, CSS, and JS files.

### 3. View Your Site
```bash
npm run serve
```

Your site will open at http://localhost:8080

## 📁 Project Structure

```
Vaizen-templates/
├── _layout.njk          # Base layout template
├── navbar.njk           # Navigation component
├── hero.njk             # Hero section component
├── footer.njk           # Footer component
├── index.njk            # Main page template
├── data.json            # Content data
├── build.js             # Build script
├── package.json         # Dependencies
├── css/
│   └── styles.css       # All styles
├── js/
│   └── main.js          # JavaScript
└── README.md            # This file
```

## 🎨 Customizing Content

All content is in `data.json`. Edit this file to change:

### Hero Section
```json
{
  "hero": {
    "heading": "Your Custom Heading",
    "description": "Your custom description",
    "buttons": [
      {
        "text": "Button Text",
        "url": "#section",
        "class": "btn-primary"
      }
    ]
  }
}
```

### Stats
```json
{
  "stats": [
    {
      "value": "$12M+",
      "label": "Total Invested"
    }
  ]
}
```

### Brand Cards
```json
{
  "brands": [
    {
      "avatar": "🎮",
      "name": "GameMaster Pro",
      "category": "Gaming & Entertainment",
      "followers": "2.4M",
      "monthlyViews": "8.5M",
      "description": "Description here...",
      "seeking": "$500,000",
      "minInvestment": "$5,000",
      "equityOffered": "20%",
      "fundedPercentage": 68,
      "daysLeft": 15
    }
  ]
}
```

After editing `data.json`, run `npm run build` to regenerate the HTML.

## 🛠️ Available Scripts

```bash
# Build the site once
npm run build

# Watch for changes and auto-rebuild
npm run watch

# Build and serve the site
npm run serve
```

## 📝 Component Overview

### _layout.njk
Base template that all pages extend. Includes:
- HTML structure
- Head with meta tags and CSS
- Navbar and footer includes
- Content block for page-specific content

### navbar.njk
Reusable navigation component with:
- Logo (configurable via `siteName`)
- Navigation links
- CTA button

### hero.njk
Flexible hero section that accepts:
- `hero.heading` - Main headline
- `hero.description` - Subtitle
- `hero.buttons` - Array of buttons

### footer.njk
Footer with four sections:
- For Investors
- For Creators
- Company
- Legal

Accepts `siteName` and `currentYear` variables.

### index.njk
Main page template that uses:
- Hero component
- Stats section (loop)
- How It Works section (loop)
- Featured brands (loop)
- Benefits section (loop)
- CTA section

## 🎯 Creating New Pages

### Step 1: Create a new template
Create `about.njk`:

```nunjucks
{% extends "_layout.njk" %}

{% block content %}
  {% include "hero.njk" %}
  
  <section class="about-section">
    <div class="container">
      <h2>About Us</h2>
      <p>Your content here...</p>
    </div>
  </section>
{% endblock %}
```

### Step 2: Add data for the page
In `data.json` (or create `about-data.json`):

```json
{
  "title": "About Us - Vaizen",
  "hero": {
    "heading": "About Vaizen",
    "description": "Learn about our mission..."
  }
}
```

### Step 3: Update build.js to render the new page
Add to `build.js`:

```javascript
// Render about page
const aboutHtml = env.render('about.njk', aboutData);
fs.writeFileSync(path.join(outputDir, 'about.html'), aboutHtml);
```

## 🎨 Styling

All styles are in `css/styles.css`. The design uses:
- Modern CSS Grid and Flexbox
- Gradient backgrounds
- Smooth transitions and hover effects
- Responsive design
- Mobile-friendly layouts

### Color Scheme
- Primary: `#667eea` (purple-blue)
- Secondary: `#764ba2` (purple)
- Background: `#f8f9fa` (light gray)
- Text: `#333` (dark gray)

## 🔧 Advanced Usage

### Using with Eleventy (11ty)

For a more robust static site generator:

1. Install Eleventy:
```bash
npm install -D @11ty/eleventy
```

2. Create `.eleventy.js`:
```javascript
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("js");
  
  return {
    dir: {
      input: ".",
      output: "_site"
    }
  };
};
```

3. Run:
```bash
npx eleventy --serve
```

### Custom Build Process

You can modify `build.js` to:
- Process multiple pages
- Minify HTML/CSS/JS
- Optimize images
- Add markdown support
- Generate sitemaps

## 📦 Deployment

### Option 1: Deploy the output folder
After running `npm run build`, deploy the `output` folder to:
- Netlify
- Vercel
- GitHub Pages
- Any static hosting service

### Option 2: Use Netlify/Vercel with build command
Set build command: `npm run build`
Set publish directory: `output`

## 🐛 Troubleshooting

**"Module not found" error**
```bash
npm install
```

**Changes not showing**
```bash
npm run build
# Then refresh browser
```

**Port 8080 in use**
Edit `package.json` and change the port:
```json
"serve": "npm run build && npx http-server output -p 3000 -o"
```

## 📚 Learn More

- [Nunjucks Documentation](https://mozilla.github.io/nunjucks/)
- [Eleventy Documentation](https://www.11ty.dev/)
- [CSS Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)

## 📄 License

MIT License - feel free to use this template for any project!

## 🤝 Contributing

Feel free to customize and extend this template for your needs!

---

Made with ❤️ using Nunjucks
