import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
    <header className="App-header">
        <NavLink exact to="/">
            <h3 className="App-nav">ekino.<span>scope</span></h3>
        </NavLink>
        <NavLink exact to="/" activeStyle={{ color: '#DC0031' }} activeClassName="activeLink">
            <h3 className="App-nav">list</h3>
        </NavLink>
        <NavLink exact to="/map" activeStyle={{ color: '#DC0031' }} activeClassName="activeLink">
            <h3 className="App-nav">map</h3>
        </NavLink>
        <NavLink exact to="/project" activeStyle={{ color: '#DC0031' }} activeClassName="activeLink">
            <h3 className="App-nav">project view</h3>
        </NavLink>
    </header>
);

export default Header;