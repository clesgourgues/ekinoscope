import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
    <header className="App-header">
        <NavLink exact to="/">
            <h3 className="App-nav">ekino.<span>scope</span></h3>
        </NavLink>
        <NavLink exact to="/" activeClassName="activeLink">
            <h3 className="App-nav">list</h3>
        </NavLink>
        <NavLink exact to="/map" activeClassName="activeLink">
            <h3 className="App-nav">Map</h3>
        </NavLink>
        <NavLink exact to="/projects" activeClassName="activeLink">
            <h3 className="App-nav">Project view</h3>
        </NavLink>
    </header>
);

export default Header;