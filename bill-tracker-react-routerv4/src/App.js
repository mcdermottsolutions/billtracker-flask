import Home from './components/Home';
import BillList from './components/BillList'
import About from './components/About';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Demo from './components/Demo';
import Header from './components/Header';
import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';


// const Home = () => (
//   <div>
//     <h2>Home</h2>
//   </div>
// )
//
// const About = () => (
//   <div>
//     <h2>About</h2>
//   </div>
// )

const BasicExample = () => (
  <Router>
    <div>

        <Route exact path="/" component={Home}/>
        
        <Route path="/bills" component={BillList}/>
        <Route path="/about" component={About}/>
        <Route path="/blog" component={Blog}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/demo" component={Demo}/>

    </div>
  </Router>
)
export default BasicExample
