const test = require('tape')
const fs = require('fs')
const lexer = require('pug-lexer')
const parser = require('pug-parser')
const walkExtract = require('./')

function shouldExtract (node) {
	return node.type === 'Tag' && (node.name === 'script' || node.name === 'style')
}

test('extract scripts and styles', t => {
	t.plan(1)
	const text = fs.readFileSync('fixture.pug', { encoding: 'utf-8' })
	const results = walkExtract(parser(lexer(text)), text, shouldExtract)
	t.deepEqual(results.map(r => { delete r.node; return r }), [
		{ text: "alert('piped')\nalert('piped-no-space')", indent: 8, line: 5 },
		{ text: "print 'hello'", indent: 31, line: 7 },
		{ text: "body { background: #efefef; color: #444; }\n  html { font-size: 105%; }", indent: 6, line: 9 },
		{ text: "alert('inline')", indent: 11, line: 13 },
		{ text: "console.log({\n  dot: 'ted'\n})", indent: 6, line: 15 },
		{ text: "@testFilter", indent: 6, line: 19 },
	])
})
