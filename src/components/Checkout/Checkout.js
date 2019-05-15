import React, { Component } from 'react';
import mapReduxStateToProps from '../../modules/mapReduxStateToProps';
import { connect } from 'react-redux'

class Checkout extends Component {

    handleCheckout = () => {
        // TODO: Clear the cart and navigate to the product page
        this.props.dispatch({
            type: 'CLEAR_CART'
          });
    }

    render() {
        const checkoutList = this.props.reduxState.checkoutReducer.map((item, index) => {
            return (
                <ul key={index}>
                    <li>{item.name}: {item.price}</li>
                </ul>
            )
        })

        return (
            <div>
                <h2>Checkout</h2>
                {/* TODO: Display items in the cart */}
                {checkoutList}
                <button onClick={this.handleCheckout}>Checkout</button>
            </div>
        )
    }
}

export default connect(mapReduxStateToProps)(Checkout)