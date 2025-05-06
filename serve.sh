#!/bin/bash

# Script to run the Jekyll site locally

# Check if Ruby is installed
if ! command -v ruby &> /dev/null; then
    echo "Ruby is not installed. Please install Ruby before running this script."
    exit 1
fi

# Check if Bundler is installed
if ! command -v bundle &> /dev/null; then
    echo "Bundler is not installed. Installing Bundler..."
    gem install bundler --user-install
fi

# Install dependencies locally to avoid permission issues
echo "Installing dependencies locally..."
bundle config set --local path 'vendor/bundle'
bundle install

# Run Jekyll server
echo "Starting Jekyll server..."
bundle exec jekyll serve --livereload
