import React, {Component} from 'react';
import ResultItem from './ResultItem'


class Result extends Component {




  render(){
    return(
    <div>
    <p>I am the results list page.</p>
    <ul>

    <ResultItem/>

    </ul>
    </div>
  )
  }
}

export default Result;
