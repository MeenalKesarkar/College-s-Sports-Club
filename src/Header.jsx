import React from 'react'
import { Link }  from "react-router-dom";

function Header() {
  return (
    <header className='header'>
        <h1 className='logo'>SPORTS ClUB</h1>
            <nav className='navbar'>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/sports">Sports</Link>
                <Link to="/login">Login</Link>
            </nav>
    </header>
    
  );
}
export default Header
