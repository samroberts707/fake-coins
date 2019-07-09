import React, { Component } from 'react';

class DisplayPrice extends Component {
    state = {}
    render() { 
        return (
            <div className="crypto" id={this.props.base}>
                <h2>{this.props.base}</h2>
                <p>{this.props.price}</p>
            </div>
        );
    }
}
 
export default DisplayPrice;