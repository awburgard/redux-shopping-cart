import React, { Component } from 'react';
import './App.css';
// Shorthand import, {} in import is called destructuring
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import 'bulma/css/bulma.css'

// Components
import Products from '../Products/Products.js';
import Checkout from '../Checkout/Checkout.js';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';


class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="container">
          <h1>Redux Shopping Cart</h1>

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
      </MuiThemeProvider>

    );
  }
}

export default App;
