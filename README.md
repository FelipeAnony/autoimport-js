# Autoimport-js

This package provides a function for dynamically importing all modules from a folder using
the ES6 dynamic import feature.

This package was originally designed to dynamically import all routes from a /routes folder in a Node application. With this module, it was possible to automatically import all the routes of the application without having to import them one by one. Naturally, you can utilize it in various scenarios according to your application's requirements.

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
.
.
.
// Provide the absolute path of the folder to retrieve files from
const folderPath = '/complete/path/to/folder';
const modules = await autoimport(folderPath);
console.log(modules); // Array of dynamically imported modules
```

## License

This package is licensed under the MIT License.

## Issues

If you encounter any issues, please report them on issues section.
