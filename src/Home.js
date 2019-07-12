import React, { Component } from "react";
import { connect } from "react-redux";
import Navigation from './Navigation';
import DisplayPrice from './DisplayPrice';
import OpenPosition from './OpenPosition';
import {getBTCPrice,getETHPrice} from './store/actions';

class Home extends Component {
    componentDidMount() {
        var self = this;
        this.props.getBTCPrice();
        this.props.getETHPrice();
        setInterval(function() {
            self.props.getBTCPrice();
            self.props.getETHPrice();
        }, 32000);
    }

    componentDidUpdate() {
        
    }

    render() {
        console.log('New Render!');
        var priceObjects = [];
        for (var object in this.props.prices) {
            priceObjects.push(<DisplayPrice key={object} amount={this.props.prices[object].data.amount} base={this.props.prices[object].data.base} />)
        }
        var positionObjects = [];
        for (var object in this.props.user.positions) {
            positionObjects.push(<OpenPosition key={this.props.user.positions[object].id} base={this.props.user.positions[object].base} quantity={this.props.user.positions[object].quantity} boughtFor={this.props.user.positions[object].boughtFor} />);
        }
        return (
          <div>
              <Navigation bank={this.props.user.bank}/>
              <div id="prices">
                  <h1>Prices</h1>
                  {priceObjects}
              </div>
              <div id="positions">
                  <h1>Positions</h1>
                  {positionObjects}
              </div>
          </div>  
        );
    }
}

const mapStateToProps = (state) => {
    return {
        // Map different States to props so I can keep my FOR loops
        prices: [
            state['btc'],
            state['eth']
        ],
        user: state['user']
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        getBTCPrice: () => dispatch(getBTCPrice()),
        getETHPrice: () => dispatch(getETHPrice())
    }
}

// The HOC
var connectedComponent = connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);

export default connectedComponent;