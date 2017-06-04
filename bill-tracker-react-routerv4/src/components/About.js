import React, { Component } from 'react';
import {Link} from 'react-router-dom';


class About extends Component {
  render() {
    return (
      <div>
        I am the about page.

        <ul>
          <li><Link to='/'>Home</Link></li>
          {this.props.children}
          <li><Link to='/about'>About</Link></li>

          {this.props.children}
          <li><Link to='/contact'>Contact Us</Link></li>
          <li><Link to='/demo'>Demo</Link></li>
        </ul>
      </div>
    );
  }
}

export default About;
