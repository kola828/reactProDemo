// import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Login from "../view/login";
import Home from "../view/home";

class App extends React.Component {
  render(){
    return (
      <Router>
        <div>
          <Route exact path='/' component={Home} />
          <Route  path='/login' component={Login} />
        </div>
      </Router>
    )
  }
}

// module.exports = App;
export default App

