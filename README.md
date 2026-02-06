# Murzex - UI Library for Vue 3 [Early Beta]

A modular, flexible, and stylish UI component library built for modern Vue 3 applications. Powered by **Vite**, **TypeScript**, **TSX**, and **TailwindCSS**. Designed for scalability, customization, and clean development workflows.

> 🎨 "Focused on simplicity, speed, and elegant component architecture."

📦 Latest Release: [v1.0.0](https://www.npmjs.com/package/@murzex/mvue)

📑 Table of Contents:
* [Features](https://github.com/murrkiss/murzex-vue?tab=readme-ov-file#-features)
* [Installation](https://github.com/murrkiss/murzex-vue?tab=readme-ov-file#-installation)
* [Quick-Start](https://github.com/murrkiss/murzex-vue?tab=readme-ov-file#-quick-start)
* [Configuration](https://github.com/murrkiss/murzex-vue?tab=readme-ov-file#-configuration-optional)
* [Styling & Theming](https://github.com/murrkiss/murzex-vue?tab=readme-ov-file#-styling--theming)
* [Documentation](https://github.com/murrkiss/murzex-vue?tab=readme-ov-file#-documentation)
* [Roadmap](https://github.com/murrkiss/murzex-vue?tab=readme-ov-file#-roadmap)
* [License](https://github.com/murrkiss/murzex-vue?tab=readme-ov-file#-license)

---

## 🚀 Features

* ⚡ **Fast & Lightweight** — minimal overhead, fast builds
* 🔧 **Modular Architecture** — import only what you need
* 📦 **TypeScript-first** — strict typing & full IntelliSense support
* 🧩 **TSX-based Components** — cleaner logic, less template noise
* 🔌 **Optimized for Vite**

---

## 📦 Installation

```zsh
npm i @murzex/mvue
```

---

## 🏁 Quick Start

```ts
import { createApp } from "vue";
import App from "./App.vue";

// Import mvue style
import "@murzex/mvue/style";

createApp(App);
```

Using a component:

```tsx
import { MButton } from "@murzex/mvue";

<MButton value="Submit" />
<MButton value='Submit' severity='secondary' />
```

---

## 🛠 Configuration (optional)

```ts
-
```

---

## 🎨 Styling & Theming

MUI is built on TailwindCSS and uses CSS variables for theming.

Customizing theme:

```css
/* This is an example of how to configure button style variables */
--mvue-button-text-color: oklch(37.2% 0.044 257.287);
--mvue-button-bg-color: oklch(96.8% 0.007 247.896);
--mvue-button-border-color: oklch(96.8% 0.007 247.896);

--mvue-button-bg-hover-color: oklch(90.8% 0.007 247.896);
--mvue-button-border-hover-color: oklch(90.8% 0.007 247.896);
--mvue-button-bg-active-color: oklch(86.8% 0.007 247.896);
--mvue-button-border-active-color: oklch(86.8% 0.007 247.896);

--mvue-button-variant-text-color: oklch(37.2% 0.044 257.287);

--mvue-button-variant-bg-hover-color: oklch(90.8% 0.007 247.896 / 0.5);
--mvue-button-variant-border-hover-color: oklch(90.8% 0.007 247.896 / 0.5);
--mvue-button-variant-bg-active-color: oklch(86.8% 0.007 247.896 / 0.8);
--mvue-button-variant-border-active-color: oklch(86.8% 0.007 247.896 / 0.8);

--mvue-button-variant-outlined-border-color: oklch(92.9% 0.013 255.508);

/* More details and additional customization options are available in the documentation */
```

---

## 📘 Documentation
`<Coming soon ...>`

## 🗺 Roadmap
`<Coming soon ...>`

## 📄 License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
