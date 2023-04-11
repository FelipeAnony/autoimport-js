# Autoimport-js

This package provides a function for dynamically importing all modules from a folder using
the ES6 dynamic import feature.

This package was originally designed to dynamically import all routes from a /routes folder in a Node application. With this module, it was possible to automatically import all the routes of the application without having to import them one by one. Naturally, you can utilize it in various scenarios according to your application's requirements.

Supports JS/TS
Compatible with Node v10+

<br>
<br>

## Installation

You can install this package using npm or yarn:

```sh
npm install autoimport-js
```

or

```sh
yarn add autoimport-js
```

<br>
<br>

## Usage

```javascript
import { autoimport } from 'autoimport-js';
import path from "path";
.
.
.
// Provide the absolute path of the folder to retrieve files from
const folderPath = path.join(__dirname, "/path/to/folder");
const modules = await autoimport(folderPath);
console.log(modules); // Array of dynamically imported modules
```

<br>

## License

This package is licensed under the MIT License.

<br>

## Issues

If you encounter any issues, please report them on issues section.

<br>

## SourceCode

You can see the source code here: [See on Github](https://github.com/FelipeAnony/autoimport-js)
