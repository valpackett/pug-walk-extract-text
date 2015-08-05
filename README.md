# jade-walk-extract-text [![npm version](https://img.shields.io/npm/v/jade-walk-extract-text.svg?style=flat)](https://www.npmjs.org/package/jade-walk-extract-text) [![npm downloads](https://img.shields.io/npm/dm/jade-walk-extract-text.svg?style=flat)](https://www.npmjs.org/package/jade-walk-extract-text) [![Build Status](https://img.shields.io/travis/myfreeweb/jade-walk-extract-text.svg?style=flat)](https://travis-ci.org/myfreeweb/jade-walk-extract-text) [![Dependency Status](https://img.shields.io/gemnasium/myfreeweb/jade-walk-extract-text.svg?style=flat)](https://gemnasium.com/myfreeweb/jade-walk-extract-text) [![Unlicense](https://img.shields.io/badge/un-license-green.svg?style=flat)](http://unlicense.org)

A small module for extracting text (e.g. inline `script` and `style` tags) from [Jade] files!

Used by [eslint-plugin-jade].

[Jade]: http://jade-lang.com
[eslint-plugin-jage]: https://github.com/myfreeweb/eslint-plugin-jade

## Installation

Install with [npm], obviously:

```bash
npm install --save-dev jade-parser jade-lexer jade-walk-extract-text
```

## Usage

```javascript
var lexer = require('jade-lexer')
var parser = require('jade-parser')
var walkExtract = require('jade-walk-extract-text')

function shouldExtract (node) {
	return node.type === 'Tag' && (node.name === 'script' || node.name === 'style')
}

var filename = 'some-file.jade'
var text = fs.readFileSync(filename, { encoding: 'utf-8' })
var results = walkExtract(parser(lexer(text, filename), filename), text, shouldExtract)
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
Bugfixes and simple non-breaking improvements will be accepted without any questions :-)

By participating in this project you agree to follow the [Contributor Code of Conduct](http://contributor-covenant.org/version/1/2/0/).

## License

This is free and unencumbered software released into the public domain.  
For more information, please refer to the `UNLICENSE` file or [unlicense.org](http://unlicense.org).
