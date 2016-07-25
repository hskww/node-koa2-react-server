/*!
 * koa-react-view - example/app.js
 * MIT Licensed
 */

'use strict';

/**
 * Module dependencies.
 */

var staticCache = require('koa-static-cache');
var register = require('babel-register');
var react = require('../koa-react-view.js');
var path = require('path');
var koa = require('koa');
var route = require('koa-route');
var logger = require('koa-logger');

var app = new koa();


var viewpath = path.join(__dirname, '../views');
var assetspath = path.join(__dirname, '../../public');

react(app, { views: viewpath });
app.use(logger());

// imports babel runtime for JSX views, warning: live transpiling
// best to precompile in production deploys for perf + reliability
register({
  only: [
    viewpath,
    assetspath
  ]
});

app.use(staticCache(assetspath));

// app.use(function* () {
//   this.render('index', {
//     title: 'List',
//     list: [
//       'hello koa',
//       'hello react'
//     ]
//   });
// });

app.use(route.get('/', function* (){
  this.render('index', {
    title: 'List',
    jsname:"index",
    list: [
      'hello koa',
      'hello react'
    ]
  });
}));
app.use(route.get('/detail', function*(){
  this.render('detail', {
        title: 'detail11',
        jsname:"detail",
        list: [
          'hello detail',
          "wangzai"
        ]
      });
}));




// app.use(ctx => {
  
//   ctx.render('index', {
//     title: 'List',
//     list: [
//       'hello koa',
//       'hello react'
//     ]
//   });
// })



app.listen(3000);
console.log('server start listen at 3000');
