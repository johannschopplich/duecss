# DueCSS

> ℹ️ Still work in progress.

A minimal CSS framework, built upon UnoCSS.

It extends the Tailwind CSS reset, adds sensible [global defaults](./styles/base/global.scss) as well as some generic [rules](./src/rules) and [shortcuts](./src/shortcuts.ts).

Sometimes, you may want to use all the power of an on-demand utility engine like UnoCSS or Tailwind, but write custom CSS as well, while accessing the color, spacing variables etc you've defined in your configuration. That's where DueCSS bridges the gap.

## Key Features

- 🌙 Dark mode based on CSS custom properties
- 🧶 Resilient set of base styles
- 🧩 Use via Sass or as plain CSS
- 🍱 CSS-first – reuse your custom properties everywhere
- 🏵 Works well for [traditional setups like Kirby](https://github.com/johannschopplich/kirby-vite-unocss-kit)

## Installation

```bash
npm i duecss -D
```

## Usage

1. Create a `unocss.config.ts` (or `unocss.config.js`) inside your UnoCSS project. To overwrite the default colors, create a `primary` and `accent` entry with some shades:

    Example:

    ```js
    import { defineConfig, presetUno } from "unocss";
    import { presetDue } from "duecss";

    export default defineConfig({
      theme: {
        colors: {
          primary: {
            DEFAULT: "#943D40",
            "50": "#DDACAE",
            "100": "#D79D9F",
            "200": "#CB8183",
            "300": "#BF6467",
            "400": "#B1494C",
            "500": "#943D40",
            "600": "#6C2D2F",
            "700": "#451C1E",
            "800": "#1D0C0C",
            "900": "#000000",
          },
          accent: {
            DEFAULT: "#C3A19D",
            "50": "#FFFFFF",
            "100": "#FFFFFF",
            "200": "#F1EAE9",
            "300": "#E2D2D0",
            "400": "#D2B9B6",
            "500": "#C3A19D",
            "600": "#AE807A",
            "700": "#95615B",
            "800": "#724A46",
            "900": "#4F3430",
          },
        },
      },
      presets: [presetUno(), presetDue()],
    });
    ```

    Now, you can use color utilities like `text-primary`, `bg-accent-300` etc.

2. Include the DueCSS base.

    Either with Sass:

    ```scss
    @use "duecss/base/all";
    ```

    Or with CSS (given a Vite context):

    ```css
    @import "duecss/base";
    ```

    Or import the CSS in your `main.ts`:

    ```js
    // Or `duecss/base.css`
    import "duecss/base/all.scss";
    ```

3. For further customization like, overwrite the main global CSS custom properties:

    ```css
    :root {
      --du-font-family-normal:      "HK Grotesk", system-ui;
      --du-font-family-heading:     "Petunia Sans", sans-serif;
      --du-text-scale-ratio:        1.333;
    }
    ```

    Now, use `font-normal` or `font-heading` in your components.

## Features

For a full list of global custom properties, take a look inside [`root.scss`](./styles/base/root.scss).

### Dark Mode

To enable the dark mode on the whole document or apply it to a container only, use the `data-theme` attribute:

```html
<html data-theme="dark">
```

With the dark mode applied, all contrast colors will be inverted. Background and foreground color will be managed by the attribute as well.

### Use Config Colors as CSS Custom Properties

To access and reuse primary and accent colors in your CSS, you can add the primary and accent colors to your `:root` element:

```html
<html class="due-var-color-primary due-var-color-accent due-var-color-accent-700" lang="en">
```

DueCSS will then generate and include the following global CSS custom properties:

```css
.due-var-color-accent {
  --du-color-accent: #C3A19D;
}

.due-var-color-accent-700 {
  --du-color-accent-700: #95615B;
}

.due-var-color-primary {
  --du-color-primary: #943D40;
}
```

Now you can reference to these color variables everywhere in your CSS code.

## License

[MIT](./LICENSE) License © 2021 [Johann Schopplich](https://github.com/johannschopplich)
