import React, {Component} from 'react';
import {IndexLink, Link} from 'react-router';




class NavBar extends Component {




  render(){
    return(
    <ul>

      <li><IndexLink to="/" activeClassName="active" className="link">Home</IndexLink></li>
      <li><Link to="Result" activeClassName="active" className="link">Results</Link></li>

    </ul>

  )
  }
}

export default NavBar;
