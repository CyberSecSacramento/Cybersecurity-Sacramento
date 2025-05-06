# GitHub Pages Deployment

This document explains how to deploy the website to GitHub Pages.

## Local Development and GitHub Pages

Our Jekyll configuration is designed to work with both local development and GitHub Pages deployment without requiring any changes between environments.

## Deployment Process

To deploy the website to GitHub Pages, follow these steps:

1. Make sure your changes are committed to the `dev` branch and working correctly locally.

2. Merge the `dev` branch into the `main` branch:

```bash
# Switch to the main branch
git checkout main

# Merge changes from dev branch
git merge dev

# Push changes to GitHub
git push origin main
```

3. GitHub Pages will automatically build and deploy the site from the `main` branch.

## Configuration

The `_config.yml` file is configured to work with both local development and GitHub Pages. It does not specify a theme, as we're using our own custom theme with our own layout files.

The `Gemfile` is configured to use Jekyll 4.2.2, which works for local development. GitHub Pages will use its own Jekyll environment when building the site.

## Troubleshooting

If you encounter issues with the GitHub Pages build, check the following:

1. Make sure the `_config.yml` file does not specify a theme that's not supported by GitHub Pages
2. Check that all required plugins are listed in the `plugins` section of `_config.yml`
3. Check the GitHub Pages build logs for any errors
4. Verify that all files are properly committed to the `main` branch
