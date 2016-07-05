var React = require('react');
var MenuCollection = require('../models/menu').MenuCollection;
var CartCollection = require('../models/cart').CartCollection;



var Cart = React.createClass({
  render: function(){
    var self = this;
    var collection = this.props.cartItems;

    var cartItemList = this.props.cartItems.map(function(model){
      return (
        <li key={model.cid}>
          {model.get('name')} {model.displayPrice()}
          <button onClick={function(){self.props.handleRemoveFromCart(model)}}>Remove From Cart</button>
        </li>
      )
    })
    return (
      <div className="cart col-md-offset-1 col-md-3">
        <ul className="cart-list">
          <span className="your-order">Your Order</span>
          {cartItemList}
        </ul>

        Cart Total: {collection.getCartTotal()}
      </div>
    )
  }
});

// var FoodItemViewComponent = React.createClass({
//   componentWillMount: function(){
//     return {name: '', description: '', price: ''};
//   },
//   onClick: function(item){
//     this.props.orderModel.add(item);
//   },
//   render: function(){
//     var self = this;
//     var entree = this.props.menu.map(function(item){
//       return (
//         <li>
//           <span>{item.get('name')}</span>
//           <span>{item.get('description')}</span>
//           <span>{item.get('price')}</span>
//           <button onClick={function()self.onClick(item)} value="post" className="btn btn-success">Add to Order</button>
//         </li>
//       );
//     });
//
//     return ({entree})
//   }
// });

var Menu = React.createClass({

  render: function(){
    var self = this;

    var menuItemList = this.props.menuItems.map(function(model){
      return (
        <li key={model.cid} className="menu-item">
          <div className="col-md-8">
            <div className="menu-item-name">
              {model.get('name')}
            </div>
            <div className="menu-item-description">
              {model.get('description')}
            </div>
            <div className="menu-item-price">
              {model.displayPrice()}
            </div>
          </div>
          <button onClick={function(){self.props.handleAddToCart(model)}} className="col-md-offset-2 col-md-2">Add To Cart</button>
        </li>
      )
    });

    return (
      <ul className="menu col-md-8">
        {menuItemList}
      </ul>
    )
  }
});


var AppContainer = React.createClass({
  getInitialState: function(){
    return {
      menuItems: [],
      cartItems: []
    };
  },

  componentWillMount: function(){
    var menuItems = new MenuCollection();
    var cartItems = new CartCollection();

    menuItems.add([
      {'name': 'Pad Thai', 'description': 'Most famous Thai rice nooles dish. Cooked with egg, bean spouts, tofu, and sprinkled with ground peanut.', 'price': 1050},
      {'name': 'Tom Yum Soup', 'description': 'Lemon grass soup with your choice of meat. Served with mushrooms, onions, tomatoes, and lime juice. Your choice of chicken, tofu, vegetable, or shrimp (for an additional charge).', 'price': 695},
      {'name': 'Crab Fried Rice', 'description': 'Thai style fried rice with real crab meat, eggs, onions, and tomatoes.', 'price': 1495},
      {'name': 'Roasted Duck Noodle Soup', 'description': 'Noodle with ginger soup, slice roasted duck, green onion, and bean sprouts.', 'price': 1295},
      {'name': 'Pad Se-Ew', 'description': 'Stir fried with fresh wide rice noodles, broccoli, and eggs in sweet black bean sauce.', 'price': 1050},
      {'name': 'Duck Basil', 'description': 'Sliced boneless roasted duck, sauteed with bell peppers, green beans, onions, and basil leaves in a spicy homemade sauce.', 'price': 1695},
      {'name': 'Steamed Mussels', 'description': 'Steamed mussels with lemon grass and basil leaves.', 'price': 1295},
      {'name': 'Salmon Fried Rice', 'description': 'Thai style fried rice with salmon, eggs, onions, peas, carrots, and tomatoes.', 'price': 1395},
      {'name': 'Spicy and Sour Fish', 'description': 'Your choice of salmon or sole fillet, steamed and mixed in spicy lime sauce served on a warming plate.', 'price': 1495},
      {'name': 'Deep Fried Salmon Fillet', 'description': 'Deep fried whole fish (golden pompano) with your choice of spicy basil, three flavors, ginger, or panag.', 'price': 1695}
    ]);
    this.setState({
      'menuItems': menuItems,
      'cartItems': cartItems
    });
  },
  handleAddToCart: function(model){
    this.state.cartItems.add(model);
    this.forceUpdate();
    {/*console.warn('called handleAddToCart');*/}
  },
  handleRemoveFromCart: function(model){
    this.state.cartItems.remove(model);
    this.forceUpdate();
  },
  render: function(){

    return (
      <div>
        <div className="row">
          <div className="header">
            {/*}<span className="logo col-xs-2"></span>*/}
            <h1 className="restaurant-name">Majestic Thai</h1>
            <div className="row">
              <h2 className="disclaimer">Authentic Thai Cuisine</h2>
            </div>
          </div>
        </div>


        <Menu handleAddToCart={this.handleAddToCart} menuItems={this.state.menuItems}/>
        <Cart handleRemoveFromCart={this.handleRemoveFromCart} cartItems={this.state.cartItems} />
      </div>
    );
  }
});


module.exports = AppContainer;
