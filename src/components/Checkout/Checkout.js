import React, { Component } from 'react';
import mapReduxStateToProps from '../../modules/mapReduxStateToProps';
import { connect } from 'react-redux'
import TotalPrice from '../TotalPrice/TotalPrice'

class Checkout extends Component {

    handleCheckout = () => {
        // TODO: Clear the cart and navigate to the product page
        this.props.dispatch({
            type: 'CLEAR_CART'
          });
          this.props.history.push('/');
    }

    removeItem = (event) => {
        this.props.dispatch({
            type: 'REMOVE',
            payload: event.target.dataset.id,
        })
    }

    render() {
        let total = 0;
        const checkoutList = this.props.reduxState.checkoutReducer.map((item, index) => {
            total+=item.price;
            return (
                <ul key={index}>
                    <li>{item.name} : {item.price} <button data-id={index} onClick={this.removeItem}>Delete</button></li>
                </ul>
            )
        })

        total = total.toFixed(2);

        return (
            <div>
                <h2>Checkout</h2>
                {/* TODO: Display items in the cart */}
                {checkoutList}
                Total Price: <TotalPrice total={total}/>
                <button onClick={this.handleCheckout}>Checkout</button>
            </div>
        )
    }
}

export default connect(mapReduxStateToProps)(Checkout)