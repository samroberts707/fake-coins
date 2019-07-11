import React, { Component } from "react";
import { connect } from "react-redux";
import Navigation from './Navigation';
import DisplayPrice from './DisplayPrice';
import OpenPosition from './OpenPosition';
import {getBTCPrice,getETHPrice} from './store/actions';

class Home extends Component {
    // constructor(props) {
    //     super(props);

    //     this.state = {
    //         // change: "none"
    //     };
    // }
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
        return (
          <div>
              <Navigation/>
              <div id="prices">
                  <h1>Prices</h1>
                  {priceObjects}
              </div>
              <div id="positions">
                  <h1>Positions</h1>
                  <OpenPosition />
              </div>
          </div>  
        );
    }
}

// function compareDiff(object) {
//     if (this.props.prices[object].data.amount > prevProps.prices[object].data.amount) {
//         this.setState({
//             change: "increase"
//         });
//     } else if (this.props.prices.data.amount < prevProps.prices.data.amount) {
//         this.setState({
//             change: "decrease"
//         });
//     }
// }

const mapStateToProps = (state) => {
    return {
        prices: state
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