import React, { Component } from 'react';
import { connect } from "react-redux";
import {addNewPosition} from './store/actions';

class DisplayPrice extends Component {
    render() { 
        return (
            <div className="crypto" id={this.props.base}>
                <form onSubmit={e => {
                    e.preventDefault()
                    if (this._inputElement.value !== 0) {
                        this.props.addNewPosition(this.props.base,this._inputElement.value,this.props.amount);
                        this._inputElement.value = "";
                    }
                }}>
                    <div className="icon"></div>
                    <h2>{this.props.base}</h2>
                    <p className={this.props.change}>{this.props.amount}</p>
                    <input type="number" min="0" step="0.01" ref={(a) => this._inputElement = a} />
                    <button className="buy">Buy</button>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addNewPosition: (base, quantity, boughtFor) => dispatch(addNewPosition(base, quantity, boughtFor))
    }
}

var connectedComponent = connect(null,mapDispatchToProps)(DisplayPrice)
 
export default connectedComponent;