import React, { Component } from 'react';



class BillItem extends Component {
  render() {
    return (
      <li>
        I am a bill item and I show a summary of each bill result.
        <button>See more info about the bill</button>
      </li>
    );
  }
}

export default BillItem;
