# Day01 — CommonJS and ES Module examples

This folder contains two small examples that demonstrate the difference between CommonJS (CJS) modules and ES Modules (ESM) in Node.js.

Files
- `first.js` — A CommonJS consumer that uses `require()` to import functions from `second.js`.
- `second.js` — A CommonJS module that exports two functions (`Sum` and `Sub`) via `module.exports`.
- `copy/first.mjs` — An ES Module consumer that uses `import` to load the default export from `second.mjs`.
- `copy/second.mjs` — An ES Module that exports a default `Sum` function using `export default`.

What each file does
- `second.js` prints a header message, defines `Sum(a,b)` and `Sub(a,b)`, and exports them as an object.
- `first.js` requires `./second` and calls `Sum(3,4)` and `Sub(8,9)`, then prints an extra message.
- `copy/second.mjs` defines a `Sum(a,b)` function and exports it as the default export.
- `copy/first.mjs` imports the default export from `./second.mjs`, calls `Sum(5,10)` and logs a message.

Run instructions

Prerequisite: Have Node.js installed. These examples work on recent Node.js versions (12+ for basic support; Node 14+ recommended). To run the CommonJS examples (the default Node module type):

```pwsh
# from the Day01 folder
node first.js
```

You should see output similar to:

- "I am Second.Js File" (from `second.js`)
- `7` (result of `Sum(3,4)`)
- `-1` (result of `Sub(8,9)`)
- "I am first.Js File"

To run the ES Module examples (.mjs files):

```pwsh
# from the Day01 folder
node copy/first.mjs
```

Output will be something like:

- `15` (result of `Sum(5,10)`)
- "Hello I am first.js file"

Notes and tips
- The `.js` files use CommonJS: `require()` and `module.exports`.
- The `.mjs` files use ES Module syntax: `import` and `export default`.
- Alternatively, you can set "type": "module" in a `package.json` at the project root to treat `.js` as ESM. If you do that, the CommonJS files here will need converting (or renamed to `.cjs`).
- If you see syntax errors when running `.mjs` files, check your Node.js version. ESM support and behavior changed across Node releases.
- This folder is a minimal demonstration — try modifying the functions to practice exports/imports.

License

These examples are for learning and may be freely used.
