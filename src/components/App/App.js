import React, { Component } from 'react';
import './App.css';
// Shorthand import, {} in import is called destructuring
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import 'bulma/css/bulma.css'

// Components
import Products from '../Products/Products.js';
import Checkout from '../Checkout/Checkout.js';
import Typography from '@material-ui/core/Typography';


class App extends Component {
  render() {
    return (
      <div className="container">
        <Typography component="h1" variant="h1" gutterBottom> Redux Shopping Cart</Typography>

        <Router>
          <div className="hero">
            <ul className="nav">
              <li>
                <Link to="/">Product</Link>
              </li>
              <li>
                <Link to="/checkout">Checkout</Link>
              </li>
            </ul>
            <Route exact path="/" component={Products} />
            <Route exact path="/checkout" component={Checkout} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
