import React, { Component } from "react";
import Logo from './media/imgs/brand.png';
import User from './media/imgs/user-solid.svg';

class Navigation extends Component {
    render() {
        return (
            <nav id="navigation">
                <div className="brand">
                    <img src={Logo} alt="Fake Coin" />
                    <h1>Fake Coin</h1>
                </div>
                <div className="user">
                    <h4 className="bank">{this.props.bank || 0}</h4>
                    <img src={User} className="user-profile" />
                </div>
            </nav>
        )
    }
}
export default Navigation;