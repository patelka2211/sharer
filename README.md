[![](./sharer-from-kpverse.jpg)](https://kpverse.in/sharer/ "Sharer from KPVERSE")

### <div align="center"><a href="https://kpverse.in/sharer/">Sharer</a> - A URL Sharing Tool for Websites and Web Apps, from <a href="https://kpverse.in/">KPVERSE</a></div>

---

## Installation

[![npm (scoped)](https://img.shields.io/npm/v/@patelka2211/sharer)](https://www.npmjs.com/package/@patelka2211/sharer)
[![npm bundle size (scoped)](https://img.shields.io/bundlephobia/min/@patelka2211/sharer)](https://bundlephobia.com/package/@patelka2211/sharer@1.0.0)
[![npm](https://img.shields.io/npm/dy/@patelka2211/sharer)](https://www.npmjs.com/package/@patelka2211/sharer)
[![jsDelivr hits (npm scoped)](https://img.shields.io/jsdelivr/gh/hy/patelka2211/sharer)](https://cdn.jsdelivr.net/gh/patelka2211/sharer@1.0.0/)

To install Sharer from NPM, run the following command:

```sh
npm i @patelka2211/sharer
```

Alternatively, you can visit [this page](kpverse.in/sharer/#install) and configure Sharer to work the best way and directly in your website using a HTML `<script>` tag. Or simply paste the below given code as high as possible in your website or web app's `<head>` tag .

```html
<!-- Sharer scripts start -->
<script src="https://cdn.jsdelivr.net/gh/patelka2211/dynamic-colors@1.1.5/DynamicColors.js"></script>
<script src="https://cdn.jsdelivr.net/gh/patelka2211/dominar@1.2.4/Dominar.js"></script>
<script src="https://cdn.jsdelivr.net/npm/html2canvas@1.4.1/dist/html2canvas.min.js"></script>
<script src="https://cdn.jsdelivr.net/gh/patelka2211/sharer@1.0.0/Sharer.js"></script>
<script
    defer
    id="sharer-utility-js"
    class="activate-button"
    src="https://cdn.jsdelivr.net/gh/patelka2211/sharer@1.0.0/utility.js"
></script>
<!-- Sharer scripts end -->
```

---

## Available APIs

### open - type _`function`_

```ts
/**
 * Opens the Sharer with the specified options.
 * @param option — Optional configuration for the Sharer.
 */
function openSharer(option?: { url?: string; text?: string }): void;
```

### close - type _`function`_

```ts
/**
 * Closes the Sharer.
 *
 * @returns {void}
 */
function closeSharer(): void;
```

### setColor - type _`function`_

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

### button - type _`object`_

Sharer button is an object containing [`activate`](#buttonactivate---activates-the-sharer-button) and [`deactivate`](#buttondeactivate---deactivates-the-sharer-button) functions.

```ts
const button: {
    activate: () => void;
    deactivate: () => void;
};
```

#### `button.activate` - Activates the Sharer button.

#### `button.deactivate` - Deactivates the Sharer button.

---

### Method chaining

You can use method chaining in [`setColor`](#setcolor---type-function) function.

Suppose you need to [set color](#setcolor---type-function) theme of Sharer and then you immediately want to [open Sharer](#open---type-function), you can do this using method chaining with just single line of code.

```js
// The given example code will set color theme to "#2596D1" and will open Sharer.
// There is only one line of code present in the given example. It looks like 4 lines of code because it is formatted, to make sure it is easily readable.
setColor("#2596D1").open({
    url: "https://kpverse.in/",
    text: "The official KPVERSE website.",
});
```

---

### License

[MIT License](./LICENSE)

---

### <div align="center"><a href="https://kpverse.in"><img style="height: 86px;" src="./kpverse-sharer.svg"></a></div>

<div align="center">© 2023 <a href="https://kpverse.in/about/">Kartavya Patel</a>. All rights reserved.</div>
