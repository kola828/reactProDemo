// import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import xue from './xuehua.png'
import css from '../../style/style.styl'

class Home extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div>
        <div>index</div>
        <Link to="/login">login</Link>
        <img src={xue} />
      </div>
    )
  }

  click(){
    console.log(234);
  }
}

export default Home