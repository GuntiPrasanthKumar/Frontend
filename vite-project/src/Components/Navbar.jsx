import React from 'react';
import './Navbar.css';
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className='navbar'>
      <Link to='/learning'>
        <div className='learning-btn' style={{ background: '#2563eb', color: '#fff', padding: '0.5rem 1rem', borderRadius: '6px', fontWeight: 'bold' }}>
          🎓 Learning Hub (46 Topics)
        </div>
      </Link>
      <Link to='/'>
        <div className='additem'>Add Item</div>
      </Link>
      <Link to='/showitem'>
        <div className='showitem'>Show Item</div>
      </Link>
    </div>
  );
}

export default Navbar;
