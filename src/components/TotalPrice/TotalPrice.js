import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';

class TotalPrice extends Component {
    render(){
        return(
            <div key={this.props.index}>
                <Typography variant="h6" gutterBottom>{this.props.total}</Typography>
            </div>
        )
    }
}
export default TotalPrice;