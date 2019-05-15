import React, { Component } from 'react';
import mapReduxStateToProps from '../../modules/mapReduxStateToProps';
import { connect } from 'react-redux'
import swal from 'sweetalert';

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
       const dataId = event.target.dataset.id
        swal({
            Title: 'Are you sure?',
            text: 'This will delete your item',
            icon: 'warning',
            buttons: true,
            dangerMode: true,
        })
        .then((willDelete)=>{
            if(willDelete){
                this.props.dispatch({
                    type: 'REMOVE_PRODUCT',
                    payload: dataId,
                })
                swal('Poof! Your item has been remove!',{
                    icon: 'success',
                });
            } else {
                swal('Your item is safe!')
            }
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