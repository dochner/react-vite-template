<p align='center'>
<a href="https://reactvite.dochner.me/">Live Demo</a>
</p>

<br>

## Features

- ⚡️ [React](https://reactjs.org), [Vite](https://github.com/vitejs/vite), [pnpm](https://pnpm.io/), [esbuild](https://github.com/evanw/esbuild) - born with fastness

- 🗂 [File based routing](./src/pages)

- 📦 [Components auto importing](./src/components)

- 📑 [Layout system](./src/layouts)

- 📲 [PWA](https://github.com/antfu/vite-plugin-pwa)

- 🎨 [UnoCSS](https://github.com/antfu/unocss) - the instant on-demand atomic CSS engine

- 😃 [Use icons from any icon sets with classes](https://github.com/antfu/unocss/tree/main/packages/preset-icons)

- 📥 [APIs auto importing](https://github.com/antfu/unplugin-auto-import) - use Composition API and others directly

- 🦾 TypeScript, of course

- ☁️ Deploy on Netlify, zero-config

<br>

## Pre-packed

### UI Frameworks

- [UnoCSS](https://github.com/antfu/unocss) - The instant on-demand atomic CSS engine.

### Icons

- [Iconify](https://iconify.design) - use icons from any icon sets [🔍Icônes](https://icones.netlify.app/)
- [Pure CSS Icons via UnoCSS](https://github.com/antfu/unocss/tree/main/packages/preset-icons)

### Plugins

- [React Router](https://github.com/remix-run/react-router)
  - [`vite-plugin-pages`](https://github.com/hannoeru/vite-plugin-pages) - file system based routing
- [`unplugin-react-components`](https://github.com/snowingfox/unplugin-react-components) - components auto import
- [`unplugin-auto-import`](https://github.com/antfu/unplugin-auto-import) - Directly use Vue Composition API and others without importing
- [`vite-plugin-pwa`](https://github.com/antfu/vite-plugin-pwa) - PWA

### Coding Style

- Use Composition API with [`<script setup>` SFC syntax](https://github.com/vuejs/rfcs/pull/227)
- [ESLint](https://eslint.org/) with [@antfu/eslint-config](https://github.com/antfu/eslint-config), single quotes, no semi.

### Dev tools

- [TypeScript](https://www.typescriptlang.org/)
- [pnpm](https://pnpm.js.org/) - fast, disk space efficient package manager
- [Netlify](https://www.netlify.com/) - zero-config deployment
- [VS Code Extensions](./.vscode/extensions.json)
  - [Vite](https://marketplace.visualstudio.com/items?itemName=antfu.vite) - Fire up Vite server automatically
  - [Iconify IntelliSense](https://marketplace.visualstudio.com/items?itemName=antfu.iconify) - Icon inline display and autocomplete
  - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

## Try it now

> requires Node >=14.18

### GitHub Template

[Create a repo from this template on GitHub](https://github.com/dochner/react-vite-template/generate).

### Clone to local

If you prefer to do it manually with the cleaner git history

```bash
npx degit dochner/react-vite-template my-react-app
cd my-react-app
pnpm i # If you don't have pnpm installed, run: npm install -g pnpm
```

## Checklist

When you use this template, try follow the checklist to update your info properly

- [ ] Change the author name in `LICENSE`
- [ ] Change the favicon in `public`
- [ ] Clean up the READMEs and remove routes

And, enjoy :)

## Usage

### Development

Just run and visit <http://localhost:3333>

```bash
pnpm dev
```

### Build

To build the App, run

```bash
pnpm build
```

And you will see the generated file in `dist` that ready to be served.

### Deploy on Netlify

Go to [Netlify](https://app.netlify.com/start) and select your clone, `OK` along the way, and your App will be live in a minute.

### Docker Production Build

First, build the app image by opening the terminal in the project's root directory.

```bash
docker buildx build . -t app:latest
```

Run the image and specify port mapping with the `-p` flag.

```bash
docker run --rm -it -p 8080:80 app:latest
```
