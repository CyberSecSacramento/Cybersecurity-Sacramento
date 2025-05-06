# Troubleshooting Guide for DC916 Website

This guide addresses common issues you might encounter when working with the DC916 website and provides solutions to help you resolve them.

## Table of Contents

- [Installation Issues](#installation-issues)
- [Build Issues](#build-issues)
- [Development Issues](#development-issues)
- [Content Issues](#content-issues)
- [Deployment Issues](#deployment-issues)
- [Browser Compatibility Issues](#browser-compatibility-issues)
- [Performance Issues](#performance-issues)
- [Getting Help](#getting-help)

## Installation Issues

### Ruby Version Problems

**Issue**: Jekyll requires Ruby version 2.5.0 or higher, but you have an older version.

**Solution**:
1. Check your Ruby version:
   ```bash
   ruby -v
   ```
2. If outdated, install a newer version:
   - **Windows**: Download from [RubyInstaller](https://rubyinstaller.org/downloads/)
   - **macOS**: `brew install ruby`
   - **Linux**: `sudo apt-get install ruby-full` or equivalent

### Bundler Installation Fails

**Issue**: Error when installing Bundler.

**Solution**:
1. Try installing with sudo (Unix-based systems):
   ```bash
   sudo gem install bundler
   ```
2. If that fails, try:
   ```bash
   gem install bundler --user-install
   ```

### Dependency Installation Errors

**Issue**: `bundle install` fails with dependency errors.

**Solution**:
1. Update RubyGems:
   ```bash
   gem update --system
   ```
2. Clear Bundler cache:
   ```bash
   bundle clean --force
   ```
3. Try installing again:
   ```bash
   bundle install
   ```

### SSL Certificate Errors

**Issue**: SSL certificate verification errors when installing gems.

**Solution**:
```bash
gem sources -r https://rubygems.org/
gem sources -a http://rubygems.org/
```

## Build Issues

### Jekyll Build Fails

**Issue**: `jekyll build` or `bundle exec jekyll build` fails.

**Solution**:
1. Check for syntax errors in your Markdown or Liquid templates
2. Look for missing front matter in content files
3. Try running with verbose output:
   ```bash
   bundle exec jekyll build --verbose
   ```

### SCSS Compilation Errors

**Issue**: SCSS compilation fails during build.

**Solution**:
1. Check for syntax errors in your SCSS files
2. Ensure all variables are defined before use
3. Try running with verbose output:
   ```bash
   bundle exec jekyll build --verbose
   ```

### Missing Dependencies

**Issue**: Build fails due to missing dependencies.

**Solution**:
1. Ensure all required gems are in your Gemfile
2. Run `bundle install` to install missing dependencies
3. If using plugins, ensure they're listed in `_config.yml`

## Development Issues

### Local Server Won't Start

**Issue**: `jekyll serve` or `bundle exec jekyll serve` fails to start.

**Solution**:
1. Check if another process is using port 4000:
   ```bash
   lsof -i :4000  # Unix-based systems
   ```
2. Kill the process or use a different port:
   ```bash
   bundle exec jekyll serve --port 4001
   ```

### Changes Not Reflecting

**Issue**: Changes to files aren't showing up in the browser.

**Solution**:
1. Ensure you're saving the files
2. Try hard-refreshing your browser (Ctrl+F5 or Cmd+Shift+R)
3. Restart the Jekyll server
4. Use the `--livereload` option:
   ```bash
   bundle exec jekyll serve --livereload
   ```

### JavaScript Errors

**Issue**: JavaScript functionality isn't working.

**Solution**:
1. Check the browser console for errors
2. Ensure scripts are properly included in the layout
3. Verify that scripts are executed after the DOM is loaded
4. Check for syntax errors in your JavaScript files

## Content Issues

### Markdown Not Rendering Correctly

**Issue**: Markdown content isn't rendering as expected.

**Solution**:
1. Ensure proper spacing in your Markdown
2. Check for missing or incorrect front matter
3. Validate your Markdown with a linter
4. Ensure you're using the correct Markdown syntax for Jekyll

### Front Matter Problems

**Issue**: Front matter isn't being processed correctly.

**Solution**:
1. Ensure front matter is at the very top of the file
2. Check for proper YAML syntax (indentation, colons, etc.)
3. Ensure the front matter is enclosed by triple dashes (`---`)
4. Validate your YAML with a linter

### Images Not Displaying

**Issue**: Images aren't showing up on the site.

**Solution**:
1. Check file paths (case-sensitive)
2. Ensure images are in the correct directory
3. Use relative paths from the root of the site
4. Check image file formats and sizes

## Deployment Issues

### GitHub Pages Build Failures

**Issue**: GitHub Pages fails to build your site.

**Solution**:
1. Check the build logs in the GitHub repository settings
2. Ensure your repository is properly configured for GitHub Pages
3. Verify that your Jekyll configuration is compatible with GitHub Pages
4. Use our local build and deploy strategy with the `deploy.sh` script:
   ```bash
   ./deploy.sh
   ```
   This script builds the site locally and pushes the built files to the main branch, bypassing GitHub Pages' built-in Jekyll processing.

### Plugin Compatibility Issues

**Issue**: GitHub Pages doesn't support certain Jekyll plugins that you want to use.

**Solution**:
1. Use our local build and deploy strategy with the `deploy.sh` script
2. This approach allows you to use any Jekyll plugin, not just those supported by GitHub Pages
3. The key insight is that GitHub Pages will serve static HTML files without trying to build them if they're already in the repository
4. Our deployment strategy takes advantage of this by building the site locally and pushing the built files to the main branch

### Custom Domain Issues

**Issue**: Custom domain isn't working with GitHub Pages.

**Solution**:
1. Ensure your CNAME file is in the root directory
2. Verify DNS settings with your domain provider
3. Wait for DNS propagation (can take up to 48 hours)
4. Check HTTPS settings in the GitHub repository settings

### Broken Links After Deployment

**Issue**: Links that worked locally are broken after deployment.

**Solution**:
1. Check for hardcoded URLs that should be relative
2. Ensure `baseurl` is properly configured in `_config.yml`
3. Use `{{ site.baseurl }}` prefix for internal links
4. Test with the `--baseurl` option locally:
   ```bash
   bundle exec jekyll serve --baseurl '/Cybersecurity-Sacramento'
   ```

## Browser Compatibility Issues

### CSS Rendering Differences

**Issue**: Site looks different in different browsers.

**Solution**:
1. Use a CSS reset or normalize.css
2. Test in multiple browsers during development
3. Use vendor prefixes for experimental CSS properties
4. Consider using autoprefixer

### JavaScript Compatibility

**Issue**: JavaScript works in some browsers but not others.

**Solution**:
1. Use modern JavaScript features with caution
2. Consider using Babel for transpiling
3. Test in multiple browsers
4. Use feature detection instead of browser detection

## Performance Issues

### Slow Build Times

**Issue**: Jekyll builds are taking too long.

**Solution**:
1. Use incremental builds during development:
   ```bash
   bundle exec jekyll serve --incremental
   ```
2. Minimize the number of files and dependencies
3. Optimize image sizes
4. Consider using Jekyll's caching options

### Slow Page Load Times

**Issue**: Pages take too long to load in the browser.

**Solution**:
1. Optimize image sizes and formats
2. Minify CSS and JavaScript
3. Reduce the number of HTTP requests
4. Consider lazy-loading for non-critical resources
5. Use browser developer tools to identify bottlenecks

## Getting Help

If you encounter issues not covered in this guide:

1. **Check Jekyll Documentation**: [Jekyll Docs](https://jekyllrb.com/docs/)
2. **Search GitHub Issues**: Look for similar issues in the [repository](https://github.com/CyberSecSacramento/Cybersecurity-Sacramento/issues)
3. **Ask the Community**:
   - **Discord**: [Join our Discord server](https://discord.gg/dc916)
   - **Twitter**: [@DC916](https://twitter.com/DC916)
   - **Email**: [info@dc916.com](mailto:info@dc916.com)
4. **Open an Issue**: If you've found a bug or have a feature request, [open an issue](https://github.com/CyberSecSacramento/Cybersecurity-Sacramento/issues/new) on GitHub

---

Remember that troubleshooting is often an iterative process. Start with the simplest solution and work your way up to more complex fixes. Document any unusual solutions you find to help others who might encounter the same issues.
