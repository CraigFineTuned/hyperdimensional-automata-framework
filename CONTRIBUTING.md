# Contributing to the Hyperdimensional Automata Framework

Thank you for your interest in contributing to the Hyperdimensional Automata Framework (HAF)! This document provides guidelines and instructions for contributing to the project.

## Code of Conduct

By participating in this project, you agree to abide by our Code of Conduct:

- Be respectful and inclusive
- Focus on constructive criticism
- Acknowledge the work of others
- Be patient with new contributors

## How to Contribute

### Reporting Bugs

If you find a bug, please create an issue with the following information:

- A clear, descriptive title
- A detailed description of the issue
- Steps to reproduce the bug
- Expected behavior
- Screenshots if applicable
- Your environment (browser, OS, etc.)

### Suggesting Enhancements

We welcome suggestions for enhancements:

- Use a clear, descriptive title
- Provide a detailed description of the proposed enhancement
- Explain why this enhancement would be useful
- Include any relevant examples or references

### Pull Requests

1. Fork the repository
2. Create a new branch from `main`
3. Make your changes
4. Add or update tests as necessary
5. Make sure all tests pass
6. Submit a pull request

#### Pull Request Guidelines

- Follow the coding style of the project
- Write clear, descriptive commit messages
- Include tests for new features
- Update documentation as needed
- Keep pull requests focused on a single change

## Development Setup

1. Fork and clone the repository
2. Install dependencies: `npm install`
3. For 3D visualization dependencies: `npm run install-3d`
4. Start the development server: `npm start`

## Project Structure

- `src/core/`: Core automata implementations
  - `automata/`: Base and specific automata classes
  - `dimensions/`: Dimension-specific handlers
  - `rules/`: Rule systems
- `src/components/`: React components
  - `simulations/`: Simulation components
  - `ui/`: User interface components
- `docs/`: Documentation
- `planning/`: Project planning and roadmap

## Coding Standards

- Use ES6+ features
- Follow React best practices
- Use meaningful variable and function names
- Comment complex sections of code
- Write JSDoc comments for functions and classes

## Testing

- Write unit tests for all new functionality
- Ensure all tests pass before submitting a pull request
- Run tests with `npm test`

## Documentation

- Update documentation for any changed functionality
- Document new features thoroughly
- Follow the existing documentation style

## Roadmap and Vision

Contributors should align their work with the project's roadmap and vision as outlined in the implementation plan. If you're working on a major feature, please discuss it first by creating an issue.

## Getting Help

If you have questions or need help, you can:

- Create an issue with the "question" label
- Contact the maintainers directly
- Join our community discussions

Thank you for contributing to HAF!

---

**Note**: This document is subject to change as the project evolves.