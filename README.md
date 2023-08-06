# Sharer

Currently in testing mode. Stable version releasing soon.

<!-- [![](./sharer-from-kpverse.jpg)](https://kpverse.in/sharer/ "Sharer from KPVERSE")

### <div align="center"><a href="https://kpverse.in/sharer/">Sharer</a> - A URL Sharing Tool for Websites and Web Apps, from <a href="https://kpverse.in/">KPVERSE</a></div>

---

## Installation

[![npm (scoped)](https://img.shields.io/npm/v/@patelka2211/sharer)](https://www.npmjs.com/package/@patelka2211/sharer)
[![npm bundle size (scoped)](https://img.shields.io/bundlephobia/min/@patelka2211/sharer)](https://bundlephobia.com/package/@patelka2211/sharer@1.0.0)
[![npm](https://img.shields.io/npm/dy/@patelka2211/sharer)](https://www.npmjs.com/package/@patelka2211/sharer)
[![jsDelivr hits (npm scoped)](https://img.shields.io/jsdelivr/gh/hy/patelka2211/sharer)](https://cdn.jsdelivr.net/gh/patelka2211/sharer@1.0.0/)

To install Sharer using npm, run the following command:

```sh
npm i @patelka2211/sharer
```

Alternatively, you can include `Sharer and its dependency modules` in your website using a HTML `<script>` tag:

```html
<script src="https://cdn.jsdelivr.net/gh/patelka2211/dynamic-colors@1.1.5/DynamicColors.js"></script>
<script src="https://cdn.jsdelivr.net/gh/patelka2211/dominar@1.2.4/Dominar.js"></script>
<script src="https://cdn.jsdelivr.net/npm/html2canvas@1.4.1/dist/html2canvas.min.js"></script>
<script src="https://cdn.jsdelivr.net/gh/patelka2211/sharer@1.0.0/Sharer.js"></script>

Below given code is optional. But important.
<script defer>
    // To activate Sharer button, following line of code must be present.
    Sharer.button.activate();

    // To change color theme of Sharer, replace <YOUR_FAVORITE_COLOR> with your favorite HEX color.
    Sharer.setColor("<YOUR_FAVORITE_COLOR>");
</script>
```

---

## Usage

### open - type `function`

```ts
/**
 * Opens the Sharer with the specified options.
 * @param option — Optional configuration for the Sharer.
 */
function openSharer(option?: { url?: string; text?: string }): void;
```

### close - type `function`

```ts
/**
 * Closes the Sharer.
 *
 * @returns {void}
 */
function closeSharer(): void;
```

### setColor - type `function`

```ts
/**
 * Sets Sharer color.
 *
 * @param {string | undefined} newColor - The new color value.
 * @returns {object} An object containing open and close functions.
 * @property {function} open - The function to open the Sharer.
 * @property {function} close - The function to close the Sharer.
 */
function setColor(newColor?: string): object;
```

---

### button - type `object`

Sharer button is an object containing [`activate`](#buttonactivate---activates-the-sharer-button) and [`deactivate`](#buttondeactivate---deactivates-the-sharer-button) methods.

```ts
const button: {
    activate: () => void;
    deactivate: () => void;
};
```

#### `button.activate` - Activates the Sharer button.

#### `button.deactivate` - Deactivates the Sharer button.

### License

[MIT License](./LICENSE)

---

### <div align="center"><a href="https://kpverse.in"><img style="height: 86px;" src="./kpverse-sharer.svg"></a></div>

<div align="center">© 2023 <a href="https://kpverse.in/about/">Kartavya Patel</a>. All rights reserved.</div> -->
