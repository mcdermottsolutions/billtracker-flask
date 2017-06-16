import React, { Component } from 'react';

import '../css/zintrojs.css';
import '../css/st-menu.css';
import '../css/global.css';
import '../css/zhome.css';



class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="container">
          <p className="footerItem1">Texas capitol photo by <a target="_blank" href="https://www.flickr.com/photos/thelukeparker/14170034048/in/photolist-nAa8rS-nbT8E6-nbT3P6">Luke Parker</a>.</p>
          <p className="footerItem2">See our code on <a target="_blank" href="https://github.com/bill-tracker/bill-tracker">Github</a>.</p>
          <p className="footerItem3">An <a target="_blank" href="http://atxhackforchange.org/">ATX Hack For Change</a> 2015 project.</p>
        </div>
      </footer>
    );
  }
}

export default Footer;
