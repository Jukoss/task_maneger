import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Header extends Component {

  render() {
    return (
      <header className="header">
        <div className="logo">
        <Link to="/">T<span>ask</span>M<span>aneger 0.1.0</span></Link>
       
        </div>
        <div className="user-panel">
          <ul>
            <li><Link to="/deleted">deleted</Link></li>
          </ul>
        </div> 
      </header>
    );
  }
}

export default Header;
