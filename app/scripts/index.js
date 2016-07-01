var $ = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');

var RestaurantHomePageComponent = require('./components/restaurant-homepage.jsx');


ReactDOM.render(
  React.createElement(RestaurantHomePageComponent),
  document.getElementById('app')
);
