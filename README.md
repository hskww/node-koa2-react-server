# starter-node-react
A starter project for react-server-app, if you don't familiar with React with Webpack,
the following links is highly recommended.

- [Roadmap for learning React](https://github.com/wwsun/awesome-javascript/tree/master/sections/React)
- [React and Webpack Cookbook - chn version](https://fakefish.github.io/react-webpack-cookbook/index.html)

## Dependencies

please use the latest version of following tools:

1. ECMAScript 6
1. React [0.14](http://facebook.github.io/react/blog/2015/10/07/react-v0.14.html)
1. Webpack 1.12
1. Babel [6.0](https://babeljs.io/blog/2015/10/29/6.0.0/)
1. Koa 2.0
1. Node.js 4.4+

## Documentation

### Server-side codes with ES6

- `babel-node` is selected in the server-side, 
which is an executable for running code via Babel that otherwise works like the `node` executable.

- `babel-preset-es2015` is selected, so that Babel can transpile ES6.
The preset configures Babel so that only ES6 constructs are transpiled that missing from Node.js 5。

### Client side codes with ES6 (React with ES6)

Tools:

- **webpack** as a client-side module build and module loader
- **npm** as the package manager
- **Babel** as a transpiler from ES6 to ES5

Dependencies:

- `babel-loader` enables webpack to transpile JavaScript via Babel.
- `babel-preset-es2015` is a Babel preset for compiling ES6 to plain ES6.
- `webpack-dev-server` adds a hot-reloading development web server to webpack.

## Running

### Install dependencies

    npm install
    
### Build

If your app is ready, and you want to check the results, you can execute

    npm run dev

then the `bundle.js`(rename 'index.js') is serving at `http://localhost:9000/js/index.js` via your koa server, 


**remember!!! you should modify the path of file `index.js` in `layout.jsx` manually!**

### Start

    npm start
    
### Browse

Open your browser, and visit `http://localhost:3000` to check the result

