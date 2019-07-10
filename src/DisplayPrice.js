import React, { Component } from 'react';

class DisplayPrice extends Component {
    state = {}
    render() { 
        return (
            <div className="crypto" id={this.props.base}>
                <div className="icon"></div>
                <h2>{this.props.base}</h2>
                <p className={this.props.change}>{this.props.amount}</p>
            </div>
        );
    }
}
 
export default DisplayPrice;