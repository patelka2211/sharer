#!/bin/bash

# Compile JS from TS
tsc -p tsconfig.json

# Bundle all JS
rollup -c

# Minify bundled JS
terser ./bundle/sharer.iife.js -c -m -o ./bundle/sharer.iife.min.js
terser ./bundle/sharer.esm.js -c -m -o ./bundle/sharer.esm.min.js
terser ./bundle/sharer_button.js -c -m -o ./bundle/sharer_button.min.js