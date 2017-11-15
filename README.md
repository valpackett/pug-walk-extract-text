[![npm version](https://img.shields.io/npm/v/pug-walk-extract-text.svg?style=flat)](https://www.npmjs.org/package/pug-walk-extract-text)
[![npm downloads](https://img.shields.io/npm/dm/pug-walk-extract-text.svg?style=flat)](https://www.npmjs.org/package/pug-walk-extract-text)
[![Build Status](https://img.shields.io/travis/myfreeweb/pug-walk-extract-text.svg?style=flat)](https://travis-ci.org/myfreeweb/pug-walk-extract-text)
[![Unlicense](https://img.shields.io/badge/un-license-green.svg?style=flat)](http://unlicense.org)

# pug-walk-extract-text

A small module for extracting text (e.g. inline `script` and `style` tags) from [Pug] files (formerly called Jade)!

Used by [eslint-plugin-pug].

[Pug]: https://pugjs.org
[eslint-plugin-pug]: https://github.com/myfreeweb/eslint-plugin-pug

## Installation

Install with [npm], obviously:

```bash
npm install --save-dev pug-parser pug-lexer pug-walk-extract-text
```

[npm]: https://www.npmjs.com

## Usage

```javascript
const lexer = require('pug-lexer')
const parser = require('pug-parser')
const walkExtract = require('pug-walk-extract-text')

function shouldExtract (node) {
	return node.type === 'Tag' && (node.name === 'script' || node.name === 'style')
}

const filename = 'some-file.pug'
const text = fs.readFileSync(filename, { encoding: 'utf-8' })
const results = walkExtract(parser(lexer(text, filename), filename), text, shouldExtract)
// [
//   { text: "body { background: #efefef; color: #444; }\n  html { font-size: 105%; }",
//     indent: 6, line: 9,
//     node: { attrs: [], ..., name: 'style', type: 'Tag' } },
//   { text: "console.log({\n  scri: 'pt'\n})",
//     indent: 6, line: 15,
//     node: { attrs: [], ..., name: 'script', type: 'Tag' } },
// ]
```

## Contributing

Please feel free to submit pull requests!

By participating in this project you agree to follow the [Contributor Code of Conduct](http://contributor-covenant.org/version/1/4/) and to release your contributions under the Unlicense.

[The list of contributors is available on GitHub](https://github.com/myfreeweb/pug-walk-extract-text/graphs/contributors).

## License

This is free and unencumbered software released into the public domain.  
For more information, please refer to the `UNLICENSE` file or [unlicense.org](http://unlicense.org).
