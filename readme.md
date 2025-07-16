---
title: Vite + React
description: The default Vite + React starter, utilizing `Caddy` to serve the built app
tags:
  - node
  - vite
  - react
---

# Vite + React + Caddy

This is a [Vite + React](https://vitejs.dev/guide/#trying-vite-online) starter that uses [Caddy](https://caddyserver.com/).

[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/template/NeiLty?referralCode=ySCnWl)

## ✨ Features

- Vite + React
- [Caddy](https://caddyserver.com/)

## 🛠️ Development Environment Setup

This project uses [Yarn 4+](https://yarnpkg.com/) with `node_modules` for dependency management and ESM for modules.

### For VSCode Users
- Standard TypeScript and module resolution will work out of the box.
- No special configuration required.

### For Other Editors
- Any editor with TypeScript support will work without additional configuration.
- Run `yarn install` after cloning.

### Running the Project
- `yarn install`
- `yarn dev` (for development)
- `yarn build` and `yarn preview` (for production)

## 💁‍♀️ How to use

- Install required dependencies with `yarn install`
- Start the server for local development `yarn dev`

## ❓ Why use `Caddy` when deploying to Railway?

Caddy is a powerful, enterprise-ready, open source web server, and therefore Caddy is far better suited to serve websites than Vite is, using Caddy will result in much less memory and cpu usage compared to serving with Vite (much lower running costs too)

To see how this is achieved with nixpacks, check out the fully documented nixpacks.toml file in this repository

The configuration for Caddy is called a Caddyfile, and you can edit that file to further suite your needs, by default it comes configured to serve a single page app for React, and to also gzip the responses

**Relevant Caddy documentation:**

- [The Caddyfile](https://caddyserver.com/docs/caddyfile)
- [Caddyfile Directives](https://caddyserver.com/docs/caddyfile/directives)
- [root](https://caddyserver.com/docs/caddyfile/directives/root)
- [encode](https://caddyserver.com/docs/caddyfile/directives/encode)
- [file_server](https://caddyserver.com/docs/caddyfile/directives/file_server)
- [try_files](https://caddyserver.com/docs/caddyfile/directives/try_files)