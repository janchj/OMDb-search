# OMDb Search

Search engine for movies from the [API of OMDb](http://www.omdbapi.com/).

Single page application that retrieves all movies that match provided keywords.
Results (movies) are presented with the title, year, genre, a poster, and a hyperlink to view more details.

## Prerequisites

[Node.js](https://docs.npmjs.com/getting-started/installing-node) and [npm](https://docs.npmjs.com/getting-started/installing-node) are essential.
    
## Install npm packages

> See npm and nvm version notes above

Install the npm packages described in the `package.json` and verify that it works:

**Attention Windows Developers:  You must run all of these commands in administrator mode**.

```bash
npm install
npm start
```

> If the `typings` folder doesn't show up after `npm install` please install them manually with:

> `npm run typings -- install`

### npm scripts

We've captured many of the most useful commands in npm scripts defined in the `package.json`:

* `npm start` - runs the compiler and a server at the same time, both in "watch mode".
* `npm test` - compiles, runs and watches the karma unit tests

## Testing

Running the test command, compiles the application, then simultaneously re-compiles and runs the karma test-runner.
Both the compiler and the karma watch for (different) file changes.

A HTML report is available  in `~_test-output/tests.html`.

When ready, shut it down manually with Ctrl-C.