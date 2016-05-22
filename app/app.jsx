var React = require('react');
var ReactDOM = require('react-dom');
var { Route, Router, IndexRoute, hashHistory } = require('react-router');

// Load foundations
$(document).foundation();

// App css
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <p>Bolerplate 3 Project</p>,
  document.getElementById('app')
);
