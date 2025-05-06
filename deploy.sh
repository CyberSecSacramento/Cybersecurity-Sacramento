#!/bin/bash

# Script to deploy the Jekyll site to GitHub Pages

# Check if Git is installed
if ! command -v git &> /dev/null; then
    echo "Git is not installed. Please install Git before running this script."
    exit 1
fi

# Check if we're in a Git repository
if ! git rev-parse --is-inside-work-tree &> /dev/null; then
    echo "Not in a Git repository. Please run this script from within a Git repository."
    exit 1
fi

# Check if the current branch is site-upgrade
current_branch=$(git rev-parse --abbrev-ref HEAD)
if [ "$current_branch" != "site-upgrade" ]; then
    echo "You are not on the site-upgrade branch. Please switch to site-upgrade branch before running this script."
    exit 1
fi

# Check if there are uncommitted changes
if ! git diff-index --quiet HEAD --; then
    echo "There are uncommitted changes. Please commit or stash them before running this script."
    exit 1
fi

# Install dependencies locally to avoid permission issues
echo "Installing dependencies locally..."
bundle config set --local path 'vendor/bundle'
bundle install

# Build the site
echo "Building the site..."
bundle exec jekyll build

# Switch to main branch
echo "Switching to main branch..."
git checkout main

# Copy the built site from _site to the main branch
echo "Copying built site to main branch..."
cp -r _site/* .

# Add all changes to Git
echo "Adding changes to Git..."
git add .

# Commit changes
echo "Committing changes..."
git commit -m "Deploy site update from site-upgrade branch"

# Push to GitHub
echo "Pushing to GitHub..."
git push origin main

# Switch back to site-upgrade branch
echo "Switching back to site-upgrade branch..."
git checkout site-upgrade

echo "Deployment complete! The site should be live shortly."
