import React, { Component } from "react";

class OpenPosition extends Component {
    render() { 
        return (
            <div className="open-position" id={this.props.base}>
                <div className="icon"></div>
                <h2>{this.props.base}</h2>
                <p className="quantity">{this.props.quantity}</p>
                <p className="bought-for">{this.props.boughtFor}</p>
                <p className="diff">243.33</p>
                <input type="number" step={this.props.quantity / 100} min="0" max={this.props.quantity} />
                <button className="sell">Sell</button>
            </div>
        );
    }
}
 
export default OpenPosition;