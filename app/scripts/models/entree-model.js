var Backbone = require('backbone');


var EntreeModel = Backbone.Model.extend({
  idAttribute: "_id"
});

var OrderModel = Backbone.Model.extend({

});

var MenuCollection = Backbone.Collection.extend({
  model: EntreeModel,
  url: 'https://tiny-lasagna-server.herokuapp.com/collections/mattsmajesticthairestaurant/'
});


module.exports = {
  'MenuCollection': MenuCollection,
  'OrderModel': OrderModel
};
