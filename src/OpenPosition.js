import React, { Component } from "react";

class OpenPosition extends Component {
    state = {  }
    render() { 
        return (
            <div className="open-position" id="BTC">
                <div className="icon"></div>
                <h2>BTC</h2>
                <p className="quantity">0.0110</p>
                <p className="bought-for">11686.235</p>
                <p className="diff">243.33</p>
                <input type="number" step="0.01" min="0" />
                <button className="sell">Sell</button>
            </div>
        );
    }
}
 
export default OpenPosition;