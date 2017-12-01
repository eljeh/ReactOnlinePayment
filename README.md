

This is the online payment application written in [React](https://facebook.github.io/react/).

## To Use

To clone and run this repository you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. 

After installing [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/), open Command Prompt or Powershell session and...

``` bash

# Install global dependencies
npm install -g phantomjs-prebuilt serve

# Install dependencies
npm i
```

## Local Development
``` bash
npm start
# Or
npm run dev
```

## Testing

``` bash
# Single test run
npm test

# Continuous testing (tests will run as files are changed)
npm run test:watch

# Run lint (StyleCop for Javascript using Airbnb JavaScript Style Guide)
npm run lint
```

## Building
``` bash
# Build a distributable application
npm run build
```

You can use [serve](https://github.com/zeit/serve) to run the distributable.

``` bash
cd dist
serve
```
