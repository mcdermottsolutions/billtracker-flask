import React, { Component } from 'react';
// import Home from './Home';
import {Link} from 'react-router-dom';


class Header extends Component {
  render() {
    return (
      <p>
        I am the header content.

        <nav>
          <ul>
            <li><Link to='/'>Home</Link></li>
            {this.props.children}
            <li><Link to='/about'>About</Link></li>
            {this.props.children}
            <li><Link to='/contact'>Contact Us</Link></li>
            <li><Link to='/demo'>Demo</Link></li>
          </ul>
        </nav>

      </p>
    );
  }
}

export default Header;
