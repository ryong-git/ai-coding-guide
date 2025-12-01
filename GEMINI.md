# GEMINI.md: AI Coding Guide

## Project Overview

This is a Next.js project that serves as a guide for AI-assisted coding, with a specific focus on Anthropic's Claude. It appears to be a documentation website built with Next.js, React, and Tailwind CSS, and it uses MDX for content. The project aims to provide visual summaries and detailed information about various Claude use cases.

The application is structured as a typical Next.js project with a `src` directory containing the main application logic, a `public` directory for static assets, and a `docs` directory for reference materials and documentation.

## Building and Running

### Prerequisites

- Node.js
- npm (or yarn, pnpm, bun)

### Running in Development Mode

To run the project in development mode with live reloading, use the following command:

```bash
npm run dev
```

This will start the development server on [http://localhost:3000](http://localhost:3000).

### Building for Production

To create a production-ready build of the application, run:

```bash
npm run build
```

The output will be in the `.next` directory.

### Starting the Production Server

To start the production server, use the following command:

```bash
npm run start
```

## Development Conventions

### Linting

The project uses ESLint for code linting. To run the linter, use:

```bash
npm run lint
```

### Dependencies

The project's dependencies are managed in `package.json`. Key dependencies include:

-   **next**: The React framework for building the application.
-   **react**: The JavaScript library for building user interfaces.
-   **tailwindcss**: A utility-first CSS framework for styling.
-   **@mdx-js/react**: For using JSX in Markdown.

The project is configured to use Turbopack for faster development and builds, as indicated by the `--turbopack` flag in the `dev` and `build` scripts.
