import React, { Component } from 'react';

class TotalPrice extends Component {
    render(){
        return(
            <div key={this.props.index}>
                <p>{this.props.total}</p>
            </div>
        )
    }
}
export default TotalPrice;