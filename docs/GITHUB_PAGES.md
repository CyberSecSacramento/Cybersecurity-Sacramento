# GitHub Pages Deployment

This document explains how to deploy the website to GitHub Pages.

## Local Development vs. GitHub Pages

The repository contains two Gemfile configurations:

1. `Gemfile` - Used for local development with Jekyll 4.2.2
2. `Gemfile.github` - Used for GitHub Pages deployment with Jekyll 3.9.3 and the github-pages gem

## Deploying to GitHub Pages

When deploying to GitHub Pages, you need to use the GitHub Pages compatible Gemfile. Follow these steps:

1. Before deploying to GitHub Pages, replace the `Gemfile` with the `Gemfile.github` file:

```bash
# Backup the local development Gemfile
mv Gemfile Gemfile.local
mv Gemfile.lock Gemfile.local.lock

# Use the GitHub Pages Gemfile
cp Gemfile.github Gemfile
```

2. Commit and push the changes:

```bash
git add Gemfile
git commit -m "Update Gemfile for GitHub Pages deployment"
git push origin dev
```

3. After the site is deployed, you can switch back to the local development Gemfile:

```bash
# Restore the local development Gemfile
mv Gemfile.local Gemfile
mv Gemfile.local.lock Gemfile.lock
```

## Configuration

The `_config.yml` file is configured to work with both local development and GitHub Pages. It does not specify a theme, as we're using our own custom theme with our own layout files.

## Troubleshooting

If you encounter issues with the GitHub Pages build, check the following:

1. Make sure the `Gemfile` contains the `github-pages` gem
2. Make sure the `_config.yml` file does not specify a theme that's not supported by GitHub Pages
3. Check the GitHub Pages build logs for any errors
