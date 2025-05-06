# Cybersecurity Sacramento (DC916) Website

This repository contains the source code for the Cybersecurity Sacramento (DC916) website, a DEF CON group for hackers, makers, tinkerers, and security enthusiasts in the Sacramento area.

## Overview

The website is built using Jekyll, a static site generator, and is hosted on GitHub Pages. It features a custom theme designed to mimic the PowerShell IDE with Sacramento Kings colors.

## Features

- Responsive design that works on mobile and desktop
- Terminal-like interface with PowerShell blue background and Sacramento Kings purple accents
- Modern card-based layout for projects and directory pages
- Social media integration
- Blinking cursor effect (with more console typing effects planned for future updates)

## Local Development

To run this site locally:

1. Install Jekyll and Bundler:
   ```
   gem install jekyll bundler
   ```

2. Clone the repository:
   ```
   git clone https://github.com/CyberSecSacramento/Cybersecurity-Sacramento.git
   cd Cybersecurity-Sacramento
   ```

3. Install dependencies:
   ```
   bundle install
   ```

4. Start the local server:
   ```
   bundle exec jekyll serve
   ```

5. Open your browser and navigate to `http://localhost:4000`

## Site Structure

- `_config.yml`: Jekyll configuration file
- `_layouts/`: Contains the default layout template
- `_includes/`: Contains partial templates like head-custom.html
- `assets/`: Contains CSS, JavaScript, and image files
- `*.md`: Markdown files for each page of the site

## Customization

The site uses CSS variables for easy color customization. The main variables are defined at the top of `assets/css/style.scss`:

```css
:root {
  --powershell-blue: #012456;
  --kings-purple: #5B2B82;
  --kings-silver: #C4CED4;
  --conifer: #b5e853;
  /* ... other variables ... */
}
```

## Future Enhancements

- Console typing animation effect
- More interactive elements
- Resource section with searchable content
- Event calendar integration

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).
