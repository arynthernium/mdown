# md-cli

A command-line tool to view markdown in the browser. Built for practice, and has been done far better before, so using anyone else's version of this tool is a better idea.

Install:
```sh
npm i -g @arynthernium/md-cli
```
```sh
yarn global add @arynthernium/md-cli
```

## Usage
```sh
mdown
```

### paths
`md-cli` will serve `index.md` or `README.md` from the current directory as the document root. `index.md` is preferred.

### 404
If the path is not found, `404.md` will be used, or a simple default 404 page.

## Options

```sh
--port (-p) // runs the server at the specified port, and defaults to :8080
--address (--addr, --a) specify
```
Any options not caught by md-cli will pass through to the renderer.