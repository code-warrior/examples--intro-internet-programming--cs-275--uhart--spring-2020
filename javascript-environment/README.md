# JavaScript Environment
Before you start working in JavaScript, prepare your programming environment so your style and code is consistent across editors, and so your code is as error-free as possible. EditorConfig will ensure coding style consistency, while ESLint will ensure code quality. Let’s start with EditorConfig.

## Editorconfig
[EditorConfig](https://editorconfig.org/) helps teams maintain a consistent coding style across different editors/IDEs. It does this through the combination of a plug-in and a configuration file. Let’s start with the plug-in.

### Installing the EditorConfig Plug-in
If you’re using WebStorm, then EditorConfig is already built-in. Otherwise, you’ll need a plug-in.

* [Atom](https://github.com/sindresorhus/atom-editorconfig#readme)
* [Notepad++](https://github.com/editorconfig/editorconfig-notepad-plus-plus#readme)
* [SublimeText](https://github.com/sindresorhus/editorconfig-sublime#readme)
* [VSCode](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)

### Installing the Configuration File
EditorConfig works in concert with a configuration file called `.editorconfig`. (Note the `.` at the beginning of the file name.) It looks for that file in your project’s folder. If it doesn’t find it, it looks in the parent folder. It will continue this search until it reaches your machine’s root folder, or finds a `.editorconfig` file with `root=true`.

This folder, `javascript-environment`, has the `.editorconfig` file that you *must* use for this class. Move or copy it to your home folder.

---

## ESLint
[ESLint](https://eslint.org/) is a syntax checker for JavaScript. It runs on Node and, like EditorConfig, requires a configuration file (for our purposes) to run properly.

### Install Node
Install the Long Term Support, or LTS, version of Node from [https://nodejs.org/en/](https://nodejs.org/en/), which is available for macOS, Windows, and Linux.

### Install ESLint
From the command line:

```bash
npm install eslint
```

Verify the installation:

```bash
eslint -v
```

### Install ESLint’s Configuration File
This folder, `javascript-environment`, has the `.eslint.json` file that you *must* use for this class. Move or copy it to your home folder.
