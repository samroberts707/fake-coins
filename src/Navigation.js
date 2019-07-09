import React, { Component } from "react";
import Logo from './media/imgs/brand.png';

class Navigation extends Component {
    render() {
        return (
            <nav id="navigation">
                <div className="brand">
                    <img src={Logo} alt="Fake Coin" />
                    <h1>Fake Coin</h1>
                </div>
            </nav>
        )
    }
}
export default Navigation;