# Contributing to DC916 Website

Thank you for your interest in contributing to the Cybersecurity Sacramento (DC916) website! This document provides guidelines and instructions for contributing to the project.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Process](#development-process)
- [Pull Request Process](#pull-request-process)
- [Coding Standards](#coding-standards)
- [Commit Message Guidelines](#commit-message-guidelines)
- [Documentation](#documentation)
- [Testing](#testing)
- [Community](#community)

## Code of Conduct

This project and everyone participating in it is governed by our [Code of Conduct](../CoC.md). By participating, you are expected to uphold this code. Please report unacceptable behavior to the project maintainers.

## Getting Started

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/YOUR-USERNAME/Cybersecurity-Sacramento.git
   cd Cybersecurity-Sacramento
   ```
3. **Add the upstream repository** as a remote:
   ```bash
   git remote add upstream https://github.com/CyberSecSacramento/Cybersecurity-Sacramento.git
   ```
4. **Set up your development environment** by following the instructions in [INSTALLATION.md](INSTALLATION.md)

## Development Process

1. **Create a new branch** for your feature or bugfix:
   ```bash
   git checkout -b feature/your-feature-name
   ```
   Use a descriptive branch name that reflects the changes you're making.

2. **Make your changes** and commit them with clear, descriptive commit messages.

3. **Keep your branch updated** with the upstream repository:
   ```bash
   git fetch upstream
   git rebase upstream/main
   ```

4. **Test your changes** locally by running the Jekyll server:
   ```bash
   bundle exec jekyll serve
   ```

5. **Push your branch** to your fork:
   ```bash
   git push origin feature/your-feature-name
   ```

6. **Create a Pull Request** from your fork to the main repository.

## Pull Request Process

1. **Ensure your PR description clearly describes the changes** and their purpose.
2. **Link any related issues** in the PR description using keywords like "Fixes #123" or "Resolves #456".
3. **Include screenshots** for UI changes to help reviewers understand your changes.
4. **Update documentation** if your changes affect it.
5. **Make sure all checks pass** before requesting a review.
6. **Address review feedback** promptly and push additional commits to your branch.
7. **Once approved**, your PR will be merged by a maintainer.

## Coding Standards

### HTML

- Use semantic HTML5 elements where appropriate
- Maintain proper indentation (2 spaces)
- Use lowercase for element names, attributes, and attribute values
- Quote attribute values using double quotes
- Close all HTML elements properly

### CSS/SCSS

- Follow the existing variable naming conventions
- Use the existing CSS variables for colors and other theme elements
- Maintain proper indentation (2 spaces)
- Write comments for complex styling blocks
- Use classes instead of IDs for styling when possible
- Follow the BEM (Block Element Modifier) naming convention when appropriate

### JavaScript

- Use ES6+ features when appropriate
- Maintain proper indentation (2 spaces)
- Use semicolons at the end of statements
- Use meaningful variable and function names
- Add comments for complex logic
- Avoid global variables and functions
- Use `const` and `let` instead of `var`

### Markdown

- Use proper heading hierarchy (# for main title, ## for sections, etc.)
- Use bullet points for lists
- Include blank lines between paragraphs
- Use code blocks with language specification for code snippets
- Use relative links for internal navigation

## Commit Message Guidelines

Follow these guidelines for commit messages:

- Use the present tense ("Add feature" not "Added feature")
- Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
- Limit the first line to 72 characters or less
- Reference issues and pull requests after the first line
- Consider using the following format:
  ```
  [Type]: Brief description

  Detailed description if necessary.

  Resolves: #123
  ```
  Where `[Type]` is one of:
  - `Feat`: A new feature
  - `Fix`: A bug fix
  - `Docs`: Documentation changes
  - `Style`: Changes that don't affect the meaning of the code (formatting, etc.)
  - `Refactor`: Code changes that neither fix a bug nor add a feature
  - `Perf`: Changes that improve performance
  - `Test`: Adding or modifying tests
  - `Chore`: Changes to the build process or auxiliary tools

## Documentation

Good documentation is crucial for the project's success:

- Update the README.md if you change project features or setup requirements
- Document new features with clear explanations and examples
- Update the INSTALLATION.md if you change the installation process
- Add comments to your code explaining complex logic
- Create or update diagrams if you change the project structure

## Testing

Before submitting a pull request:

1. **Test your changes** in different browsers (Chrome, Firefox, Safari, Edge)
2. **Test on mobile devices** or using browser developer tools' mobile emulation
3. **Validate HTML** using tools like the W3C Validator
4. **Check for broken links** throughout the site
5. **Ensure accessibility** by testing with screen readers or accessibility tools

## Community

Join our community to discuss the project:

- **Discord**: [Join our Discord server](https://discord.gg/dc916)
- **Twitter**: [@DC916](https://twitter.com/DC916)
- **Email**: [info@dc916.com](mailto:info@dc916.com)

---

Thank you for contributing to the DC916 website! Your efforts help make our community resource better for everyone.
