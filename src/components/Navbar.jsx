import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
            }}
        >
            <span className="logo">MI STORE</span>
            <div>
                <Link className="navLink" to="/">
                    Home
                </Link>
                <Link className="navLink" to="/cart">
                    Cart
                </Link>
            </div>
        </div>
    );
};

export default Navbar;