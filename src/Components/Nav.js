import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <nav className="mainNav">
        
          
        
        <ul className="navItems">
           <Link to='/'><h1 className='logo'>Will Harris</h1> </Link>
          <Link to='/about'><li>About</li></Link>
          <Link to='/work'><li>Work</li></Link>
          <Link to='/contact'><li>Contact</li></Link>
          
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
