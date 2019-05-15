import React, { Component } from 'react';
import mapReduxStateToProps from '../../modules/mapReduxStateToProps';
import { connect } from 'react-redux'

class ProductListItem extends Component {

    addProductToCart = () => {
        console.log(this.props.product);
        // TODO: Dispatch here
        this.props.dispatch({
            type: 'SUBMIT_CART',
            payload: this.props.product
        })
    }

    removeItem = (event) => {
        this.props.dispatch({
            type: 'REMOVE_PRODUCT',
            payload: event.target.dataset.id
        })
    }

    render() {
        return (
            <div>
                {this.props.product.name}: {this.props.product.price} <button onClick={this.addProductToCart}>Add to Cart</button>
                <button data-id={this.props.id} onClick={this.removeItem}>Remove</button>
            </div>
        )
    }
}

export default connect(mapReduxStateToProps)(ProductListItem)