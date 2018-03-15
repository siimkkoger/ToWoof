import React, { Component } from 'react';
import './Navbar.css';


class Navbar extends Component {

    render() {
        return (
            <div className="Navbar">
                <li className="navLi"><a href="">Home</a></li>
                <li className="navLi"><a href="">News</a></li>
                <li className="navLi"><a href="">Contact</a></li>
                <li className="navLi"><a href="">About</a></li>
            </div>
        );
    }
}

export default Navbar;