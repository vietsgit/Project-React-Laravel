import React, { Component } from 'react';
import "./Header.css";

class Header extends Component {
    render() {
        return (
            <div className="Header">
                <div className="">
                    <div className="logo">
                        <img src="Logo/logo.jpg" alt="logo" />
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;