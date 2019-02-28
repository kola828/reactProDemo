import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Login from "../view/login";
import Home from "../view/home";

class App extends React.Component {
  render(){
    return (
      <div>
        <header>blog</header>
        <div className="container">
          <Router>
            <div className="navigation">
              <Link to="/" className="is_active">简介</Link>
              <Link to="/login">笔记</Link>
              <Link to="/login">工具</Link>
              <Link to="/login">收藏</Link>
            </div>
          </Router>
          <Router>
            <div className="right_cont">
              <Route exact path='/' component={Home} />
              <Route path='/login' component={Login} />
            </div>
          </Router>
        </div>
      </div>
    )
  }
}

export default App

