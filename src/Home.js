import React, { Component } from "react";
import { connect } from "react-redux";
import Navigation from './Navigation';
import DisplayPrice from './DisplayPrice';
import {startSetPrices} from './store/actions';

class Home extends Component {
    componentDidMount() {
        this.props.startSetPrices();
        
    }

    componentDidUpdate() {
        console.log('Component Updated!!');
        console.log(this.props);
    }

    render() {
        var priceObjects = [];
        console.log(priceObjects);
        return (
          <div>
              <Navigation/>
              <div id="prices">
                  <h1>Prices</h1>
                  {/* <DisplayPrice base={this.props.data.base} price={this.props.data.price} /> */}
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
        startSetPrices: (data) => dispatch(startSetPrices(data))
    }
}

// The HOC
var connectedComponent = connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);

export default connectedComponent;