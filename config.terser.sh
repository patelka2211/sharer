#!/bin/bash

input=$1
output="${input/.js/.min.js}"

terser $input -c -m -o $output