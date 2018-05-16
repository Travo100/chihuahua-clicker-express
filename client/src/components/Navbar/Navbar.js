import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => (
    <nav className="navbar navbar-inverse">
        <div className="container-fluid">
            <div className="navbar-header">
                <Link className="navbar-brand" to="/">Chihuahua Clicker</Link>
            </div>
            <ul className="nav navbar-nav navbar-right">
                <Link className="navbar-brand" to="/">Home</Link>
                <Link className="navbar-brand" to="/submit">Submit</Link>
            </ul>
        </div>
    </nav>
);

export default Navbar;