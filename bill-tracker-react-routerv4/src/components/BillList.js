import React, { Component } from 'react';
import BillItem from './BillItem';


class BillList extends Component {
  render() {
    return (
      <div>
        <h2>This is an UL that will hold bill search results</h2>
        <ul>
          <BillItem/>
          <BillItem/>
          <BillItem/>
        </ul>
      </div>
    );
  }
}

export default BillList;
