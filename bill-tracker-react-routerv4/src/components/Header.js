import React, { Component } from 'react';

import {Link} from 'react-router-dom';
import '../css/zintrojs.css';
import '../css/st-menu.css';
import '../css/global.css';
import '../css/zhome.css';

class Header extends Component {
  render() {
    return (
    <div>

        I am the header content.

        // <nav>
        //   <ul>
        //     <li><Link to='/'>Home</Link></li>
        //     <li><Link to='/about'>About</Link></li>
        //     <li><Link to='/contact'>Contact Us</Link></li>
        //     <li><Link to='/demo'>Demo</Link></li>
        //   </ul>
        // </nav>


          <nav className="st-menu st-effect-7" id="menu-7">
            <a id="logoText" href="/">
              <img id="logoImage" src="./images/logo-balloon.png" alt="Bill Tracker logo" />
              Bill Tra<span className="fixBigKerningGap">c</span>k<span className="fixSmallKerningGap">e</span>r
            </a>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/about'>About</Link>
              </li>
              <li>
                <Link to='/contact'>Contact Us</Link>
              </li>
              <li>
                <Link to='/demo'>Demo</Link>
              </li>
            </ul>
          </nav>
          <div className="st-content">

              <div className="st-content-inner">
              <div className="banner homeSection">

                <header>

                  <div className="container">

                    <a id="logoText" href="/">
                      <img id="logoImage" src="../images/logo-balloon.png" alt="Bill Tracker logo" />
                      Bill Tra<span className="fixBigKerningGap">c</span>k<span className="fixSmallKerningGap">e</span>r
                    </a>

                    <div id="st-trigger-effects">
                      <button id="mobileMenuButton" data-effect="st-effect-7">
                        <i className="fa fa-bars"></i>
                      </button>
                    </div>

                    <ul id="ultraTopNav">
                      <li><Link to='/bills'>Bills</Link></li>
                      <li><Link to='/about'>About</Link></li>
                      <li><Link to='/blog'>Blog</Link></li>
                      <li><Link to='/contact'>Contact Us</Link></li>
                      <li><Link to='/demo'>Demo</Link></li>
                    </ul>

                  </div>

                </header>
              </div>
            </div>
          </div>

        </div>


    );
  }
}

export default Header;
