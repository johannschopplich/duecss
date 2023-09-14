# DueCSS

A minimal CSS framework, built upon [UnoCSS](https://github.com/unocss/unocss).

It extends the Tailwind CSS reset, adds sensible [global defaults](./styles/base.css) as well as some generic [rules](./src/rules) and [shortcuts](./src/shortcuts.ts).

Sometimes, you may want to use all the power of an on-demand utility engine like UnoCSS or Tailwind, but write custom CSS as well, while accessing the color, spacing variables etc. you've defined in your configuration. That's where DueCSS bridges the gap.

## Key Features

- 🧶 Resilient set of base styles and utilities
- 🧩 [Typography plugin](./styles/plugins/typography.css)
- 🌙 [Dark mode](./styles/base.css) based on CSS custom properties
- 🏵 Works well for [traditional setups like Kirby CMS](https://github.com/johannschopplich/kirby-vite-unocss-kit)

## Built with DueCSS

Projects demonstrating the capabilities of DueCSS:

- [johannschopplich.com](https://github.com/johannschopplich/johannschopplich.com) (built with Kirby)

## Installation

```bash
# pnpm
pnpm add -D duecss

# npm
npm i -D duecss

# yarn
yarn add -D duecss
```

## Usage

1. Create a `unocss.config.ts` (or `unocss.config.js`) inside your UnoCSS project. To overwrite the default colors, create a `primary` and `accent` entry with some shades:

   Example:

   ```ts
   import { defineConfig, presetUno } from 'unocss'
   import { presetDue } from 'duecss'

   export default defineConfig({
     theme: {
       colors: {
         primary: {
           DEFAULT: '#943D40',
           50: '#DDACAE',
           100: '#D79D9F',
           200: '#CB8183',
           300: '#BF6467',
           400: '#B1494C',
           500: '#943D40',
           600: '#6C2D2F',
           700: '#451C1E',
           800: '#1D0C0C',
           900: '#000000'
         },
         accent: {
           DEFAULT: '#C3A19D',
           50: '#FFFFFF',
           100: '#FFFFFF',
           200: '#F1EAE9',
           300: '#E2D2D0',
           400: '#D2B9B6',
           500: '#C3A19D',
           600: '#AE807A',
           700: '#95615B',
           800: '#724A46',
           900: '#4F3430'
         }
       }
     },
     presets: [presetUno(), presetDue()]
   })
   ```

   Now, you can use color utilities like `text-primary`, `bg-accent-300` etc.

2. Include the DueCSS base.

   If you're using Sass, you can import DueCSS right into your main stylesheet (given a Vite context to resolve the import):

   ```scss
   @use 'duecss/reset';
   @use 'duecss/base';
   ```

   You could also import DueCSS before your main CSS entrypoint in your main script:

   ```ts
   import 'duecss/base.css'
   import './main.css'
   import 'uno.css'
   ```

3. For further customization like, overwrite the main global CSS custom properties:

   ```css
   :root {
     --du-font-family-normal: 'HK Grotesk', system-ui;
     --du-font-family-heading: 'Petunia Sans', sans-serif;
     --du-text-scale-ratio: 1.333;
   }
   ```

   With these applied, you can use utilities like `font-normal` or `font-heading` in your components.

## Features

For a full list of global custom properties, take a look inside [`base.css`](./styles/base.css).

### Dark Mode

To enable the dark mode on the whole document or apply it to a container only, use the `data-theme` attribute:

```html
<html data-theme="dark"></html>
```

With the dark mode applied, all contrast colors will be inverted. Background and foreground color will be managed by the attribute as well.

### Use Config Colors as CSS Custom Properties

To access and reuse primary and accent colors in your CSS, you can add the primary and accent colors to your `:root` element:

```html
<html
  class="due-var-color-primary due-var-color-accent due-var-color-accent-700"
  lang="en"
/>
```

DueCSS will then generate and include the following global CSS custom properties:

```css
.due-var-color-accent {
  --du-color-accent: #c3a19d;
}

.due-var-color-accent-700 {
  --du-color-accent-700: #95615b;
}

.due-var-color-primary {
  --du-color-primary: #943d40;
}
```

Now you can reference to these color variables everywhere in your CSS code.

### Utilities for Animate.css

DueCSS lets you use [Animate.css](https://animate.style) by providing UnoCSS rules that provide utility-first access to the animations.

```html
<h1 class="animated animated-bounce animated-infinite">
  Forever Bouncing Heading
</h1>
```

The following classes are available:

| Class                     | Properties                             |
| ------------------------- | -------------------------------------- |
| `animate-[time]`          | `animation-name: name;`                |
| `animate-duration-[time]` | `animation-duration: time;`            |
| `animate-delay-[time]`    | `animation-delay: time;`               |
| `animate-infinite`        | `animation-iteration-count: infinite;` |
| `animate-repeat-[n]`      | `animation-iteration-count: n;`        |

## License

[MIT](./LICENSE) License © 2021-PRESENT [Johann Schopplich](https://github.com/johannschopplich)
