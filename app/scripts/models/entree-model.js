var Backbone = require('backbone');


var EntreeModel = Backbone.Model.extend({
  idAttribute: "_id"
});

var MenuCollection = Backbone.Collection.extend({
  model: EntreeModel,
  url: 'https://tiny-lasagna-server.herokuapp.com/collections/mattsmajesticthairestaurant/'
});


module.exports = MenuCollection;
