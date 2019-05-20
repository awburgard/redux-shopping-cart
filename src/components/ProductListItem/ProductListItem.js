import React, { Component } from 'react';
import mapReduxStateToProps from '../../modules/mapReduxStateToProps';
import { connect } from 'react-redux'
import swal from 'sweetalert';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete'


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
            buttons: ["Oh noez!", "Aww yiss!"],
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    this.props.dispatch({
                        type: 'REMOVE_PRODUCT',
                        payload: dataId,
                    })
                    swal('Poof! Your item has been remove!', {
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
                {this.props.product.name}: {this.props.product.price} <IconButton onClick={this.addProductToCart}><AddShoppingCartIcon/></IconButton>
                <IconButton data-id={this.props.id} onClick={this.removeItem}><DeleteIcon/></IconButton>
            </div>
        )
    }
}

export default connect(mapReduxStateToProps)(ProductListItem)