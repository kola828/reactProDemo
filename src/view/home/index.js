import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class Home extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div>
        <div>index</div>
        <Link to="/login">login</Link>
      </div>
    )
  }
}

module.exports = Home;