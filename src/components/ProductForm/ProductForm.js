import React, { Component } from 'react';
import mapReduxStateToProps from '../../modules/mapReduxStateToProps';
import { connect } from 'react-redux'
import 'bulma/css/bulma.css';
import Input from '@material-ui/core/Input';


class ProductForm extends Component {
    // You will need to keep this state in this component
    // if you're only using something in one component,
    // you do not need to move it to redux
    state = {
        productToAdd: { name: '', price: 0 }
    }

    handleChange = (event) => {
       let inputValue = event.target.value;
       const propertyKey = event.target.dataset.name
        this.setState({
            productToAdd: {
                ...this.state.productToAdd,
                [propertyKey] : inputValue,
            },
        });
    }

    addProduct = (event) => {
        event.preventDefault();
        // TODO: Dispatch here
        this.props.dispatch({
            type: 'ADD_NEW_PRODUCT',
            payload : this.state.productToAdd
          });
}


render() {
    return (
        <form onSubmit={this.addProduct}>
            <Input data-name="name" onChange={this.handleChange} type="text" placeholder="name" />
            <Input data-name="price" onChange={this.handleChange} type="text" placeholder="price" />
            <Input type="submit" value="Submit" />
        </form>
    )
}
}

export default connect(mapReduxStateToProps)(ProductForm)