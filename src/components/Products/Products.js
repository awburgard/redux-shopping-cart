import React, { Component } from 'react';
import ProductForm from '../ProductForm/ProductForm';
import ProductList from '../ProductList/ProductList';
import mapReduxStateToProps from '../../modules/mapReduxStateToProps';
import { connect } from 'react-redux'

class Products extends Component {
    // TODO: Use the productReducer instead of state



    addNewProduct = (product) => {
        console.log(product);
        // TODO: Switch from using local state to dispatching an action
        this.setState({
            products: [...this.state.products, product],
        })
    }

    render() {
        return (
            <div>
                <h2>Products</h2>
                <ProductForm addNewProduct={this.addNewProduct} />
                <ProductList products={this.props.reduxState.productReducer} />
            </div>
        )
    }
}

export default connect(mapReduxStateToProps)(Products)