import React from 'react';
import './Navbar.css'
import {Link} from "react-router-dom";

function Navbar() {
    return (
        <div className='navbar'>
            <Link to='/'>
                <div className='additem'>Add Item</div>
            </Link>
            <Link to='/showitem' >
                <div className='showitem'>Show Item</div>
            </Link>
        </div>
    );
}

export default Navbar;