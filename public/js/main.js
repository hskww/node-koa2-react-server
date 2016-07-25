var Content = require('./components/content');
var unescapeHtml = require('unescape-html');
var React = require('react');
var ReactDOM = require('react-dom');

function initApp() {
  var container = document.getElementById('content');
  var list = unescapeHtml(window.__list__);
  list = JSON.parse(list);
  // reuse server side render result
  ReactDOM.render(
    <Content list={list}/>,
    container
  );
}

initApp();
