# Alexander Aranda Portfolio

A single-page portfolio built with Bun, Vite, and React.

## Live Site

[View the site](https://arand013.github.io/Portfolio/)

## Overview

This project is a personal portfolio focused on selected work, technical growth, and a cleaner presentation of experience.

It is designed as a fast, static site with:

- Bun for package management and scripts
- Vite for development and production builds
- React for the UI
- GitHub Pages for hosting

## Getting Started

### Install dependencies

```bash
bun install
```

### Start the development server

```bash
bun run dev
```

### Build for production

```bash
bun run build
```

### Preview the production build locally

```bash
bun run preview
```

## Deployment

This repo is configured for GitHub Pages with the `/Portfolio/` base path.

To publish the current production build:

```bash
bun run deploy
```

## Project Structure

```text
src/
  components/
  data/
  sections/
  styles/
  App.jsx
  main.jsx
```

## Notes

- Main content lives in `src/data/content.js`
- App entry is `src/main.jsx`
- Vite config is `vite.config.mjs`
