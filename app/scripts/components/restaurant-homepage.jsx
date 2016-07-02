var React = require('react');
var MenuCollection = require('../models/entree-model').MenuCollection;
var OrderModel = require('../models/entree-model').OrderModel;



var OrderViewComponent = React.createClass({
  render: function(){

    return (
      <div className="customer-order col-xs-4">
        <ul>
          <div>Your Order</div>
          <div>name</div>
          <div>description</div>
          <div>price</div>
        </ul>
      </div>
    )
  }
});

var FoodItemViewComponent = React.createClass({
  getInitialState: function(){
    return {name: '', description: '', price: ''};
  },
  onClick: function(item){
    this.props.orderModel.add(item);
  },
  render: function(){
    var self = this;
    var entree = this.props.menuCollection.map(function(item){
      return (
        <li>
          <span>{item.get('name')}</span>
          <span>{item.get('description')}</span>
          <span>{item.get('price')}</span>
          <button onClick={function()self.onClick(item)} value="post" className="btn btn-success">Add to Order</button>
        </li>
      )
    });

    return ({entree})
  }
});

var MenuListComponent = React.createClass({

  render: function(){

    return (
      <div className="row">
        <div className="menu-list col-xs-8">
          <ul>
            <FoodItemViewComponent />
          </ul>
        </div>
      </div>
    )
  }
});


var RestaurantHomePageComponent = React.createClass({
  getInitialState: function(){
    return {
      menu: [],
      order: []
    };
  },

  componentWillMount: function(){
    var menuCollection = new MenuCollection();
    var orderModel = new OrderModel();

    menuCollection.add([
      {'name': 'Pad Thai', 'description': 'Most famous Thai rice nooles dish. Cooked with egg, bean spouts, tofu, and sprinkled with ground peanut.', 'price': '$10.50'},
      {'name': 'Tom Yum Soup', 'description': 'Lemon grass soup with your choice of meat. Served with mushrooms, onions, tomatoes, and lime juice. Your choice of chicken, tofu, vegetable, or shrimp (for an additional charge).', 'price': '$6.95'},
      {'name': 'Crab Fried Rice', 'description': 'Thai style fried rice with real crab meat, eggs, onions, and tomatoes.', 'price': '$14.95'},
      {'name': 'Roasted Duck Noodle Soup', 'description': 'Noodle with ginger soup, slice roasted duck, green onion, and bean sprouts.', 'price': '$12.95'},
      {'name': 'Pad Se-Ew', 'description': 'Stir fried with fresh wide rice noodles, broccoli, and eggs in sweet black bean sauce.', 'price': '$10.50'},
      {'name': 'Duck Basil', 'description': 'Sliced boneless roasted duck, sauteed with bell peppers, green beans, onions, and basil leaves in a spicy homemade sauce.', 'price': '$16.95'},
      {'name': 'Steamed Mussels', 'description': 'Steamed mussels with lemon grass and basil leaves.', 'price': '$12.95'},
      {'name': 'Salmon Fried Rice', 'description': 'Thai style fried rice with salmon, eggs, onions, peas, carrots, and tomatoes.', 'price': '$13.95'},
      {'name': 'Spicy and Sour Fish', 'description': 'Your choice of salmon or sole fillet, steamed and mixed in spicy lime sauce served on a warming plate.', 'price': '$14.95'},
      {'name': 'Deep Fried Salmon Fillet', 'description': 'Deep fried whole fish (golden pompano) with your choice of spicy basil, three flavors, ginger, or panag.', 'price': '$16.95'}
    ]);
    this.setState({'menu': menuCollection});
  },

  render: function(){

    return (
      <div>
        <div className="row">
          <div className="header">
            <span className="logo col-xs-2"></span>
            <h1 className="restaurant-name col-xs-10">Majestic Thai</h1>
            <div className="row">
              <h2 className="disclaimer col-xs-offset-2 col-xs-10">Authentic Thai Cuisine</h2>
            </div>
          </div>
        </div>



        <OrderViewComponent />
        <MenuListComponent />
      </div>
    );
  }
});


module.exports = RestaurantHomePageComponent;
