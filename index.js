#! /usr/bin/env node

const { readFileSync, existsSync } = require("fs");
const http = require("http");
const { marked } = require('marked');
const opts = require('getopts')(process.argv, {
	alias: {
		address: ["addr", "a"],
		port: "p",
	},
	default: {
		address: 'localhost',
		port: 8080
	}
});

function listener(req, res) {
	const path = req.url.split('/').pop().split('#').shift().split('?').shift();
	res.writeHead(200);
	let defaultpath;
	if (existsSync('index.md')) {
		defaultpath = 'index.md';
	} else if (existsSync('README.md')) {
		defaultpath = 'README.md';
	};
	res.end(marked.parse(existsSync(path ? path : defaultpath) ? readFileSync(path ? path : defaultpath).toString() : (existsSync("404.md") ? readFileSync("404.md").toString() : "<h1 style=\"text-align: center;\">404</h1><p  style=\"text-align: center;\">The specified path does not exist or is not accessible.</p>"), opts));
};

const server = http.createServer(listener);
server.listen(opts.port, opts.address, () => {
	console.log(`Running at http://${opts.address}:${opts.port}`);
});