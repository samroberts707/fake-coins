import React, { Component } from "react";
import { connect } from "react-redux";
import Navigation from './Navigation';
import DisplayPrice from './DisplayPrice';
import {getBTCPrice} from './store/actions';
import { throwStatement } from "@babel/types";

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            change: "none"
        };
    }
    componentDidMount() {
        var self = this;
        this.props.getBTCPrice();
        setInterval(function() {
            self.props.getBTCPrice();
        }, 32000);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.prices.data.amount > prevProps.prices.data.amount) {
            this.setState({
                change: "increase"
            });
        } else if (this.props.prices.data.amount < prevProps.prices.data.amount) {
            this.setState({
                change: "decrease"
            });
        }
    }

    render() {
        var priceObjects = [];
        console.log(priceObjects);
        return (
          <div>
              <Navigation/>
              <div id="prices">
                  <h1>Prices</h1>
                  <DisplayPrice base={this.props.prices.data.base} amount={this.props.prices.data.amount} change={this.state.change} />
              </div>
          </div>  
        );
    }
}

const mapStateToProps = (state) => {
    return {
        prices: state
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        getBTCPrice: () => dispatch(getBTCPrice())
    }
}

// The HOC
var connectedComponent = connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);

export default connectedComponent;