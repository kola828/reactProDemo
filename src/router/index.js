import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Login from "../view/login";
import Home from "../view/home";

class App extends React.Component {
  render(){
    return (
      <div>
        <header>头部</header>
        <div className="container">
          <Router>
            <div className="navigation">
              <Link to="/">Home</Link>
              <Link to="/login">Login</Link>
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

