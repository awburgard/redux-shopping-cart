import React, { Component } from 'react';
import mapReduxStateToProps from '../../modules/mapReduxStateToProps';
import { connect } from 'react-redux'
import TotalPrice from '../TotalPrice/TotalPrice'
import swal from 'sweetalert';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Typography from '@material-ui/core/Typography';



class Checkout extends Component {

    handleCheckout = () => {
        // TODO: Clear the cart and navigate to the product page
        this.props.dispatch({
            type: 'CLEAR_CART'
        });
        this.props.history.push('/');
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
            .then((willDelete) => {
                if (willDelete) {
                    this.props.dispatch({
                        type: 'REMOVE_CHECKOUT',
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
        let total = 0;
        const checkoutList = this.props.reduxState.checkoutReducer.map((item, index) => {
            total += parseFloat(item.price);
            return (
                <div key={index}>
                    <Typography variant="h6" gutterBottom>{item.name} : {item.price} <IconButton data-id={index} onClick={this.removeItem}><DeleteIcon/></IconButton></Typography>
                </div>
            )
        });

        total = total.toFixed(2);

        return (
            <div>
                <Typography variant="h5" gutterBottom>Checkout</Typography>
                {/* TODO: Display items in the cart */}
                {checkoutList}
                <Typography variant="h6" gutterBottom>Total Price: </Typography> <TotalPrice total={total} />
                <IconButton onClick={this.handleCheckout}><AddShoppingCartIcon/></IconButton>
            </div>
        )
    }
}

export default connect(mapReduxStateToProps)(Checkout)