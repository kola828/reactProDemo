import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Login from "../view/login";
import Home from "../view/home";

class App extends React.Component {
  render(){
    return (
      <Router>
      {/* <div>
       <Link to="/">Login</Link>
      <Link to="/home">home</Link>
      <hr/> */}
      <Route exact path='/' component={Login} />
      {/* <Route  path='/home' component={Home} /> */}
      {/* </div> */}
      </Router>
    )
  }
}

module.exports = App;

